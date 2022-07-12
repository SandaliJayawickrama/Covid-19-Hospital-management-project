 const mongoose = require('mongoose');

var Reportorder = mongoose.model('Reportorder', {
  pid: { type: String},
  date: { type: String},
  nod: { type: String},
  amount: { type: String},

});

module.exports = { Reportorder };
