import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
function Shop() {
    const [products,setProducts]=useState([])
    useEffect(() =>{
        fetch(` https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json`)
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div className="shopContainer">
            <div className="Products-container">
                <h1>Ami</h1>
                <div className="Products">
                {
                    products.map(product => 
                    <Product 
                    key={product.id}
                     product={product}
                     ></Product>)
                }
                </div>
              
            </div>
            <div className="product">Tumi</div>
        </div>
    );
}

export default Shop;