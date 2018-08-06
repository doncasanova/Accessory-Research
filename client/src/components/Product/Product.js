import React from "react";
import './Product.css';


const Product = (props) => (
    <div className="Product rounded rounded-6 m-2 ">
        <div key={props.id} >
        <a href={"/products/"+props.id}><img className="product-image" src={props.image} alt={props.name} /></a>
            <p> {props.name} SKU: <span>{props.sku}</span> </p>
            <p> {props.description} </p>
            <p>Features: {props.features}</p>
            <p>Size: {props.size} <span>Price: ${Number.parseFloat(props.price).toFixed(2)}</span></p>
            <p>Shipping Weight: {props.shipping_weight.value}{props.shipping_weight.units}</p>
            <button type="button" className="btn btn-dark">Product Description</button>
        </div>
    </div>
)


export default Product;