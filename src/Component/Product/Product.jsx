import React from 'react';
import './Product.css'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Product = (props) => {
    // console.log(props);
    const {handelToCart}= props;
    const {name, img,price,seller,ratings}=props.product;
    return (
        <div className="product-container">
            <img src={img}alt=""/>
          <div className="info">
          <p className="name">{name}</p>
           <p className="price">Price:<small>${price}</small></p>
           <p className="Manufacturer">Manufacturer:<small>{seller}</small></p>
           <p className="ratings">Ratings:<small>{ratings}</small></p>
          </div>
          <button onClick={()=>handelToCart(props.product)} className="button-cart">Add to cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> </button>
        </div>
    );
};

export default Product;