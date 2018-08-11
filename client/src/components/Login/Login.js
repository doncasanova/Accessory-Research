import React, { Component } from "react";
import { Redirect } from 'react-router'
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Col } from "../../components/Grid";
import "./Login.css";
import API from "../../utils/API";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      customer: {}
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    API.getCustomerByEmail(this.state.email, this.state.password)
      // .then(res => this.setState({ customer: res.data }))
    .then((res) => {
      if (res.data !== null)
        this.setState({ customer: res.data })
    }
    )
  }

  render() {

    // if (this.state.customer !== null) {
    if (this.state.customer.email) {
<<<<<<< HEAD
      return <Redirect to="/customer/info" customer={this.state.customer} />
=======
      // return <Redirect to="/CustomerInfo" customer={this.state.customer} />
      //   return (<Redirect to={{
      //     pathname: '/CustomerInfo/'+this.state.customer._id,
      //     state: { customer: this.state.customer }
      // }} />)
      return <Redirect to={"/CustomerInfo/" + this.state.customer._id} />
>>>>>>> master
    }
    return (

      <row className="d-flex justify-content-center">
        <Col size=" md-6 lg-6">
          <Col size="lg-6">
            <div className="Login">
              <Col size="lg-12 ">
                <form onSubmit={this.handleSubmit}>
                  <FormGroup controlId="email" bsSize="large">
                    <ControlLabel>Email</ControlLabel>
                    <FormControl
                      autoFocus
                      type="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                  </FormGroup>
                  <FormGroup controlId="password" bsSize="large">
                    <ControlLabel>Password</ControlLabel>
                    <FormControl
                      value={this.state.password}
                      onChange={this.handleChange}
                      type="password"
                    />
                  </FormGroup>
                  <Button
                    block
                    bsSize="large"
                    disabled={!this.validateForm()}
                    type="submit"
                  >
                    Login
          </Button>
                </form>
              </Col>
            </div>
          </Col>
        </Col>
      </row>
    )
  }
}