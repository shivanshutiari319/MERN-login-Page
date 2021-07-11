const express = require('express')
const path = require('path')
const model = require('../models/index.js')
const router = express.Router();

router.get('/',(req,res)=>{
res.send("routwr is here");
  })

router.post('/',(req,res)=>{

const modelcopy = new model({
 
firstname:req.body.firstname,
username:req.body.username,
email:req.body.email,
password:req.body.password
})

modelcopy.save()
.then((data)=>{
   console.log(data);
   res.json(data)
})
.catch((err)=>{
    console.log(err);
    res.json(data)
})


})

module.exports= router
