const mongoose = require ('mongoose');
const patientSchema = mongoose.Schema({

  newName : { type : String ,require:true},
  newAge : { type : String ,require:true},
  newGender : { type : String ,require:true},
  newEmail :{ type : String ,require:true} ,
  newContact :{ type : String ,require:true} ,
  newAddress :{ type : String ,require:true} ,
  newProvince :{ type : String ,require:true} ,
  newCity :{ type : String ,require:true}

});

module.exports= mongoose.model('Patients',patientSchema);


