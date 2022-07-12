const mongoose = require('mongoose');
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = mongoose.Schema({
  fullname: { type: String, required: true, },
  email: { type: String, required: true, unique: true},
  phone: { type: String, required: true},
  password: { type: String, required: true},
  dob: { type: String,required: true},
  nic: { type: String, required: true},
  address1: { type: String, required: true},
  address2: { type: String,},
  province: { type: String, required: true},
  gender: { type: String, required: true},

});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("SAdmin", userSchema);