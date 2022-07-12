const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;


var { Reportorder } = require('../models/reportorder');


// => localhost:3000/reportorders/
router.get('/', (req, res) => {
  Reportorder.find((err, docs) => {
    if (!err) {res.send(docs); }
    else { console.log('Error in Retriving Reportorder : ' + JSON.stringify(err, undefined, 2)); }
  });

});

router.get('/:id', (req, res) => {
  if (!ObjectId.isValid(req.params.id))
       return res.status(400).send("No record with given id : ${req.params.id}");

  Reportorder.findById(req.params.id, (err, doc) => {
    if (!err) {res.send(doc); }
    else { console.log('Error in Retriving Reportorder : ' + JSON.stringify(err, undefined, 2)); }
  });

});

router.post('/', (req, res) => {
  var ro = new Reportorder({
      pid: req.body.pid,
      date: req.body.date,
      nod: req.body.nod,
      amount: req.body.amount,


  });
  ro.save((err, doc) => {
    if (!err) { res.send(doc); }
    else { console.log('Error in Reportorder Save :' + JSON.stringify(err, undefined, 2)); }
  });
});

router.put('/:id', (req, res) => {
    var ro = {
      pid: req.body.pid,
      date: req.body.date,
      nod: req.body.nod,
      amount: req.body.amount,

  };

  Reportorder.findByIdAndUpdate( req.params.id, {$set: ro},{new: true},(err, doc ) => {
    if (!err)
      { res.send(doc); }
    else
      { console.log('Error in Reportorder update: ' + JSON.stringify(err, undefined, 2)); }
  });

});


router.delete('/:id', ( req, res ) => {
  if(!ObjectId.isValid( req.params.id ))
       return res.status(400).send('No record with given id : ${ req.params.id }');

  Reportorder.findByIdAndRemove( req.params.id, (err, doc) => {
    if(!err){res.send(doc); }

    else { console.log('Error in Reportorder Delete :' + JSON.stringify(err,undefined,2)); }
  });
});


module.exports = router;
