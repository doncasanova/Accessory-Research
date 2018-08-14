import React, { Component } from "react";
import API from "./api";
import "./profileCreate.css"
const api = new API();

export default class ProfileCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      companyname: "",
      billtoaddress: "",
      shiptoaddress: "",
      city: "",
      city2: "",
      state: "",
      state2: "",
      zipcode: "",
      zipcode2: "",
      password: '',
      password_re: '',
      password_has_error: false,
      step: 1
    }
  }


  checkPassword() {
    if (!this.state.password || this.state.password !== this.state.password_re) {
      this.setState({ password_has_error: true });
    }
    else {
      this.handleSubmit();
    }
  }

  handleSubmit() {
    console.log(this.state.password_has_error)
    // event.preventDefault(); 
    if (false) {
      console.log("password is bad")
    }
    else {
      console.log("password is ok")
    }
  }


  handleChange(e) {
    const { name, value } = e.target
    this.setState({
      [name]: value
    }, () => {
      if (name === 'password' || name === 'password_re')
        this.checkPassword();
    }
    )
  }

  handleTextChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({ [name]: value });
  }

  handleFilmChange = (e) => {
    const splitName = e.target.name.split('-');
    const filmNumber = splitName[1];
    const value = e.target.value;

    const changedFilms = [...this.state.films];
    changedFilms[filmNumber] = value;

    this.setState({ films: changedFilms })
  }

  renderDemographicsForm() {
    return (
      <div className="row justify-content-center" >
        <div className="col-4 jumbotron ">
          <h1> Create Profile </h1>
          <form className="createForm">
            <label htmlFor="name">Name:
          <input type="text" name="name" value={this.state.name} onChange={this.handleTextChange} />
            </label>
            <br></br>
            <label htmlFor="companyname">Company Name:
          <input type="text" name="companyname" value={this.state.companyname} onChange={this.handleTextChange} />
            </label>
            <br></br>
            <label htmlFor="billtoaddress">Bill to Adress:
          <input type="text" name="billtoaddress" value={this.state.billtoaddress} onChange={this.handleTextChange} />
            </label>
            <label htmlFor="city">City:
          <input type="text" name="city" value={this.state.city} onChange={this.handleTextChange} />
            </label>
            <br></br>
            <label htmlFor="state">State:
          <input type="text" name="state" value={this.state.state} onChange={this.handleTextChange} />
            </label>
            <br></br>
            <label htmlFor="zipcode">Zip Code:
          <input type="text" name="zipcode" value={this.state.zipcode} onChange={this.handleTextChange} />
            </label>
            
            <hr className = "lineBreak"></hr>
            
            <label htmlFor="shiptoaddress">Ship to Adress:
          <input type="text" name="shiptoaddress" value={this.state.shiptoaddress} onChange={this.handleTextChange} />
            </label>
            <br></br>
            <label htmlFor="city2">City:
          <input type="text" name="city2" value={this.state.city2} onChange={this.handleTextChange} />
            </label>
            <br></br>
            <label htmlFor="state2">State:
          <input type="text" name="state2" value={this.state.state2} onChange={this.handleTextChange} />
            </label>
            <br></br>
            <label htmlFor="zipcode2">Zip Code:
          <input type="text" name="zipcode2" value={this.state.zipcode2} onChange={this.handleTextChange} />
            </label>
            <br></br>
            <label htmlFor="password">Password:
          <input type="text" name="password" value={this.state.password} onChange={(e) => this.handleChange(e)} />
            </label>
            <br></br>
            <label htmlFor="password_re">Re-enter Password:
          <input type="text" name="password_re" value={this.state.password_re} onChange={(e) => this.handleChange(e)} />
            </label>
          </form>
        </div>
      </div>
    )
  }

  renderConfirmationForm() {
    return (
      <div>
        <h2>Confirmation</h2>
        <ul>
          <li>Company Name: {this.state.companyname}</li>
          <li>Name: {this.state.name}</li>
          <li>Bill to Address: {this.state.billtoaddress}</li>
          <li>City: {this.state.city}</li>
          <li>State: {this.state.state}</li>
          <li>Zip Code: {this.state.zipcode}</li>
          <br></br>
          <br></br>
          <li>Company Name: {this.state.companyname}</li>
          <li>Name: {this.state.name}</li>
          <li>Ship to Address: {this.state.shiptoaddress}</li>
          <li>City: {this.state.city2}</li>
          <li>State: {this.state.state2}</li>
          <li>Zip Code: {this.state.zipcode2}</li>
          <li>Password: {this.state.password}</li>
          <li>Re-entered password: {this.state.password_re}</li>

        </ul>
      </div>
    )
  }

  handleNavForwardClick = (e) => {
    this.setState({ step: this.state.step + 1 });
  }

  handleNavBackClick = (e) => {
    this.setState({ step: this.state.step - 1 });
  }

  handleProfileCreate = (e) => {
    api.saveFan({
      name: this.state.name,
      companyname: this.state.companyname,
      billtoaddress: this.state.billtoaddress,
      city: this.state.city,
      state: this.state.state,
      zipcode: this.state.zipcode,
      shiptoaddress: this.state.shiptoaddress,
      city2: this.state.city2,
      state2: this.state.state2,
      zipcode2: this.state.zipcode2,
      password: this.state.password,
      password_re: this.state.password_re

    });

    this.props.history.push('/profile/home');
  }

  render() {
    return (
      <div className="profile-create">

        {this.state.step === 1 && this.renderDemographicsForm()}

        {this.state.step === 3 && this.renderConfirmationForm()}

        <div className="wizard-nav">
          {this.state.step > 1 &&
            <button type="button" class="btn btn-dark" Dark onClick={this.handleNavBackClick}>Previous</button>
          }

          {this.state.step < 3 &&
            <button type="button" class="btn btn-dark" Dark onClick={this.handleNavForwardClick}>Next</button>
          }

          {this.state.step === 3 &&
            <button type="button" class="btn btn-dark" Dark onClick={this.handleProfileCreate}>Create Profile</button>
          }
        </div>
      </div>
    )
  }
}