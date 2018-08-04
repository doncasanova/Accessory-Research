import React, { Component } from "react";
import Jumbotron from "../Jumbotron";
import { Col, Row, Container } from "../Grid";
import ShoppingCart from '../PayPal/shoppingCart.js';
import './ProductDesc.css';


class FilmCleaner extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12 sm-12">
            <Jumbotron>
              <ShoppingCart />
              <div className = "productDesc border border-white rounded-4">
                Completely safe for cleaning any film base, emulsion and prints.
    
    AR Static B Gone Film Cleaner dries extremely fast -- will not streak or leave a residue. Compatible with, and will not dissolve or remove, a water base opaque. One quick application and wipe removes dirt, grease, fingerprints, permanent marker and tape marks from expensive film. The AR anti-static action keeps dust and dirt from collecting on the clean surface.
    Kills static on contact
    Will not streak or leave a residue
              </div>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default FilmCleaner;