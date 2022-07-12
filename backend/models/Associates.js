const mongoose = require ('mongoose');


const AssociateSchema=mongoose.Schema({
  recentName : { type : String ,require:true},
  recentContacts :{ type : String ,require:true} ,
  recentPlaces :{ type : String ,require:true}
});
module.exports=mongoose.model('Associates',AssociateSchema);
