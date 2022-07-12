const express= require("express");
const Post= require("../models/card");

const  router = express.Router();

router.post("",(req,res,next)=>{

  const card= new Post({
    paymentID:req.body.paymentID,
    number:req.body.number,
    name:req.body.name,
    edate:req.body.edate,
    cvc:req.body.cvc,
    date:req.body.date
  });
  console.log(card);
  card.save().then(createdCard => {
    res.status(201).json({
      message:'card details added successfuly',
      cardId:createdCard._id
    });
  });
});

router.put("/:id",(req,res,next)=>{

  const card= new Post({
    _id:req.body.id,
    paymentID:req.body.paymentID,
    number:req.body.number,
    name:req.body.name,
    edate:req.body.edate,
    cvc:req.body.cvc,
    date:req.body.date
  });
  Post.updateOne({_id:req.params.id},card).then(result =>{

    res.status(200).json({message:"updated success!"});
  });
});


router.get("",(req, res, next)=>{
  Post.find().then(documents=>{
    res.status(200).json({
      message:'card details fetched successfuly',
      card:documents
    });
  })

});





router.delete("/:id",(req, res, next)=>{
  Post.deleteOne({_id:req.params.id}).then(result => {
    console.log(result);
    res.status(200).json({message:"card deleted"});
  });
});



module.exports=router;
