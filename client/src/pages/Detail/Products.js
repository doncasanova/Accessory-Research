import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import AmazonADD from "../../components/AmazonB";
import Image from "../../components/images"


class Products extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12 sm-12">
            <Jumbotron>
            hello your in the products page
			
			<images/>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Products;
