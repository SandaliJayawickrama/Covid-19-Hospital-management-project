const express = require("express");
const router =express.Router();
const Post= require("../models/patients");

// Inserting details of Patients

router.post("/posts",(req,res,next)=>{
  const post=new Post({
    newName: req.body.newName,
    newAge : req.body.newAge,
    newGender:req.body.newGender,
    newEmail : req.body.newEmail,
    newContact : req.body.newContact,
    newAddress : req.body.newAddress,
    newProvince : req.body.newProvince,
    newCity : req.body.newCity});


  post.save().then(createdPosts=>{

  res.status(201).json({message:'posts added successfully',postid:createdPosts._id}
  );
  });

});

// Updating details of Patients



router.put("/posts/:id",(req,res,next)=>{
  const post = new Post({
    _id:req.body.id,
    newName: req.body.newName,
    newAge : req.body.newAge,
    newGender:req.body.newGender,
    newEmail : req.body.newEmail,
    newContact : req.body.newContact,
    newAddress : req.body.newAddress,
    newProvince : req.body.newProvince,
    newCity : req.body.newCity

  });

Post.updateOne({_id:req.params.id},post).then(result => {
  console.log(result);
  res.status(200).json({message :'updated'})

})

});
router.get('/posts/:id',(req,res,next)=>{
  Post.findById(req.params.id).then(post=>{
    if(post){
res.status(200).json(post);
    }
    else{
      res.status(404).json({message :"post not found"});
    }

  });
  });


// Retrieving details of Patients

router.get('/posts',(req,res,next)=>{
Post.find().then(documents =>{
  res.status(200).json({
    message:'posts retrieved succesfully',
    posts:documents
});
});
});

// Deleting details of Patients

router.delete("/posts/:id",(req,res,next)=>{
  Post.deleteOne({_id:req.params.id}).then(result=>{
    console.log(result);
    res.status(200).json({
      message:'post deleted'

  });
  })

});
module.exports= router;
