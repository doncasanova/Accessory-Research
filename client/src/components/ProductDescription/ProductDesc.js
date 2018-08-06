import React, { Component } from "react";
import Jumbotron from "../Jumbotron";
import { Col, Row, Container } from "../Grid";
import ShoppingCart from '../PayPal/shoppingCart.js';
import ViewShoppingCart from '../PayPal/ViewShoppingCart.js';
import API from "../../utils/API";
import './ProductDesc.css';


class FilmCleaner extends Component {
  state = {
    product: {}
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
      <Container fluid>
        <Row>
          <Col size="md-12 sm-12">
            <Jumbotron>
              <ShoppingCart />
              <ViewShoppingCart />
              <div className="productDesc border border-white rounded-4">
              {/* TODO: Render this image! */}
                <p>{JSON.stringify(this.state.product.images)}</p>
                {/* <img className="product-image" src={this.state.product.images[0]} alt={this.state.product.name} /> */}

                <p> {this.state.product.name} SKU: <span>{this.state.product.sku}</span> </p>
                <p> {this.state.product.description} </p>
                <p>Features: {this.state.product.features}</p>
                <p>Size: {this.state.product.size} <span>Price: ${Number.parseFloat(this.state.product.price).toFixed(2)}</span></p>
                <p>Shipping Weight: {JSON.stringify(this.state.product.shipping_weight)}</p>
              </div>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default FilmCleaner;