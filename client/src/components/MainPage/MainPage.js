import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
import './MainPage.css';
import Nav from "../../components/Nav";

class MainPage extends Component {
  render() {
    return (
      
      <Container fluid>
        <Row>
          <Col size="md-12 sm-12">
            <Jumbotron>
            <h4 >
            <button onClick = {"/products"}>Products</button>
            </h4>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MainPage;
