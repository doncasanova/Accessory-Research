import React, { Component } from 'react';
import './Nav.css';
import Login from "../../components/Login";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
    };
  }
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    const collapsed = this.state.collapsed;
    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <a className="navbar-brand AR-css" href="/">AR</a>
        <button onClick={this.toggleNavbar} className={`${classTwo}`} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`${classOne}`} id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/products">Products</a>
            </li>
            <li className="nav-item dropdown">
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/">Action</a>
                <a className="dropdown-item" href="/">Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/">Something else here</a>
              </div>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="/login">Login</a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="/product/scroll/andrew">ScrollAndrew</a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="/product/scroll/chuck">ScrollChuck</a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="/product/scroll/don">ScrollDon</a>
            </li>

          </ul>
           <Login/>
          {/* <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form> */}
        </div>
      </nav>

    );
  }
}

export default Nav;