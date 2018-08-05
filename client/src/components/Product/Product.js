import React, { Component } from "react";
import './Product.css';


const Product = (props) => (
    <div className="Product border border-white rounded-4">
        <div key={props.id} >
            <img className="product-image" src={props.image} />
            <p> {props.name} SKU: <span>{props.sku}</span> </p>
            <p> {props.description} </p>
            <p>Features: {props.features}</p>
            <p>Size: {props.size} <span>Price: ${Number.parseFloat(props.price).toFixed(2)}</span></p>
            <p>Shipping Weight: {props.shipping_weight.value}{props.shipping_weight.units}</p>
        </div>
    </div>
)

export default Product;