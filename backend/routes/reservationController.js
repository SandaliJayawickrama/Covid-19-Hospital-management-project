const express = require ('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Reservation } = require('../models/reservation');
// => localhost:3000/reservations/
router.get('/', (req, res) => {
  Reservation.find((err, docs) => {
        if (!err) {res.send(docs); }
        else { console.log('Error in Retrieving Reservation : ' + JSON.stringify(err, undefined, 2)); }
  });
});

router.get('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id))
     return res.status(400).send('No record with given id : ${req.params.id}');

     Reservation.findById(req.params.id, (err, doc) => {
                  if(!err) {res.send(doc); }
                  else { console.log('Error in Retrieving Reservation : ' + JSON.stringify(err, undefined, 2)); }
     });
});


router.post('/', (req, res) => {
  var res1 = new Reservation({
    nic: req.body.nic,
    name: req.body.name,
    city: req.body.city,
    country: req.body.country,
    resno: req.body.resno,
 });

  res1.save((err, doc) => {
    if (!err) { res.send(doc); }
    else { console.log('Error Rservation Save :' + JSON.stringify(err, undefined, 2)); }
  });
});



router.put('/:id', (req, res) => {
  if (!ObjectId.isValid(req.params.id))
  return res.status(400).send('No record given id : ${req.params.id}');
  var res1 = {
    nic: req.body.nic,
    name: req.body.name,
    city: req.body.city,
    country: req.body.country,
    resno: req.body.resno,
};

Reservation.findByIdAndUpdate( req.params.id, {$set: res1},{new: true},(err, doc ) => {
  if (!err)
    { res.send(doc); }
  else
    { console.log('Error in reservation update: ' + JSON.stringify(err, undefined, 2)); }
});

});


router.delete('/:id', ( req, res ) => {
if(!ObjectId.isValid( req.params.id ))
     return res.status(400).send('No record with given id : ${ req.params.id }');

Reservation.findByIdAndRemove( req.params.id, (err, doc) => {
  if(!err){res.send(doc); }

  else { console.log('Error in Reservation Delete :' + JSON.stringify(err,undefined,2)); }
});
});


module.exports = router;
