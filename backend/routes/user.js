
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/user");
const { request } = require("http");
const user = require("../models/user");

const router = express.Router();


//user sign up

router.post('/signup', (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
    .then(hash => {
        const user = new User({
            fullname: req.body.fullname,
            email: req.body.email,
            phone: req.body.phone,
            password: hash,
            dob: req.body.dob,
            nic: req.body.nic,
            address1: req.body.address1,
            address2: req.body.address2,
            province: req.body.province,
            gender: req.body.gender,

        });
        user.save()
            .then(result => {
                res.status(201).json({
                    messase: 'User Registration Successful!',
                    result: result
                });
            })
            .catch(err => {
                res.status(500).json({
                   
                    error: err
                });
            });
    });
   
});


//user login

router.post("/login", (req,res,next) => {
    let fetchedUser;
    fetchedUser = user;
    User.findOne({ email: req.body.email }) 
    .then(user => {
        
        if ( !user) {
            return res.status(404).json ({
                message: "Auth Failed"
            });
        } 
       
        return bcrypt.compare(req.body.password, user.password);
    
    })
        .then(result =>{
            
            if (!result){
                return res.status(404).json ({
                    message: "Auth Failed"
                });
            }
                const token = jwt.sign({email: fetchedUser.email, userId: fetchedUser._id}, 
                    "secret_this _should_be_longer", 
                    { expiresIn: "1h" }
                    );
                    res.status(200).json({
                        token: token     
                    });
        })
        .catch(err  =>{
            console.log(err);
            return res.status(404).json ({
                message: "Auth Failed"
            });
        });

});



//view all user
router.route("/").get((req,res)=>{

    User.find().then((user)=>{
        res.json(user)
    }).catch((err)=>{
        console.log(err)
    })

});
  



//delete user

router.route("/:id").delete(async (req,res) => {
    let userid = req.params = req.params.id;

    await User.findByIdAndDelete(userid)
    .then(()=>{
        res.status(200).send({status: "User Deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500),send({status: "Error with delete user", error: err.message});
    })
});



  module.exports = router;



