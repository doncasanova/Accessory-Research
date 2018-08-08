import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";

import './CustomerInfo.css';

class CustomerInfo extends Component {
    render() {
      return (
        <Container fluid>
          <Row>
            <Col size="md-12 sm-12">
              <Jumbotron>
              <div><p className = "AR2-css">Customer Page</p></div>
              </Jumbotron>
            </Col>
          </Row>
        </Container>
      );
    }
  }
  
  export default CustomerInfo;