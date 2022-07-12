const mongoose = require('mongoose');

const cardSchema = mongoose.Schema({
  paymentID:{type:String,required:true},
  number:{type:String,required:true},
  name:{type:String,required:true},
  edate:{type:String,required:true},
  cvc:{type:String,required:true},
  date:{type:String,required:true}
});

module.exports = mongoose.model('Card',cardSchema);
