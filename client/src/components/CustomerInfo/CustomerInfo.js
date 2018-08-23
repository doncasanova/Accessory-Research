import React, { Component } from "react";
import axios from "axios";
import Jumbotron from "../../components/Jumbotron";
import { Container } from "../../components/Grid";
import API from "../../utils/API";

import './CustomerInfo.css';

class CustomerInfo extends Component {
  state = {
    customer: {},
    shipName: '',
    shipAddr1: '',
    shipAddr2: '',
    shipCity: '',
    shipState: '',
    shipZip: '',
    billName: '',
    billAddr1: '',
    billAddr2: '',
    billCity: '',
    billState: '',
    billZip: ''

  };

  // When this component mounts, grab the customer with the _id of this.props.match.params.id
  // e.g. localhost:3000/customers/599dcb67f0f16317844583fc
  // We set the state attribute "customer" to the specified Customer JSON object via the API response
  componentDidMount() {
    API.getCustomer(this.props.match.params.id) //"5b61135457150d66ee255b2a") // this.props.match.params.id (ToDo: currently hardcoded)
      .then(res => this.setState({
        customer: this.state.billAddr1,
        customer: res.data,
        shipName: res.data.shippingAddress.name,
        shipAddr1: res.data.shippingAddress.addr1,
        shipAddr2: res.data.shippingAddress.addr2,
        shipCity: res.data.shippingAddress.city,
        shipState: res.data.shippingAddress.state,
        shipZip: res.data.shippingAddress.zip,
        billName: res.data.billingAddress.name,
        billAddr1: res.data.billingAddress.addr1,
        billAddr2: res.data.billingAddress.addr2,
        billCity: res.data.billingAddress.city,
        billState: res.data.billingAddress.state,
        billZip: res.data.billingAddress.zip
      }))
      .catch(err => console.log(err));
  }
  render() {
    return (
      <Container fluid>


        <Jumbotron>
          <div className=" row p-4 justify-content-center ">
            <h2>Welcome Back!&nbsp;{this.state.shipName} &nbsp; You've Logged In!</h2>

          </div>
          <div className=" row d-flex justify-content-center">

            <div className="col-6 customerInfo border border-white rounded-4">
              {/* <p>{JSON.stringify(this.state.customer)}</p> */}
              <h4> Orders: {JSON.stringify(this.state.customer.orders)} </h4>
            </div>

            <ul className="col-4 list-inline ">
              <div className=" row p-4 justify-content-center ">
                <li className="list-inline-item border border-white customerInfo">
                  <h4> ShipTo: <br></br> {this.state.shipName}</h4>
                  <p> {this.state.shipAddr1}</p>
                  <p>  {this.state.shipAddr2}</p>
                  <p> {this.state.shipCity}</p>
                  <p> {this.state.shipState}</p>
                  <p> {this.state.shipZip}</p>
                </li>


                <li className="list-inline-item border border-white customerInfo">
                  <h4> BillTo: <br></br>  {this.state.billName}</h4>
                  <p> {this.state.billAddr1}</p>
                  <p> {this.state.billAddr2}</p>
                  <p> {this.state.billCity}</p>
                  <p> {this.state.billState}</p>
                  <p> {this.state.billZip}</p>
                  <br></br>
                </li>
              </div>
            </ul>

          </div>


          <button onClick={() => { axios.post("/api/ups", this.state) }}>testing ups route</button>
        </Jumbotron>

      </Container>
    );
  }
}

export default CustomerInfo;