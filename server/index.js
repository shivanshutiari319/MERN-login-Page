const express = require('express')
const app=express();
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const router = require('./routes/Router.js')
const path = require('path')
const cors = require('cors')
app.use(cors());
const bodyparser= require('body-parser');
app.use(express.json());
app.use(bodyparser.urlencoded({extended:false}))

dotenv.config();

const PORT=process.env.PORT||5000;

app.use('/signup',router);

app.get('/',(req,res)=>{
    res.send("get method ready");
    
    })
// import React from 'react';


mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    
app.listen(PORT,(req,res)=>{
    // res.send(database connected)

    console.log("databse coonected");
})

})
.catch((err)=>{
   console.log(err);

})







