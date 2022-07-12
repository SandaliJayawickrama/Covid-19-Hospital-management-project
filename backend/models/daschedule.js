const mongoose = require('mongoose');

const dascheduleSchema = mongoose.Schema({
  drname: { type: String, required: true},
  hospital: { type: String, required: true},
  date: { type: Date, required: true},
  time: { type: String, required: true},
  amount: { type: String, required: true},
});

module.exports =  mongoose.model('DApschedules', dascheduleSchema );


/*const mongoose = require('mongoose');

var dascheduleSchema = mongoose.model('DApschedules', {
  drname: { type: String, required: true},
  hospital: { type: String, required: true},
  date: { type: Date, required: true},
  time: { type: String, required: true},
  amount: { type: String, required: true},

});

module.exports = { dascheduleSchema };*/


