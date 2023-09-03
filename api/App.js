const express = require('express')
const mongoose= require('mongoose')
const bcrypt = require('bcryptjs')
const cors = require('cors')
const app = express();
require('dotenv/config')

// setting up some middlewares
app.use(express.json())
app.use(cors({
    credentials:true,
    origin:'http://localhost:5174',
    
}))

//connecting to MongoDatabase   
mongoose.connect(process.env.connection_string,{

useNewUrlParser: true,
useUnifiedTopology: true,

}).then(()=>{
    console.log('connected succssfully to MongoDb')
    app.listen(5500,console.log('Server running on port 5500...'))
    
}).catch((error)=>{
    console.log(error)
})

//import the user Model
const User = require('./Registration Model/UserModel.js')
// creating registration api end point
app.get('/test',(req,res)=>{
    res.json('success')
})
app.post('/register',async(req,res)=>{
    const {name,email,phone_num,confirm_passwrd} = req.body
    try{
       const checkExistingUser = await User.findOne({email:email})
       if(checkExistingUser){
          return res.json('User already exist')
       }else{
          const registeredUser = await User.create({
              name,
              email,
              phone:phone_num,
              password: bcrypt.hashSync(confirm_passwrd,10)
          })   
          return res.json(registeredUser)
       }
    }catch(e){
        console.log(e)
    }
})


