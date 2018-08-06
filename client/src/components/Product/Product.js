import React from "react";
import './Product.css';


const Product = (props) => (
    <div className="Product m-2 ">
        <div key={props.id} >
        <a href={"/products/"+props.id}><img className="product-image" src={props.image} alt={props.name} /></a>
            <p> {props.name} </p> 
            <p>SKU: <span>{props.sku}</span> </p>
             <a href={"/products/"+props.id}><button type="button" className="btn btn-dark">Product Description</button></a>
        </div>
    </div>
)


export default Product;