const mongoose=require('mongoose');

const postSchema=mongoose.Schema({


  Name:{type:String, required:true},
  Address:{type:String, required:true},
  Phone:{type:String, required:true}
});

module.exports=mongoose.model('lab', postSchema);
