const mongoose = require('mongoose');

var Confirmorder = mongoose.model('Confirmorder', {
         username: { type: String},
         drugid: { type: String},
         iname: { type: String},
         itype: { type: String},
         nitems: { type: String},

});

module.exports = { Confirmorder };
