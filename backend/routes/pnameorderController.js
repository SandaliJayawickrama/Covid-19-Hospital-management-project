const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;


var { Pnameorder } = require('../models/pnameorder');


// => localhost:3000/pnameorders/
router.get('/', (req, res) => {
  Pnameorder.find((err, docs) => {
    if (!err) {res.send(docs); }
    else { console.log('Error in Retriving Pnameorder : ' + JSON.stringify(err, undefined, 2)); }
  });

});

router.get('/:id', (req, res) => {
  if (!ObjectId.isValid(req.params.id))
       return res.status(400).send("No record with given id : ${req.params.id}");

  Pnameorder.findById(req.params.id, (err, doc) => {
    if (!err) {res.send(doc); }
    else { console.log('Error in Retriving Pnameorder : ' + JSON.stringify(err, undefined, 2)); }
  });

});

router.post('/', (req, res) => {
  var pn = new Pnameorder({
      pno: req.body.pno,
      pname: req.body.pname,
      location: req.body.location,
      cno: req.body.cno,


  });
  pn.save((err, doc) => {
    if (!err) { res.send(doc); }
    else { console.log('Error in Pnameorder Save :' + JSON.stringify(err, undefined, 2)); }
  });
});

router.put('/:id', (req, res) => {
    var pn = {
      pno: req.body.pno,
      pname: req.body.pname,
      location: req.body.location,
      cno: req.body.cno,

  };

  Pnameorder.findByIdAndUpdate( req.params.id, {$set: pn},{new: true},(err, doc ) => {
    if (!err)
      { res.send(doc); }
    else
      { console.log('Error in Pnameorder update: ' + JSON.stringify(err, undefined, 2)); }
  });

});


router.delete('/:id', ( req, res ) => {
  if(!ObjectId.isValid( req.params.id ))
       return res.status(400).send('No record with given id : ${ req.params.id }');

  Pnameorder.findByIdAndRemove( req.params.id, (err, doc) => {
    if(!err){res.send(doc); }

    else { console.log('Error in Pnameorder Delete :' + JSON.stringify(err,undefined,2)); }
  });
});


module.exports = router;
