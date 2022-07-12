const mongoose = require('mongoose');

const doctorsSchema = mongoose.Schema({
  drname: { type: String, required: true},
  phone: { type: String, required: true},
  address: { type: String, required: true},
  quali: { type: String, required: true},
});


module.exports =  mongoose.model('Doctors', doctorsSchema );


