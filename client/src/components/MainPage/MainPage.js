import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
import './MainPage.css';


class MainPage extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12 sm-12">
            <Jumbotron>
            <h4 >
              <div className="sp-container">
                <div className="sp-content">
                  <div className="sp-globe"></div>
                  <h2 className="frame-1">WELCOME TO</h2>
                  <h2 className="frame-2">YOUR ANTI-STATIC SOLUTIONS</h2>
                  <h2 className="frame-3">STATIC B GONE PRODUCTS</h2>
                  <h2 className="frame-4">FILM CLEANER, SCREEN PRINTERS, PLASTIC CLEANER, HEAVY DUTY AND GLASS & LENS CLEANER</h2>
                  <h2 className="frame-5">
                    <span>PRODUCED FOR YOU</span>
                    <span> BY </span>
                    <span>ACCESSORY RESEARCH.</span>
                  </h2>
                  <a className="sp-circle-link AR2-css " href="/products">AR</a>
                </div>
              </div>
            </h4>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MainPage;
