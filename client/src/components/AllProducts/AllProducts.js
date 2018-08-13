import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import { Row, Container } from "../../components/Grid";
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
    // API.getProducts()
    //   .then(
    //     (res) => this.setState({ products: res.data })
    //   )
    //   .catch(err => console.log(err));
  //   console.log(this.props)
    API.getFamilyProducts( this.props.family )
    .then(
      (res) => this.setState({ products: res.data })
    )
    .catch(err => console.log(err));
  };

  render() {
    return (

      <Container fluid>
        <Jumbotron>
          <Row>
              {/* render each product */}
              {
                this.state.products.map((product) => (
                  <Product key={product._id} id={product._id} sku={product.sku} name={product.name} image={product.images[0]} description={product.description} features={product.features} size={product.size} price={product.price} shipping_weight={product.shipping_weight} cart_id={product.cart_id} />
                )
                )
              }
          </Row>
        </Jumbotron>
      </Container>
 

    );
  }
}

export default Products;
