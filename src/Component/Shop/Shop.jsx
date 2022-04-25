import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../Hooks/UserOrder';
import useProducts from '../../Hooks/UsProducs';
import { addToDb, getStoredCart,} from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
function Shop() {
   
    const [cart,setCart]=useCart()
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setsize] = useState(10);

    const [products,setProducts]=useState([]);
 useEffect(()=>{
    fetch(`http://localhost:5000/product?page=${page}&size=${size}`)
    .then(res=>res.json())
    .then(data=>setProducts(data))

},[page,size]);
console.log(page);
     //  pagination
     useEffect( () =>{
        fetch('http://localhost:5000/productCount')
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            const count = data.count;
            const pages = Math.ceil(count/10);
            setPageCount(pages);
        })
    }, [])

//      useEffect(()=>{
//        const storedCart=getStoredCart();
//        const saveCart=[];
//        for(const id in storedCart){
//     const addedProduct=products.find(product=>product._id===id);
// if(addedProduct){
//     const quantity=storedCart[id];
//     addedProduct.quantity=
//     quantity;
//     saveCart.push(addedProduct);
    
// }}
// setCart(saveCart);  
// },[products])
let newCart =[];
    const handelToCart=(selectedProduct)=>{
        // console.log(product)
        const exist=cart.find(product => product._id === selectedProduct._id);
        if(!exist){
            selectedProduct.quantity=1;
            newCart=[...cart,selectedProduct];
        }
     else{
         const rest=cart.filter(product => product._id !== selectedProduct._id);
         exist.quantity=exist.quantity+1;
         newCart=[...rest,exist];

     }
        setCart(newCart)
        addToDb(selectedProduct._id )
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
                    key={product._id}

                     product={product}

                     ></Product>)
                }
                </div>
              <div className=" pagination" >
              {
                        [...Array(pageCount).keys()]
                        .map(number => <button
                          className={page=== number ? 'selected': ''}
                          onClick={() => setPage(number)}
                        >{number }</button>)
                        
                    }
                    <select>
                        <option value="10" selected>10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                        </select>
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
