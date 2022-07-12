const express = require("express");
const Associates = require("../models/Associates");
const router =express.Router();
const Detail=require("../models/Associates");

// Inserting details of recently traveled places

router.post("/details",(req,res,next)=>{
  const detail=new Detail({
    recentName: req.body.recentName,
    recentContacts : req.body.recentContacts,
    recentPlaces : req.body.recentPlaces});


  detail.save().then(createdDetails=>{

    res.status(201).json({message:'details added successfully',detailid:createdDetails._id});
  })


});
// Updating details of recently traveled places

router.put("/details/:id",(req,res,next)=>{
  const detail= new Detail({
    _id:req.body.id,
    recentName: req.body.recentName,
    recentContacts : req.body.recentContacts,
    recentPlaces : req.body.recentPlaces
  });
  Detail.updateOne({_id:req.params.id},detail).then(result=>{
    console.log(result);
    res.status(200).json({message:'updated'})
  })
})
router.get("/details/:id",(req,res,next)=>{
  Associates.findById(req.params.id).then(detail=>{
    if(detail){
res.status(200).json(detail);
    }
    else{
      res.status(404).json({message :"Associate not found"});
    }

  });
  });


// Retrieving details of recently traveled places

router.get('/details',(req,res,next)=>{
  Detail.find().then(documents =>{
    res.status(200).json({
      message:'posts retrieved succesfully',
      details:documents
  });
  });
  });

// Deleting details of recently traveled places

  router.delete("/details/:id",(req,res,next)=>{
  Detail.deleteOne({_id:req.params.id}).then(result=>{
    console.log(result);
    res.status(200).json({
      message:'post deleted'

  });
  })
});
module.exports= router;
