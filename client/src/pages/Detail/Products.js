import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import Image from "../../components/images"
import ShoppingCart from '../../components/PayPal/shoppingCart.js';

class Products extends Component {
  render() {
    return (
      <Container fluid>
       <ShoppingCart/>
        <Row>
          <Col size="md-12 sm-12">
            <Jumbotron>
            hello your in the products page
			
            <Image/>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Products;
