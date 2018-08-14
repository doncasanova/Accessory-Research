import React, { Component } from "react";
import API from "./api";
import "./profilePage.css"
const api = new API();

export default class ProfilePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: {},
      error: false
    }
  }

  componentDidMount() {
    const profileFromApi = api.getProfileByName(this.props.match.params.id);

    if (profileFromApi) {
      this.setState({ profile: profileFromApi })
    } else {
      this.setState({ error: true });
    }
  }

  renderProfile(profile) {
    return (
      <div>
        <h1>{profile && profile.name}</h1>

        <ul>
          <li>Customer Name: {profile && profile.companyname}</li>
          <li>Name: {profile && profile.name}</li>
          <li>Bill to Address: {profile && profile.billtoaddress}</li>
          <li>City: {profile && profile.city}</li>
          <li>State: {profile && profile.state}</li>
          <li>Zip Code: {profile && profile.zipcode}</li>
          <br></br>
          <br></br>
          <li>Customer Name: {profile && profile.companyname}</li>
          <li>Name: {profile && profile.name}</li>
          <li>Ship to Address: {profile && profile.shiptoaddress}</li>
          <li>City: {profile && profile.city2}</li>
          <li>State: {profile && profile.state2}</li>
          <li>Zip Code: {profile && profile.zipcode2}</li>
         
    
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div className = "profilePage">
        { this.state.error ? 
          <h1>Error: profile not found</h1>
          : this.renderProfile(this.state.profile)
        }
      </div>
    )
  }
}