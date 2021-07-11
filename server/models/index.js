const mongoose = require('mongoose')
  const { Schema } = mongoose;

  const blogSchema = new Schema({
   firstname:{
       type:String,
       required:true
   },
   username:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true
},
password:{
    type:String,
    required:true
}


  });

  const Blog = mongoose.model('Blog', blogSchema);
  module.exports= Blog