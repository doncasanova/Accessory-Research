import React, { Component } from "react";
import { Redirect } from 'react-router'
import { Link } from "react-router-dom";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import ViewShoppingCart from "../../components/PayPal/ViewShoppingCart.js"
import "./Login.css";
import API from "../../utils/API";
import axios from "axios";

 
export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      customer: {}
    };
    this.buttonWorks = this.buttonWorks.bind(this);
  }

  buttonWorks = (email, password) => {
    axios.post('/api/login', {
      email: email,
      password: password
    })
    .then((response) => {
      this.setState({'redirect': `/customer/${response.user_id}`})
    })
    .catch(function (error) {
      // display a state error message
      console.log(error);
    });
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
      return<div >
      <form className = " userLogIn form-inline"><h3> Welcome Back: {this.state.customer.email}</h3>
      <Link to="/"><button className="btn btn-outline-success my-2 my-sm-0" type="submit">Log Out</button></Link>
      <ViewShoppingCart/>
      </form>
      <Redirect to={"/customer/" + this.state.customer._id} />
    </div>
    }
    return (

      <div>
      
        {this.state.redirect && (
          <Redirect to={this.state.redirect} />
        )}

        <form className="form-inline" onSubmit={this.handleSubmit}>
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
                  <Button onClick={() => { this.buttonWorks(this.state.email, this.state.password)} }
                    block
                    bsSize="large"
                    disabled={!this.validateForm()}
                  >
                  
                    Login
                  </Button>
             </FormGroup>
            
             <Link to="/profile/create"><button className="btn btn-outline-success my-2 my-sm-0" type="submit">Create Account</button></Link>
             
                </form>
      
      </div>
    )
  }
}