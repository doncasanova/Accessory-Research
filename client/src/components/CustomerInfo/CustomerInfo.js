import React, { Component } from "react";
import axios from "axios";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";

import './CustomerInfo.css';
import { get } from "mongoose";

class CustomerInfo extends Component {
  state = {
    customer: {}
  };
  constructor(props){
    super(props);
    this.setState({
        customer: props.customer
    })
}

  // When this component mounts, grab the customer with the _id of this.props.match.params.id
  // e.g. localhost:3000/customers/599dcb67f0f16317844583fc
  // We set the state attribute "customer" to the specified Customer JSON object via the API response
  componentDidMount() {
    API.getCustomer("5b61135457150d66ee255b2a") // this.props.match.params.id (ToDo: currently hardcoded)
      .then(res => this.setState({ customer: res.data }))
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
                
                <p>{JSON.stringify(this.state.customer)}</p>

                <h2> Email: {this.state.customer.email}</h2>
                <br></br>
                <h4> Orders: {JSON.stringify(this.state.customer.orders)} </h4>
                {/* <p> City: {this.state.customer.shippingAddress}</p> */}
                <br></br>
                <button onClick = {function() {axios.get("/ups")}}>testing ups route</button>
              </div>


            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CustomerInfo;