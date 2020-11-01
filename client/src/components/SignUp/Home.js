import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "./api";
//import "./home.css";
const api = new API();

export default class Home extends Component {
  constructor(props) {
    super(props);

      this.state = {
          profiles: []
      };
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
          <Link className="btn btn-dark" to="/profile/create">Create a profile</Link>
          <Link className="btn btn-dark" to="/login">Goto Login</Link>
        </div>
      </div>
    )
  }
}