import React from 'react';
import { Link } from 'react-router-dom';
import "./Login.css"
const Login = () => {
    return (
        <div  className="formContainer" >
          <div>
          <h2 className='form-title'>Login</h2>
          <form>
           <div className="input-group">
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="email"/>
            </div>
            <div className="input-group">
                <label htmlFor="password">password</label>
                <input type="password" placeholder="password"/>
            </div>
            <input className='form-submit' type="submit" value="Login" />
           </form>
           <p>
                    New to Ema-John? <Link className='form-link' to="/signup">Create an account</Link>
                </p>
          </div>
        </div>
    );
};

export default Login;