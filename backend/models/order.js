const mongoose = require('mongoose');

var Order = mongoose.model('Order', {
         name: { type: String},
         address: { type: String},
         email: { type: String},
         contact: { type: String},
         disease: { type: String},
         des: { type: String}



});

module.exports = { Order };
