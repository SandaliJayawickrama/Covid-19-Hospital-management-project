const mongoose=require('mongoose');

const bookingSchema= mongoose.Schema({
  labId:{type:String, required:true},
  progress:{type:String, required:true},
  bookDate:{type:Date, required:true},
  labName:{type:String, required:true},
  result:{type:String, required:true},
  nIC:{type:String, required:true},
  imagePath:{type:String},
  email:{type:String, required:true}
});

module.exports=mongoose.model('labbooking', bookingSchema);
