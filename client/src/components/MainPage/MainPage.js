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
                  <h2 className="frame-1">WELCOME TO YOUR ANTI-STATIC SOLUTIONS</h2>
                  <h2 className="frame-2">STATIC B GONE FILM CLEANER / STATIC B GONE SCREEN PRINTERS</h2>
                  <h2 className="frame-3" >STATIC B GONE HEAVY DUTY / STATIC B GONE PLASTIC CLEANER</h2>
                  <h2 className="frame-4">STATIC B GONE GLASS & LENS CLEANER</h2>
                  <h2 className="frame-5">
                    <span>ACCESSORY </span>
                    <span> RESEARCH</span>
                    {/* <span>ACCESSORY RESEARCH</span> */}
                  </h2>
                  <a className="sp-circle-link AR2-css " href="/products">Products</a>
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
