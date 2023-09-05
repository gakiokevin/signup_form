import React,{useState} from "react";
import {Navigate, useNavigate,Link} from 'react-router-dom'
import * as yup from 'yup'
import axios from 'axios'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
const schema = yup.object().shape({
  Email:yup.string().email().required(),
  Password:yup.string().min(4).required()
})
const Login = () => {
  const {register,handleSubmit,formState:{errors}} = useForm({
    resolver:yupResolver(schema)
  })
  const navigate = useNavigate();
  const [data,setData] = useState('')
  const [error,setError]= useState(false)
  const [email,setEmail] = useState('');
  const [password,setPassword]= useState('');
  const [show,setShow]=useState(false)
  const Submit=async(data,e)=>{
    e.preventDefault();
    const {Email,Password}= data;
    try{
      const response = await axios.post('http://localhost:5500/login',{
        Email,
        Password
     })
     console.log(response)
       const delay = 1000;
       
       if(response.data.name){
         setShow(true)
           const timerId = setTimeout(()=>{
               navigate('/homepage')
           },delay)
           return ()=>clearTimeout(timerId)
       }else{
        setError(true)
           setData(response.data)
       }
    }catch(e){
      console.log(e)
    }
  }
  return (
    <div>
      <form action="" className="login" onSubmit={handleSubmit(Submit)}>
          {show && <h2>Login Successfull</h2>}
          {error && <h2>{data}</h2>}
        <h3>Welcome User</h3>
        <div>
          <input type="text" placeholder="Email" name="Email" 
           onChange={(e)=>setEmail(e.target.value)}
           {...register('Email')}
        />
        </div>
           <h4>{errors.Email && 'Enter valid Email'}</h4>
         <div>
         <input type="password" placeholder="Password" name="Password" 
           onChange={(e)=>setPassword(e.target.value)}
           {...register('Password')}
        />
         </div>
          <h4>{errors.Password && 'Password must be more than 4 characters'}</h4>
        <button className="loginBtn" type="submit">Login</button>
      </form>
       <div className="login_account">
        <div>
             <p className="no_account">No account yet?</p>
        </div>
        <div>
           <Link to='/signup'>Signup</Link>
        </div>
     </div>
    </div>
  );
};
export default Login;
