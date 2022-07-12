const mongoose = require('mongoose');
const uniqueValidator = require("mongoose-unique-validator");

const hospitaladminSchema = mongoose.Schema({
  
  email: { type: String, required: true, unique: true},
  password: { type: String, required: true},
  
});

hospitaladminSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Hadmin", hospitaladminSchema);