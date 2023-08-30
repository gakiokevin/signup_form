const express = require('express')
const mongoose= require('mongoose')
const bcrypt = require('bcryptjs')
const app = express();
require('dotenv/config')

// setting up some middlewares
app.use(express.json)

//connecting to MongoDatabase
mongoose.connect(process.env.connection_string).then(()=>{
    console.log('connected succssfully to MongoDb')
    app.listen(5000,console.log('Server running on port 5000...'))
}).catch((error)=>{
    console.log(error)
})
//import the user Model
const User = require('./Registration Model/UserModel.js')
// creating registration api end point
app.post('/register',async(req,res)=>{
    const {name,email,phoneNumber,password} = req.body
    try{
       const checkExistingUser = await User.findOne({email:email})
       if(checkExistingUser){
          return res.json('User already exist')
       }else{
          const registeredUser = await User.create({
              name,
              email,
              password:bcrypt.hashSync(password,10)
          })
          
          return res.json(registeredUser)
       }
    }catch(e){
        console.log(e)
    }
})

