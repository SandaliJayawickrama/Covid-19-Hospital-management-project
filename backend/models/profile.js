const mongoose = require('mongoose');

const profileSchema = mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  email: { type: String, required: true },
  contact: { type: String, required: true },
  disease: { type: String, required: true },
  des: { type: String, required: true },
  imagePath: { type: String, required: true },

})

module.exports = mongoose.model('Profile', profileSchema);
