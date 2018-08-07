import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
import './MainPage.css';


class Books extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12 sm-12">
            <Jumbotron>
            <div><p className = "AR2-css">AR</p></div>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
