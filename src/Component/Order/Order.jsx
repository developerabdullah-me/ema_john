import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useCart from '../../Hooks/UserOrder';
import useProducts from '../../Hooks/UsProducs';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import RevewItems from '../RevewItem/RevewItems';

const Order = () => {
    const [products]=useProducts();
    const [cart,setcart]=useCart(products)
const navigate=useNavigate();
    const handelToDeleteCart=(product)=>{
        const rest= cart.filter(pd=> pd._id !==product._id)
        setcart(rest)
        removeFromDb(product._id)
    }

    return (
        <div className="shopContainer">
            <div className="Products-container">
                {
                    cart.map(product=> <RevewItems 
                        product={product} 
                        key={product._id}
                        handelToDeleteCart={handelToDeleteCart}
                    
                    ></RevewItems>)
                }
            </div>
            <div className="order-Summary">
                <Cart cart={cart}>
                  
                       <button onClick={()=> navigate('/shipment')}>Proceed Checkout</button>
                 
                </Cart>
            </div>
        </div>
    );
};

export default Order;