import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebaseInit';
import logo from '../../images/Logo.svg'
import Shop from '../Shop/Shop';
import './Header.css'
const Header = () => {
const [user]=useAuthState(auth)
const logout = () => {
  signOut(auth);
};
    return (
        <div className="main-header">
          <nav className="header-nav">
          <img className="nav-img" src={logo} alt="" />
        <div className="">
            <Link to="/shop">Shop</Link>
            <Link to="/order">Order</Link>
            <Link to="/inventory">Inventory</Link>
            <Link to="/about">About</Link>
           {user? <button onClick={logout}>sign out</button>:
              <Link to="/login">Login</Link>
           }
      
        </div>
          </nav>
          
          {/* <Shop></Shop> */}
        </div>
    );
};

export default Header;