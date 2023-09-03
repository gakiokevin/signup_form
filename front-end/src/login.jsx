import React, { useState } from "react";
import {Button} from "@mui/material"
import * as yup from 'yup'
import {useForm} from 'react-hook-form'
import {yupResolver} from "@hookform/resolvers/yup"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import axios from 'axios'
const schema = yup.object().shape({
  name:yup.string().required(),
  phone_num:yup.number().min(10).required(),
  email:yup.string().email().required(),
  pswrd:yup.string().min(4).required(),
  confirm_passwrd:yup.string().oneOf([yup.ref("pswrd"),]).required()

})
const Login = () => {
    const[name,setName]= useState('')
    const[phone,setPhone]= useState('')
    const[email,setEmail]= useState('')
    const[setpassword,setPassword]= useState('')
    const[password,setConfirmPassword]= useState('')
  
  const {register,handleSubmit,formState:{errors}}=useForm({
     resolver:yupResolver(schema)
  })
 
  const Submit = async(data,e) => {
    e.preventDefault();
   const {name,phone_num,email,confirm_passwrd} = data
   console.log(data)
    const response = await axios.post('http://localhost:5500/register',{
      name,
      phone_num,
      email,
      confirm_passwrd
    })
    console.log(response)
  };
  return (
    <form className="form" onSubmit={handleSubmit(Submit)}>
      <h3>SIGNUP FORM</h3>
      <div className="inputs">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name ..."
          onChange={(e)=>setName(e.target.value)}
          {...register('name')}
        />
      </div>
       <p className="errors">{errors.name && "Name is a required field"}</p>
      <div className="inputs">
        <label htmlFor="phone_num">Phone Number</label>
        <input
          type="text"
          name="phone_num"
          placeholder="Enter mobile number ..."
          onChange={(e)=>setPhone(e.target.value)}  
          {...register('phone_num')}
          
        />
      </div>
       
      <p className="errors">{errors.phone_num && "Enter a valid phone number"}</p>
      <div className="inputs">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email ..."
          onChange={(e)=>setEmail(e.target.value)}
          
          
          {...register('email')}
        />
      </div>
      <p className="errors">{errors.email?.message}</p>
      <div className="inputs">
        <label htmlFor="pswrd">New Password</label>
        <input
          type="text"
          name="pswrd"
          
          placeholder="Enter you new password..."
          
          onChange={(e)=>setPassword(e.target.value)}
          
          
          {...register('pswrd')}
        />
      </div>
      <p className="errors" >{errors.pswrd && "Password should be more 4 characters"}</p>
      <div className="inputs">
        <label htmlFor="confirm_password">Confirm Password</label>
        <input
          type="text"
          name="confirm_password"
          placeholder="Confirm your password..."
          onChange={(e)=>setConfirmPassword(e.target.value)}
          
            {...register('confirm_passwrd')}
        />
      </div>
      <p className="errors">{errors.confirm_passwrd && "Password do not match"}</p>
      <div className="submit_button">
         <Button variant="contained" type="submit" className="button">Submit</Button>
      </div>
      
    </form>
  );
};
export default Login;
