const mongoose = require('mongoose');

var appointment=mongoose.model('appointment',{
  name:{type: String},
  docname:{type: String},
  email:{type: String},
  contact:{type: String}
});
module.exports= {appointment};
