import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebaseInit';

const SignUp = () => {
    const [password,setPassword] =useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [email,setEmail] = useState('');
    const [error,setError] = useState('');

    const [createUserWithEmailAndPassword,user]=useCreateUserWithEmailAndPassword(auth)
    const navigate=useNavigate()

    const handelEmail=event=>{
        setEmail(event.target.value)
    }
    const handelPassword=event=>{
        setPassword(event.target.value)
    }
    if(user){
    navigate('/shop')
    }
    const handelConfirmPassword=event =>{
        setConfirmPassword(event.target.value)
    }
    const onSubmit=event =>{
        event.preventDefault();
        if(password !== confirmPassword){
            setError('your password is incorrect')
            return
        }
        if(password.length < 6){
            setError('your password must be at least 6 characters')
            return
        }
        createUserWithEmailAndPassword(email, password)
    }
    

    return (
        <div  className="formContainer" >
        <div>
        <h2 className='form-title'>sign up</h2>
        <form onSubmit={onSubmit}>
         <div className="input-group">
              <label htmlFor="email">Email</label>
              <input onBlur={handelEmail} type="email" placeholder="email" required/>
          </div>
          <div className="input-group">
              <label htmlFor="password">password</label>
              <input onBlur={handelPassword} type="password" placeholder="password" required/>
          </div>
          <div className="input-group">
              <label htmlFor="confirm password">confirm password</label>
              <input onBlur={handelConfirmPassword}  type="password" placeholder="password" required/>
          </div>
          <p style={{color: 'red'}}>{error}</p>
          <input className='form-submit' type="submit" value="sign up" />
         </form>
         <p>
                All ready have an account ? <Link className='form-link' to="/login">Create an account</Link>
              </p>
        </div>
      </div>
    );
};

export default SignUp;