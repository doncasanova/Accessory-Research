import React, { Component } from "react";
import API from "./api";
import "./profileCreate.css"
const api = new API();

export default class ProfileCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      companyName: '',

      billName: '',
      billAddr1: '',
      billAddr2: '',
      billCity: '',
      billState: '',
      billZip: '',

      shipName: '',
      shipAddr1: '',
      shipAddr2: '',
      shipCity: '',
      shipState: '',
      shipZip: '',

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

  handleSubmit(e) {
    console.log(this.state.password_has_error)
    // e.preventDefault(); 
    if (this.state.password_has_error === false) {
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
      <div>
      <div className="row justify-content-center " >
        <div className="profileCreateEmail ">
        <form className="createForm form-inline">
            <label className="m-1" htmlFor="email">Email: <br></br>
              <input type="text" name="email" value={this.state.email} onChange={this.handleTextChange} />
            </label>
            <label className="m-1" htmlFor="password">Password: <br></br>
              <input type="text" name="password" value={this.state.password} onChange={(e) => this.handleChange(e)} />
            </label>
            <br></br>
            <label className="m-1" htmlFor="password_re">Re-enter Password: <br></br>
              <input type="text" name="password_re" value={this.state.password_re} onChange={(e) => this.handleChange(e)} />
            </label>
            </form>
        </div>
      </div>
      <div className="row justify-content-center" >
        <div className="col-4 profileCreateBackground ">
          <h3> Bill to info </h3>
          <form className="createForm">
            <label htmlFor="companyName">Company Name: <br></br>
              <input type="text" name="companyName" value={this.state.companyName} onChange={this.handleTextChange} />
            </label>
            <br></br>
            <label htmlFor="billName">Bill to Name: <br></br>
              <input type="text" name="billName" value={this.state.billName} onChange={this.handleTextChange} />
            </label>
            <br></br>
            <label htmlFor="billAddr1">Bill to Address Line1: <br></br>
              <input type="text" name="billAddr1" value={this.state.billAddr1} onChange={this.handleTextChange} />
            </label>
            <br></br>
            <label htmlFor="billAddr2">Bill to Address Line2: <br></br>
              <input type="text" name="billAddr2" value={this.state.billAddr2} onChange={this.handleTextChange} />
            </label>
            <br></br>
            <label htmlFor="billCity">Bill to City: <br></br>
              <input type="text" name="billCity" value={this.state.billCity} onChange={this.handleTextChange} />
            </label>
            <br></br>
            <label htmlFor="billState">Bill to State: <br></br>
              <input type="text" name="billState" value={this.state.billState} onChange={this.handleTextChange} />
            </label>
            <br></br>
            <label htmlFor="billZip">Bill to Zip Code: <br></br>
              <input type="text" name="billZip" value={this.state.billZip} onChange={this.handleTextChange} />
            </label>
          </form>
        </div>
        <div className="col-4 profileCreateBackground ">
          <h3> Ship to info </h3>
          <form className="createForm">
            <label htmlFor="shipName">Ship to Name: <br></br>
              <input type="text" name="shipName" value={this.state.shipName} onChange={this.handleTextChange} />
            </label>
            <br></br>
            <label htmlFor="shipAddr1">Ship to Address Line1: <br></br>
              <input type="text" name="shipAddr1" value={this.state.shipAddr1} onChange={this.handleTextChange} />
            </label>
            <br></br>
            <label htmlFor="shipAddr2">Ship to Address Line2: <br></br>
              <input type="text" name="shipAddr2" value={this.state.shipAddr2} onChange={this.handleTextChange} />
            </label>
            <br></br>
            <label htmlFor="shipCity">Ship to City: <br></br>
              <input type="text" name="shipCity" value={this.state.shipCity} onChange={this.handleTextChange} />
            </label>
            <br></br>
            <label htmlFor="shipState">Ship to State: <br></br>
              <input type="text" name="shipState" value={this.state.shipState} onChange={this.handleTextChange} />
            </label>
            <br></br>
            <label htmlFor="shipZip">Ship to Zip Code: <br></br>
              <input type="text" name="shipZip" value={this.state.shipZip} onChange={this.handleTextChange} />
            </label>

            <br></br>


     
          </form>
        </div>
      </div>
      </div>
    )
  }

  renderConfirmationForm() {
    return (
      <div>
        <h2>Confirmation</h2>
        <ul>
          <li>Email: {this.state.email}</li>
          <li>Company Name: {this.state.companyName}</li>
          <li>BILLING</li>
          <li>Name: {this.state.billName}</li>
          <li>Address Line1: {this.state.billAddr1}</li>
          <li>Address Line2: {this.state.billAddr2}</li>
          <li>City: {this.state.billCity}</li>
          <li>State: {this.state.billState}</li>
          <li>Zip Code: {this.state.billZip}</li>
          <br></br>
          <br></br>
          <li>Company Name: {this.state.companyName}</li>
          <li>Name: {this.state.name}</li>
          <li>SHIPPING</li>
          <li>Address Line1: {this.state.shipAddr1}</li>
          <li>Address Line2: {this.state.shipAddr2}</li>
          <li>City: {this.state.shipCity}</li>
          <li>State: {this.state.shipState}</li>
          <li>Zip Code: {this.state.shipZip}</li>
          <li>Password: {this.state.password}</li>

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
      email: this.state.email,
      companyName: this.state.companyname,
      billingAddress: { name: this.state.billName, addr1: this.state.billAddr1, addr2: this.state.billAddr2, city: this.state.billCity, state: this.state.billState, zip: this.state.billZip },
      shippingAddress: { name: this.state.shipName, addr1: this.state.shipAddr1, addr2: this.state.shipAddr2, city: this.state.shipCity, state: this.state.shipState, zip: this.state.shipZip },
      password: this.state.password

    });

    this.props.history.push('/profile/home');
  }

  render() {
    return (
      <div className="profile-create">

        {this.state.step === 1 && this.renderDemographicsForm()}

        {this.state.step === 2 && this.renderConfirmationForm()}

        <div className="wizard-nav">
          {this.state.step > 1 &&
            <button type="button" class="btn btn-dark" Dark onClick={this.handleNavBackClick}>Previous</button>
          }

          {this.state.step < 2 &&
            <button type="button" class="btn btn-dark" Dark onClick={this.handleNavForwardClick}>Next</button>
          }

          {this.state.step === 2 &&
            <button type="button" class="btn btn-dark" Dark onClick={this.handleProfileCreate}>Create Profile</button>
          }
        </div>
      </div>
    )
  }
}