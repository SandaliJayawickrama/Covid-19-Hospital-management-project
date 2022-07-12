const express=require("express");
const router=express.Router();
const Lab=require("../models/lab");



router.get("", (req,res,next)=>{

  Lab.find()
     .then(documents=>{

      //console.log(documents);
          return res.status(200).json({

            message:'post fetched successfully!',
            labs:documents
          });
    });
});

module.exports=router;
