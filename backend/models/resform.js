const mongoose = require('mongoose');


var resForm=mongoose.model('resForm',{
  name:{type: String, required:true},
  nationalid:{type: String,required:true,unique:true},
  age:{type: String ,required:true},
  phone:{type: String},
  email:{type: String},
  city:{type: String},
  street:{type: String},
  houseno:{type: String},
  code:{type: String},
  opt:{type: String},
  date:{type: String,required:true},
  time:{type: String,required:true}

});
module.exports= {resForm};
