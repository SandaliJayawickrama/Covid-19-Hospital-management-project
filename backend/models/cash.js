const mongoose = require('mongoose');

const cashSchema = mongoose.Schema({
  paymentID:{type:String,required:true},
  name:{type:String,required:true},
  bankName:{type:String,required:true},
  branch:{type:String,required:true},
  email:{type:String,required:true},
  date:{type:String,required:true}
});

module.exports = mongoose.model('Cash',cashSchema);
