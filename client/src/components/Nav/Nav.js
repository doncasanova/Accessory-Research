import React from "react";
import './Nav.css';


const Nav = () => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-dark NavCSS">
      <img src="./Nav/AR.PNG" width="30" height="30" alt=""></img>
      <a className="navbar-brand" href="/">
        Welcome to Accessory Research
      </a>
      <a className="navbar-brand " href="/products">
        Products Page
      </a>
    </nav>
  </div>
);

export default Nav;
