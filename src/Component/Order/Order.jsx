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
        const rest= cart.filter(pd=> pd.id !==product.id)
        setcart(rest)
        removeFromDb(product.id)
    }

    return (
        <div className="shopContainer">
            <div className="Products-container">
                {
                    cart.map(product=> <RevewItems 
                        product={product} 
                        key={product.id}
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