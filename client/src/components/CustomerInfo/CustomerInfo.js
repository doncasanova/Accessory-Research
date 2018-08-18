import React, { Component } from "react";
import axios from "axios";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
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
//   constructor(props){
//     super(props);
//     // this.setState({
//     //     customer: props.customer
//     // })
// }

  // When this component mounts, grab the customer with the _id of this.props.match.params.id
  // e.g. localhost:3000/customers/599dcb67f0f16317844583fc
  // We set the state attribute "customer" to the specified Customer JSON object via the API response
  componentDidMount() {
    API.getCustomer(this.props.match.params.id) //"5b61135457150d66ee255b2a") // this.props.match.params.id (ToDo: currently hardcoded)
      .then(res => this.setState({ customer: res.data, 
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
        <Row>
          <Col size="md-12 sm-12">
            <Jumbotron>
              <div className="productDesc border border-white rounded-4 ">
                {/* <p className = "AR2-css">Customer Page</p> */}
                
                {/* <p>{JSON.stringify(this.state.customer)}</p> */}
                <h2>Welcome Back! You've Logged In!</h2>

                <h2> Email: {this.state.customer.email}</h2>
                <br></br>
                <h4> Orders: {JSON.stringify(this.state.customer.orders)} </h4>
                
                <h4> ShipTo Name:  {this.state.shipName}</h4>
                <p> ShipTo Addr1: {this.state.shipAddr1}</p>
                <p> ShipTo Addr2: {this.state.shipAddr2}</p>
                <p> ShipTo City: {this.state.shipCity}</p>
                <p> ShipTo State: {this.state.shipState}</p>
                <p> ShipTo Zip: {this.state.shipZip}</p>

                <h4> BillTo Name:  {this.state.billName}</h4>
                <p> BillTo Addr1: {this.state.billAddr1}</p>
                <p> BillTo Addr2: {this.state.billAddr2}</p>
                <p> BillTo City: {this.state.billCity}</p>
                <p> BillTo State: {this.state.billState}</p>
                <p> BillTo Zip: {this.state.billZip}</p>
                <br></br>
                <button onClick = {() => {axios.post("/api/ups", this.state)}}>testing ups route</button>
              </div>


            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CustomerInfo;