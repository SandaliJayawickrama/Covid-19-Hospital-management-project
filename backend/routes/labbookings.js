const express=require("express");
const router=express.Router();
const LabBooking=require("../models/labBooking");
const multer=require("multer");
var nodemailer = require('nodemailer');

const MIME_TYPE_MAP={
  'image/png':'png',
  'image/jpeg':'jpeg',
  'image/jpg':'jpeg'
}
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'gamingscoote@gmail.com',
    pass: 'escjyitdcumgxest'
  }
});


const storage=multer.diskStorage({

  destination:(req, file, cb)=>{
    const isValid=MIME_TYPE_MAP[file.mimetype];
    let error=new Error("Invalid mime type");
    if(isValid){
      error=null;
    }
    cb(error, "images");
  },

  filename:(req, file, cb)=>{
    const name=file.originalname.toLowerCase().split(' ').join('-');
    const ext=MIME_TYPE_MAP[file.mimetype];
    cb(null, name+'-'+Date.now()+'.'+ext);
  }
});


router.post("", (req, res,next)=>{
  const labbooking=new LabBooking({
    labId:req.body.labId,
    progress:req.body.progress,
    bookDate:req.body.bookDate,
    labName:req.body.labName,
    result:req.body.result,
    nIC:req.body.NIC,
    email:req.body.email

});
labbooking.save().then(result=>{

  console.log(result);
  res.status(201).json({
    message:'post added succesfully',
    bookId:result._id
  });
});

});

router.get("", (req,res,next)=>{

  LabBooking.find()
     .then(documents=>{

          return res.status(200).json({

            message:'lab booking schedules fetched successfully!',
            bookingDetails:documents
          });
    });
});

router.put(
  "/:id",
  multer({storage:storage}).single("image"),
  (req,res,next)=>{
    let imagePath=req.body.imagePath;

    if(req.file){
      const url=req.protocol+"://"+req.get("host");
      imagePath=url+"/images/"+req.file.filename;
      var mailOptions = {
        from: 'gamingscoote@gmail.com',
        to: req.body.email,
        subject: 'Your report PCR report is ready',
        html: '<h4>Dear Patient,<br> Your report has been submitted, please download it from the link below<br/>Test Result:'+req.body.result+'<br/></h4><h4>Report:'+ imagePath+'</h4><br><br>Thank you'
      };
    }
  const booking=new LabBooking({
    _id:req.body.bookId,
    progress:req.body.progress,
    result:req.body.result,
    imagePath:imagePath


  });
  console.log(booking);
  LabBooking.updateOne({_id:req.params.id}, booking).then(result=>{
    console.log(result);
    res.status(200).json({message:'update sucessful!'});
    if(req.file){

      transporter.sendMail(mailOptions, function(error, info){

        if (error) {

          console.log(error);

        } else {

          console.log('Email sent: ' + info.response);

        }
      });
    }
    });
  });


router.delete("/:id", (req,res,next)=>{

  LabBooking.deleteOne({_id:req.params.id}).then(result=>{
    console.log(result);
  });
  res.status(200).json({message:"Booking Deleted."});
});
module.exports=router;
