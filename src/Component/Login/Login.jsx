import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebaseInit';
import "./Login.css"
const Login = () => {
    const [password,setPassword]=useState('')
    const [email,setEmail]=useState('')
     
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const navigete=useNavigate()
    const handelEMailBlur=event=>{
        setEmail(event.target.value)
    }
    const handelPasswordBlur=event=>{
        setPassword(event.target.value)
    }
    if(user){
        navigete("/shop")
    }
    const fromSubmit=event=>{
        event.preventDefault();
        signInWithEmailAndPassword(email,password);
    }
    return (
        <div  className="formContainer" >
          <div>
          <h2 className='form-title'>Login</h2>
          <form onSubmit={fromSubmit}>
           <div className="input-group">
                <label htmlFor="email">Email</label>
                <input onBlur={handelEMailBlur} type="email" placeholder="email" required/>
            </div>
            <div className="input-group">
                <label htmlFor="password">password</label>
                <input onBlur={handelPasswordBlur} type="password" placeholder="password" required/>
            </div>
            <p style={{color:'red'}}> {error?.message}</p>
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