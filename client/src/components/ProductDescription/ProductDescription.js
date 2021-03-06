import React, { Component } from "react";
import Jumbotron from "../Jumbotron";
import { Col, Row, Container } from "../Grid";
import ShoppingCart from '../PayPal/shoppingCart.js';
import API from "../../utils/API";
import './ProductDescription.css';
import AmazonAdd from "../AmazonB";


class ProductDescription extends Component {
  state = {
    product: {
      shipping_weight: {}
    }
  };
  // When this component mounts, grab the product with the _id of this.props.match.params.id
  // e.g. localhost:3000/products/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getProduct(this.props.match.params.id)
      .then(res => this.setState({ product: res.data }))

      .catch(err => console.log(err));
  }

  render() {
    return (
      <Jumbotron>
        <Container fluid>
          <Row >
            <Col size="md-4 sm-12 d-flex align-items-start">
              <img className="product-image productImage" src={this.state.product.images} alt={this.state.product.name}></img>
              <ShoppingCart cart_id={this.state.product.cart_id || 0} />
              <a href={this.state.product.sds} target="_blank">SDS</a>
            </Col>
            <Col size="md-8 sm-12 d-flex align-items-right">
              <div className="productDesc border border-white rounded-4 ">
                <h2> {this.state.product.name} SKU: <span>{this.state.product.sku}</span> </h2>
                <br></br>
                <h4> {this.state.product.description} </h4>
                <br></br>
                <h5>Features: {this.state.product.features}</h5>
                <p>Size: {this.state.product.size} <span>Price: ${Number.parseFloat(this.state.product.price).toFixed(2)}</span></p>
                <p>Shipping Weight: {this.state.product.shipping_weight.value} {this.state.product.shipping_weight.units}</p>
                <p>Product Family: {this.state.product.family}</p>
                {/* <p>Cart ID: {this.state.product.cart_id}</p> */}
              </div>
            </Col>
          </Row>
          <Row >
            <Col size="md-12 sm-12 d-flex align-items-start">
              <AmazonAdd />
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    );
  }
}

export default ProductDescription;