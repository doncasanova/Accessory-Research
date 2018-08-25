import React, { Component } from "react";
import { Redirect } from 'react-router'
import { Link } from "react-router-dom";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
// import ViewShoppingCart from "../../components/PayPal/ViewShoppingCart.js"
import "./Login.css";
import API from "../../utils/API";
import axios from "axios";

 
export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      customer: {},
      isLoggedIn: false,
    };
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    // this.checkIfLoggedIn = this.checkIfLoggedIn.bind(this);
  }

  logIn = (email, password) => {
    axios.post('/api/login', {
      email: email,
      password: password
    })
    .then((response) => {
      this.setState({'redirect': `/customer/${response.data.user_id}`})
      this.setState({'customer': response.data})
      // this.checkIfLoggedIn();
      this.setState({ isLoggedIn : true})
    })
    .catch(function (error) {
      // display a state error message
      alert("You have entered an invalid username or password")
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

  // componentDidUpdate() {
  //   // this.checkIfLoggedIn();
  //   this.setState({ isLoggedIn : false});
  // }

  // setLogOutState(event) {
  //   this.setState({ isLoggedIn : false});
  // }

  // checkIfLoggedIn = () => {
  //   console.log('checking....');
  //   var result;
  //   axios.get('/api/check-login')
  //   .then((resp) => {
  //     console.log('resp is', resp);
  //     // return true;
  //     if (resp.data.status) {
  //       console.log("logged in!")
  //       this.setState({ isLoggedIn : true})
  //     } else {
  //       console.log('not logged in!')
  //       this.setState({ isLoggedIn : false})
  //     }
  //   })
  //   .catch(function(err) {
  //     console.log('err is ', err);
  //     // result = false;
  //   })
  // }
  logOut = (response) => {
    console.log("logOut")
    axios.get('/api/logout', {
   
    })
    .then((response) => {
      console.log(response)
      this.setState({ isLoggedIn : false});
      this.setState({'redirect': '/'})
    })
    .catch(function (error) {
      // display a state error message
      console.log(error);
    });
  }


  render() {
   console.log("Logged in " + this.state.isLoggedIn )
    if (this.state.isLoggedIn) {
      
      return <div >
      <form className = " userLogIn form-inline"><h3> Welcome Back: {this.state.email}</h3>
      <Button onClick={() => { this.logOut() }}>Log Out</Button>
      {/* <ViewShoppingCart/> */}
      </form>
    </div>
    
    }else

    {this.state.redirect && (
      <Redirect to={this.state.redirect} />
    )}
    
    {

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
                    <Button onClick={() => { this.logIn(this.state.email, this.state.password,)} }
                      block
                      bsSize="large"
                      disabled={!this.validateForm()}
                    >
                    
                      Login
                    </Button>
               </FormGroup>
              
               <Link to="/profile/create"><Button className="btn btn-outline-success my-2 my-sm-0" type="submit">Create Account</Button></Link>
               
                  </form>
        
        </div>
      )



    }
   
  }
}