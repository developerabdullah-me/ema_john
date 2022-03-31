import React from 'react';
import './RevewItems.css'
const RevewItems = (props) => {
    const {product,handelToDeleteCart}= props;
    const {name,price,quantity,img}=product
    return (
        <div className="review-container">
            <div className="review">
                <img src={img} alt="" />
                <div className="">
                  <p title={name}>{name.length > 20 ? name.slice(0,20) + '...':name}</p>
                    <p>{price}</p>
                </div>
            </div>
            <div className="">
                <button onClick={()=>handelToDeleteCart(product)}>Delete</button>
            </div>
        </div>
    );
};

export default RevewItems;