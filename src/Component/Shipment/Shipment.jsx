import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebaseInit';

const Shipment = () => {
const [user]=useAuthState(auth)
    const [password,setName] =useState('');
    const [address,setAddress] = useState('');
    const [nuber,setNumber] = useState('');
    const [error,setError] = useState('');


    const handelName=event=>{
        setName(event.target.value)
    }
   
    const handelAddress=event =>{
        setAddress(event.target.value)
    }
    const handelNumber=event =>{
        setNumber(event.target.value)
    }
    const onSubmit=event =>{
        event.preventDefault();
        const shipments=["address,name"]
        console.log(shipments);
      
    }
    return (
        <div  className="formContainer" >
        <div>
        <h2 className='form-title'>shipments</h2>
        <form onSubmit={onSubmit}>
       
          <div className="input-group">
          <label htmlFor="name">name</label>
          <input onBlur={handelName} type="text" placeholder="name" required/>
          </div>
          <div className="input-group">
          <label htmlFor="email">email</label>
          <input value={ user?.email} readOnly type="email" placeholder="email" required/> 
          </div>
          <div className="input-group">
              <label htmlFor="address">address</label>
              <input onBlur={handelAddress}  type="text" placeholder="address" required/>
          </div>
          <div className="input-group">
              <label htmlFor="phone number">phone number</label>
              <input onBlur={handelNumber} type="number" placeholder="number" required/>
          </div>
          <p style={{color: 'red'}}>{error}</p>
          <input className='form-submit' type="submit" value="submit" />
         </form>
         
        </div>
      </div>
    );
};

export default Shipment;