const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;


var { Confirmorder } = require('../models/confirmorder');


// => localhost:3000/confirmorders/
router.get('/', (req, res) => {
  Confirmorder.find((err, docs) => {
    if (!err) {res.send(docs); }
    else { console.log('Error in Retriving ConfirmOrder : ' + JSON.stringify(err, undefined, 2)); }
  });

});


router.get('/:id', (req, res) => {
  if (!ObjectId.isValid(req.params.id))
       return res.status(400).send("No record with given id : ${req.params.id}");

  Confirmorder.findById(req.params.id, (err, doc) => {
    if (!err) {res.send(doc); }
    else { console.log('Error in Retriving ConfirmOrder : ' + JSON.stringify(err, undefined, 2)); }
  });

});


router.post('/', (req, res) => {
  var cord = new Confirmorder({
    username: req.body.username,
    drugid: req.body.drugid,
    iname: req.body.iname,
    itype: req.body.itype,
    nitems: req.body.nitems,


  });
  cord.save((err, doc) => {
    if (!err) { res.send(doc); }
    else { console.log('Error in ConfirmOrder Save :' + JSON.stringify(err, undefined, 2)); }
  });
});

router.put('/:id', (req, res) => {
    var cord = {
      username: req.body.username,
      drugid: req.body.drugid,
      iname: req.body.iname,
      itype: req.body.itype,
      nitems: req.body.nitems,


  };

  Confirmorder.findByIdAndUpdate( req.params.id, {$set: cord},{new: true},(err, doc ) => {
    if (!err)
      { res.send(doc); }
    else
      { console.log('Error in Employee update: ' + JSON.stringify(err, undefined, 2)); }
  });

});


router.delete('/:id', ( req, res ) => {
  if(!ObjectId.isValid( req.params.id ))
       return res.status(400).send('No record with given id : ${ req.params.id }');

  Confirmorder.findByIdAndRemove( req.params.id, (err, doc) => {
    if(!err){res.send(doc); }

    else { console.log('Error in ConfirmOrder Delete :' + JSON.stringify(err,undefined,2)); }
  });
});



module.exports = router;
