const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;


var { Hospitaladmincontact } = require('../models/hospitaladmincontact');



//=> localhost:3000/hospitaladmincontacts/list
router.get('/', (req, res) => {
    Hospitaladmincontact.find((err, docs) => {
        if(!err) { res.send(docs); }
         else { console.log('Error in Retriving Admins :' + Json.stringify(err, undefined, 2)); }     
    });
});




//=> localhost:3000/hospitaladmincontacts/:id
router.get('/:id' , (req, res) =>{
    if (!ObjectId.isValid(req.params.id))
    return res.status(400).send('NO record with given id : ${req.params.id}');

    Hospitaladmincontact.findById(req.params.id, (err, doc) =>{
        if(!err) {res.send(doc);}
        else {console.log('Error in Retriving admin :' + Json.stringify(err, undefined, 2)); }
    });
});




//=> localhost:3000/hospitaladmincontacts/
router.post('/', (req, res) => {
    var hac = new Hospitaladmincontact({
        name: req.body.name,
        hname: req.body.hname,
        email: req.body.email,
        phone: req.body.phone,
    });
    hac.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Admin save :' +Json.stringify(err, undefined, 2)); }
    });
});



//=> localhost:3000/hospitaladmincontacts/
//update
router.put('/:id' , (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('NO record with given id : ${req.params.id}');
       
        var hac = {
            name: req.body.name,
            hname: req.body.hname,
            email: req.body.email,
            phone: req.body.phone,
        };
     Hospitaladmincontact.findByIdAndUpdate(req.params.id, {$set: hac}, {new: true}, (err,doc) => {
         if (!err) { res.send(doc); }
         else { console.log('Error in Admin update' + Json.stringify(err, undefined, 2)); }
     });   
});




//delete
router.delete('/:id', (req,res) =>{
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('NO record with given id : ${req.params.id}');
   
    Hospitaladmincontact.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Admin Delete' + Json.stringify(err, undefined, 2)); }
    });

});



module.exports = router;