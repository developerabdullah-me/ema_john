import React, { useEffect, useState } from 'react';
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
        console.log(product)
        const newCart=[...cart,product]
        setCart(newCart)
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
            <div className="product"><h1>tmi</h1>
            <p>selected item{cart.length}</p>
            </div>
        </div>
    );
}

export default Shop;