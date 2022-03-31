import React from 'react';
import logo from '../../images/Logo.svg'
import Shop from '../Shop/Shop';
import './Header.css'
const Header = () => {
    return (
        <div className="main-header">
          <nav className="header-nav">
          <img className="nav-img" src={logo} alt="" />
        <div className="">
            <a href="/shop">Shop</a>
            <a href="/order">Order</a>
            <a href="/inventory">Inventory</a>
            <a href="/about">About</a>
      
        </div>
          </nav>
          
          {/* <Shop></Shop> */}
        </div>
    );
};

export default Header;