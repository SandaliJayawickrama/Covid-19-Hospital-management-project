const mongoose = require ('mongoose');

var Reservation = mongoose.model ('Reservation',{
  nic:{type:String},
  name: { type: String},
  city: { type: String},
  country: { type: String},
  resno: {type:Number},
});

module.exports = { Reservation } ;
