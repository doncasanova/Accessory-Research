import React from 'react';
import ReactDOM from 'react-dom';
import paypal from 'paypal-checkout';
import scriptLoader from 'react-async-script-loader';

class PaypalButton extends React.Component {

  render() {
    const {
      total,
      currency,
      env,
      commit,
      client,
      onSuccess,
      onError,
      onCancel,
    } = this.props;


    const payment = () =>
      paypal.rest.payment.create(env, client, {
        transactions: [
          {
            amount: {
              total,
              currency,
            }
          },
        ],
      });

    const onAuthorize = (data, actions) =>
      actions.payment.execute()
        .then(() => {
          const payment = {
            paid: true,
            cancelled: false,
            payerID: data.payerID,
            paymentID: data.paymentID,
            paymentToken: data.paymentToken,
            returnUrl: data.returnUrl,
          };

          onSuccess(payment);
        });


      const ReactButton = paypal.Button.driver('react', {React, ReactDOM});

    return (
      <div>
        {<ReactButton
          env={env}
          client={client}
          commit={commit}
          payment={payment}
          onAuthorize={onAuthorize}
          onCancel={onCancel}
          onError={onError}
        />}
      </div>
    );
  }
}

export default PaypalButton;