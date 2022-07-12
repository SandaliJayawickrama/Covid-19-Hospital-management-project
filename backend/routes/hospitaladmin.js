const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Hadmin = require("../models/hospitaladmin");
const { request } = require("http");
const hadmin = require("../models/hospitaladmin");

const router = express.Router();


//admin sign up

router.post('/hospital-admin-signup', (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
    .then(hash => {
        const hadmin = new Hadmin({
            
            email: req.body.email,
            password: hash,
            
        });
        hadmin.save()
            .then(result => {
                res.status(201).json({
                    messase: 'Registration Successful!',
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


//admin login 
router.post("/admin-login", (req,res,next) => {
    let fetchedaAdmin;
    Hadmin.findOne({ email: req.body.email }) 
    .then(hadmin => {
        
        if ( !hadmin) {
            return res.status(404).json ({
                message: "Auth Failed"
            });
        } 
        fetchedaAdmin = hadmin;
        return bcrypt.compare(req.body.password, hadmin.password);
    
    })
        .then(result =>{
            
            if (!result){
                return res.status(404).json ({
                    message: "Auth Failed"
                });
            }
                const token = jwt.sign({email: fetchedaAdmin.email, userId: fetchedaAdmin._id}, 
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


module.exports = router;