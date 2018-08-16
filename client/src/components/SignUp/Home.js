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
      <div className="row justify-content-center">
        <div className=" col-6 signUpHome">
          <h3>Customer Login/Sign Up</h3>
          <Link className="btn btn-dark" Dark to="/profile/create">Create a profile</Link>
          <Link className="btn btn-dark" Dark to="/login">Goto Login</Link>
          {/* <h3>Our user profiles</h3>
          <ul className="signUpHomeProfilrButton">
            {this.state.profiles.map((profile) => {
              return (profile.name) ?
                <li key={profile.name}>
                  <Link class="btn btn-dark " Dark to={"/profile/" + profile.name}>
                    {profile.name}
                  </Link>
                </li>

                : null
            })} */}
          {/* </ul> */}
        </div>
      </div>
    )
  }
}