import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import Shop from '../Shop/Shop';
import './Header.css'
const Header = () => {
    return (
        <div className="main-header">
          <nav className="header-nav">
          <img className="nav-img" src={logo} alt="" />
        <div className="">
            <Link to="/shop">Shop</Link>
            <Link to="/order">Order</Link>
            <Link to="/inventory">Inventory</Link>
            <Link to="/about">About</Link>
            <Link to="/login">Login</Link>
      
        </div>
          </nav>
          
          {/* <Shop></Shop> */}
        </div>
    );
};

export default Header;