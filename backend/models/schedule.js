const mongoose = require('mongoose');
const { resForm } = require('./resform');

const scheduleSchema = mongoose.Schema({
  vschedname: { type: String, required: true},
  vname: { type: String, required: true},
  dosage: { type: String, required: true},
  centerN: { type: String,
             //ref:resForm,
            required: true
          },
  centerA: { type: String, required: true},
  date: { type: String, required: true},
  time: { type: String, required: true},
  vcapacity: { type: Number, required: true},
  age: { type: String, required: true},

});

module.exports =  mongoose.model('Schedules', scheduleSchema );
