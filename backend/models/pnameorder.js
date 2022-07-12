const mongoose = require('mongoose');

var Pnameorder = mongoose.model('Pnameorder', {
  pno: { type: String},
  pname: { type: String},
  location: { type: String},
  cno: { type: String},

});

module.exports = { Pnameorder };
