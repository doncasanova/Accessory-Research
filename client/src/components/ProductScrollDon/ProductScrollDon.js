import React from "react";
import './ProductScrollDon.css';
import Product from "../../components/Product";

class ProductScrollDon extends React.Component {
  render() {
    return (

      <div className="donsCSS">
        <nav id="navbar-example2" className="navbar navbar-light bg-light navTest fixed-top">
          <a className="navbar-brand" href="#">Navbar</a>
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a className="nav-link" href="#fat">@fat</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#mdo">@mdo</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#one">one</a>
                <a className="dropdown-item" href="#two">two</a>
                <div role="separator" class="dropdown-divider"></div>
                <a className="dropdown-item" href="#three">three</a>
              </div>
            </li>
          </ul>
        </nav>
        <div data-spy="scroll" data-target="#navbar-example2" data-offset="0">
          <div className="row">
            <h4 id="fat" className="test">
          fat
            </h4>
          </div>
          <div className="row">
            <h4 id="mdo" className="test">
           mdo
            </h4>
          </div>
          <div className="row">
            <h4 id="one" className="test">
         one
            </h4>
          </div>
          <div className="row">
            <h4 id="two" className="test">
             two
            </h4>
          </div>
          <div className="row">
            <h4 id="three" className="test">
            three
            </h4>
          </div>
        </div >
      </div >
    )
  }
}

export default ProductScrollDon;