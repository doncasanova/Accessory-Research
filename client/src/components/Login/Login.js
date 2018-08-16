import React, { Component } from "react";
import { Redirect } from 'react-router'
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
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
      return <Redirect to={"/customer/" + this.state.customer._id} />
    }
    return (

        <form class="form-inline" onSubmit={this.handleSubmit}>
                  <FormGroup className = "m-1" controlId="email" bsSize="large">
                    <ControlLabel>  Email  </ControlLabel>
                    <FormControl
                      autoFocus
                      type="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
              </FormGroup>
            <FormGroup className="m-1" controlId="password" bsSize="large">
                    <ControlLabel>  Password  </ControlLabel>
                    <FormControl
                      value={this.state.password}
                      onChange={this.handleChange}
                      type="password"
                    />
            </FormGroup>
            <FormGroup className="m-3">
                  <Button
                    block
                    bsSize="large"
                    disabled={!this.validateForm()}
                    type="submit">
                    Login
                  </Button>
             </FormGroup>
                </form>

    )
  }
}