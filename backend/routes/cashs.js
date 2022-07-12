const express= require("express");
const Post= require("../models/cash");

const  router = express.Router();

router.post("/cash",(req,res,next)=>{

  const cash= new Post({
    paymentID:req.body.paymentID,
    name:req.body.name,
    bankName:req.body.bankName,
    branch:req.body.branch,
    email:req.body.email,
    date:req.body.date
  });
  console.log(cash);
  cash.save().then(createdCash => {
    res.status(201).json({
      message:'cash details added successfuly',
      cashId:createdCash._id
    });
  });
});

router.put("/cash/:id",(req,res,next)=>{

  const cash= new Post({
    _id:req.body.id,
    paymentID:req.body.paymentID,
    name:req.body.name,
    bankName:req.body.bankName,
    branch:req.body.branch,
    email:req.body.email,
    date:req.body.date
  });
  Post.updateOne({_id:req.params.id},cash).then(result =>{

    res.status(200).json({message:"updated success!"});
  });
});


router.get("/cash",(req, res, next)=>{
  Post.find().then(documents=>{
    res.status(200).json({
      message:'cash details fetched successfuly',
      cash:documents
    });
  })

});





router.delete("/cash/:id",(req, res, next)=>{
  Post.deleteOne({_id:req.params.id}).then(result => {
    console.log(result);
    res.status(200).json({message:"cash deleted"});
  });
});



module.exports=router;
