import React from "react";
import './Jumbotron.css';


const Jumbotron = ({ children }) => (
  <div
    style={{ clear: "both", paddingTop: 120, textAlign: "center"}}
    className="jumbotron"
  >
    {children}
  </div>
);

export default Jumbotron;
