import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
import Image from "../../components/images"
import Product from "../../components/Product"
import API from "../../utils/API";

class Products extends Component {
  state = {
    products: []
  };

  // componentDidMount() { AOU,getAkk}  
  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = () => {
    API.getProducts()
      .then(
        (res) => this.setState({ products: res.data })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12 sm-12">
            <Jumbotron>
              hello your in the products page
            <Image />
            </Jumbotron>
          </Col>
        </Row>
        {/* render each product */}
        {
          this.state.products.map((product) => (
            <Product id={product._id} sku={product.sku} name={product.name} image={product.images[0]} description={product.description} features={product.features} size={product.size} price={product.price} />
          )
          )
        }
      </Container>
    );
  }
}

export default Products;
