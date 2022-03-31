import React from 'react';
import useCart from '../../Hooks/UserOrder';
import useProducts from '../../Hooks/UsProducs';

const Order = () => {
    const [products]=useProducts();
    const [cart,setcart]=useCart(products)
    return (
        <div>
            <h1>This  is Order{products.length}</h1>
            <p>cart has{cart.length}</p>
        </div>
    );
};

export default Order;