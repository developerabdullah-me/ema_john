import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const {cart} = props;
    //  console.log(cart);
    let total=0;
    let shipping=0;
    // let seller=0;
     for (const product of cart){
         console.log(product);
        total=total + product.price;
        shipping= shipping + product.shipping;
     }
     const tax =(total * 0.1);
     const grand=total +shipping + tax;
    return (
        <div className="cart">
             <h1>Tumi</h1>
             <h1>Order Summary</h1>
             <p>Selected Items: {cart.length}</p>
            <p>Total price: ${total}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: {parseFloat(tax.toFixed(2))}</p>
            <p>grand: {grand.toFixed(2)}</p>
        </div>
    );
};

export default Cart;