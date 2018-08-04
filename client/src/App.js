import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Products from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import PaypalButton from './components/PayPal/PaypalButton.js';
import FilmCleaner from './components/ProductDescription/ProductDesc.js';

const CLIENT = {
  sandbox: 'AdOGtOUu6PM3rYwSPn9R-Q9Fjb2DTKhIOOIlL3pKi-QLT2KmpTa8xPriasyBqeyWdmSia8swrODxDxc9',
  production: 'xxxXXX',
};

const ENV = process.env.NODE_ENV === 'production'
  ? 'production'
  : 'sandbox';


class App extends React.Component {
  render() {
    const onSuccess = (payment) =>
      console.log('Successful payment!', payment);

    const onError = (error) =>
      console.log('Erroneous payment OR failed to load script!', error);

    const onCancel = (data) =>
      console.log('Cancelled payment!', data);
    return (

      <Router>
        <div>
          <Nav> 
		  hello
		  </Nav>
          <Switch>
            <Route exact path="/" component={Books} />
            <Route exact path="/Products" component={Products} />
            <Route exact path="/ProductDescription" component={FilmCleaner} />
            <Route exact path="/Products/:id" component={Products} />
            <Route component={NoMatch} />
          </Switch>
          <PaypalButton
            client={CLIENT}
            env={ENV}
            commit={true}
            currency={'USD'}
            total={100}
            onSuccess={onSuccess}
            onError={onError}
            onCancel={onCancel} />
        </div>
      </Router>
 );
}
}

    export default App;
