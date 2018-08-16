import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
import './MainPage.css';


class MainPage extends Component {
  render() {
    return (
      <div>
      <Container fluid>
        <Row>
          <Col size="md-12 sm-12">
            <Jumbotron>
            <h4 >
              <div className="sp-container">
                <div className="sp-content">
                  <div className="sp-globe"></div>
                  <h2 className="frame-1">WELCOME TO YOUR ANTI-STATIC SOLUTIONS</h2>
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
<div className="container">
  <section>
    <div className="image" data-type="background" data-speed="2"></div>
    <div className="stuff" data-type="content"><h1>Simple Parallax scroll</h1><h2>Reoptimized</h2></div>
  </section>

  <section>
    <div className="image" data-type="background" data-speed="7"></div>
    <div className="stuff" data-type="content"><h2>Made to be fast</h2><p>Lorem Deserunt maiores minima ipsa. Adipisci, corrupti, voluptatibus! Similique quidem necessitatibus provident.</p></div>
  </section>

  <section>
    <div className="image" data-type="background" data-speed="6"></div>
    <div className="stuff" data-type="content">Accusamus at ex amet perferendis atque fuga, ad earum, ipsa perspiciatis, dolore neque, accusantium consectetur quis voluptatibus culpa architecto animi natus facere expedita sed. Voluptatem odit explicabo amet neque aut.</div>
  </section>

  <section>
    <div className="image" data-type="background" data-speed="5"></div>
    <div className="stuff" data-type="content">Accusamus at ex amet perferendis atque fuga, ad earum, ipsa perspiciatis, dolore neque, accusantium consectetur quis voluptatibus culpa architecto animi natus facere expedita sed. Voluptatem odit explicabo amet neque aut.</div>
  </section>

  <section>
    <div className="image" data-type="background" data-speed="3"></div>
    <div className="stuff" data-type="content">Accusamus at ex amet perferendis atque fuga, ad earum, ipsa perspiciatis, dolore neque, accusantium consectetur quis voluptatibus culpa architecto animi natus facere expedita sed. Voluptatem odit explicabo amet neque aut.</div>
  </section>

  <section>
    <div className="image" data-type="background" data-speed="3"></div>
    <div className="stuff" data-type="content">Accusamus at ex amet perferendis atque fuga, ad earum, ipsa perspiciatis, dolore neque, accusantium consectetur quis voluptatibus culpa architecto animi natus facere expedita sed. Voluptatem odit explicabo amet neque aut.</div>
  </section>
</div>

<div className="at-twitter"><a href="//twitter.com/hendrysadrak" target="_blank">@hendrysadrak</a></div>

</div>



    );
  }
}

export default MainPage;
