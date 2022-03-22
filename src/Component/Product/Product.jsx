import React from 'react';
import './Product.css'
const Product = (props) => {
    console.log(props);
    const {name, img}=props.product;
    return (
        <div className="product-container">
            <img src={img}alt=""/>
            <h1>{name}</h1>
        </div>
    );
};

export default Product;