import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const {cart} = props;
    //  console.log(cart);
    let total=0;
    let shipping=0;
    // let seller=0;
    let quantity=0;
     for (const product of cart){
         quantity=quantity+product.quantity;
        total=total + product.price * product.quantity;
        shipping= shipping + product.shipping ;
     }
     const tax =(total * 0.1);
     const grand=total +shipping + tax;
    return (
        <div className="cart">
             <h1>Tumi</h1>
             <h1>Order Summary</h1>
             <p>Selected Items: {quantity}</p>
            <p>Total price: ${total}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: {parseFloat(tax.toFixed(2))}</p>
            <p>grand: {grand.toFixed(2)}</p>
            {props.children}
        </div>
    );
};

export default Cart;