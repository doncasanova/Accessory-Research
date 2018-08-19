import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
import './MainPage.css';
import { Link } from "react-router-dom";

class MainPage extends Component {
  render() {
    return (
      
      <Container fluid>
        <Row>
          <Col size="md-12 sm-12">
            <Jumbotron>
            <h1 className="AR2-css">Accessory Research</h1>
            <h1 className="AR2-css">Your Anti-Static Solutions</h1>
            <Link to="/products"><button className=" AR2-css btn btn-outline-success my-2 my-sm-0">Products</button></Link>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MainPage;
