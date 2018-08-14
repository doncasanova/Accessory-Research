import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "./api";
import "./home.css"
const api = new API();

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profiles: []
    }
  }

  componentDidMount() {
    const profilesFromApi = api.getFans();

    this.setState({ profiles: profilesFromApi });
  }

  render() {
    return (
      <div className = "signUpHome">
        <h1>Accessory Research Customer Login/Sign Up</h1>
        <Link to="/profile/create">Create a profile</Link>

        <h2>Our user profiles</h2>
        <ul>
          { this.state.profiles.map((profile) => {
            return (profile.name) ? 
              <li key={profile.name}>
                <Link to={"/profile/" + profile.name}>
                  {profile.name}
                </Link>
              </li>

              : null
          })}
        </ul>
      </div>
    )
  }
}