import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../Hooks/UsProducs';
import { addToDb, getStoredCart,} from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
function Shop() {
   const [products,]=useProducts();

    const [cart,setCart]=useState([])
     useEffect(()=>{
       const storedCart=getStoredCart();
       const saveCart=[];
       for(const id in storedCart){
    const addedProduct=products.find(product=>product.id===id);
if(addedProduct){
    const quantity=storedCart[id];
    addedProduct.quantity=
    quantity;
    saveCart.push(addedProduct);
    
}}
setCart(saveCart);  
},[products])
let newCart =[];
    const handelToCart=(selectedProduct)=>{
        // console.log(product)
        const exist=cart.find(product => product.id === selectedProduct.id);
        if(!exist){
            selectedProduct.quantity=1;
            newCart=[...cart,selectedProduct];
        }
     else{
         const rest=cart.filter(product => product.id !== selectedProduct.id);
         exist.quantity=exist.quantity+1;
         newCart=[...rest,exist];

     }
        setCart(newCart)
        addToDb(selectedProduct.id )
    }
    return (
        <div className="shopContainer">
            <div className="Products-container">
                <h1>Ami</h1>
                <div className="Products">
                {
                    products.map(product => 
                    <Product 
                    
                    handelToCart={handelToCart}
                    key={product.id}

                     product={product}

                     ></Product>)
                }
                </div>
              
            </div>
            <div className="order-Summary">
                <Cart cart={cart}>
                    <Link to="/order">
                        <button>Review Order</button>
                    </Link>
                </Cart>
              
            </div>
        </div>
    );
}

export default Shop;
