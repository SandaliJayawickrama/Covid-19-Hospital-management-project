const mongoose = require('mongoose');

var Hospitaladmincontact = mongoose.model('Hospitaladmincontact', {
  name: { type: String},
  hname: { type: String},
  email: { type: String},
  phone: { type: String},

});

module.exports = { Hospitaladmincontact };
