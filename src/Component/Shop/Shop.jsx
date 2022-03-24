import React, { useEffect, useState } from 'react';
import { addToDb,} from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
function Shop() {
    const [products,setProducts]=useState([])
    const [cart,setCart]=useState([])
    useEffect(() =>{
        fetch(` https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json`)
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
   
    const handelToCart=(product)=>{
        // console.log(product)
        const newCart=[...cart,product]
        setCart(newCart)
    addToDb(product)
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
                <Cart cart={cart}></Cart>
              
            </div>
        </div>
    );
}

export default Shop;
