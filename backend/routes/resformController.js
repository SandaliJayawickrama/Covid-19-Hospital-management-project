const express = require('express');//RIVINDU
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
var nodemailer = require('nodemailer');//for mail
var {resForm} = require('../models/resform');
var transporter = nodemailer.createTransport({//for mailing
  service: 'gmail',
  auth: {
    user: 'gamingscoote@gmail.com',
    pass: 'escjyitdcumgxest'
  }
});

//=>localhost:3000/resforms/
//Get reservation details fro DB
router.get('/',(req, res, next)=>{//get all collection data from database
  resForm.find((err, docs) => {
    if (!err) {res.send(docs); }
    else { console.log('Error in Retriving resformController.js resForm : ' + JSON.stringify(err, undefined, 2)); }
  });
});
/*-----------------------------*/
//get reservation details by id
router.get('/:vid', (req, res) => {//get vid(id) from url and find data for id
  if (!ObjectId.isValid(req.params.vid))
       return res.status(400).send("No record with given id  resformController.js: ${req.params.id}");

 resForm.findById(req.params.vid, (err, doc) => {
    if (!err) {res.send(doc); }
    else { console.log('Error in Retriving vid(id) data in resformController.js : ' + JSON.stringify(err, undefined, 2)); }
  });

});
/*-----------------------------*/
//update reservation details
router.put('/:vid',(req, res)=>{
  if (!ObjectId.isValid(req.params.vid))
       return res.status(400).send("No record with given id (update) resformController.js: ${req.params.vid}");

  var Vres={
    name:req.body.name,
    nationalid:req.body.nationalid,
    age:req.body.age,
    phone:req.body.phone,
    email:req.body.email,
    city:req.body.city,
    street:req.body.street,
    houseno:req.body.houseno,
    code:req.body.code,
    opt:req.body.opt,
    date:req.body.date,
    time:req.body.time
  };
  resForm.findByIdAndUpdate(req.params.vid,{$set:Vres},{new:true},(err,doc)=>{
    if (!err) {res.send(doc); }
    else { console.log('Error in updating vid(id) data in resformController.js : ' + JSON.stringify(err, undefined, 2)); }
  });//search by this id
});
/*-----------------------------*/


//Delete Operation
router.delete('/obj/:vid',(req,res)=>{//delete by object id
  if(!ObjectId.isValid(req.params.vid))
    return res.status(400).send('No records with given vid(id):${req.params.vid}');

  resForm.findByIdAndRemove(req.params.vid,(err,doc)=>{
    if (!err) {res.send(doc); }
    else { console.log('Error in Deleting vid(id) data in resformController.js : ' + JSON.stringify(err, undefined, 2)); }
  });
});
/*-----------------------------*/
router.delete('/dat/:date', async ctx => {//customer delete by date
  await resForm.deleteMany({
    date: ctx.params.date
  })
   .then(() => {
    ctx.body = { status: 'Task Deleted!' }
   })
   .catch(err => {
    ctx.body = 'error appointmentcontroller: ' + err
   })
 });
/*-----------------------------*/

router.delete('/:natid', async ctx => {//customer delete by entering national id
  await resForm.deleteMany({
    nationalid: ctx.params.natid
  })
   .then(() => {
    ctx.body = { status: 'Task Deleted!' }
   })
   .catch(err => {
    ctx.body = 'error appointmentcontroller: ' + err
   })
 });

/*-----------------------------*/
//ENter reservation details to Database
router.post('/', (req, res)=>{
  var Vres=new resForm({
    name:req.body.name,
    nationalid:req.body.nationalid,
    age:req.body.age,
    phone:req.body.phone,
    email:req.body.email,
    city:req.body.city,
    street:req.body.street,
    houseno:req.body.houseno,
    code:req.body.code,//center name
    opt:req.body.opt,
    date:req.body.date,
    time:req.body.time,
  });
  Vres.save((err, doc) => {
    if (!err) {res.send(doc);
      var mailOptions = {//emai;
        from: 'gamingscoote@gmail.com',
        to: req.body.email,
        subject: 'Appointment Made',
        html: '<h4>Dear Patient:<br/> <h4>Your reservation at:'+req.body.code+'<h4>Has been Made Please Refer Vacination page on our website for more details on the center. use your national id( '+req.body.nationalid+' )number to cancell reservation <h4><h4>If you want to Update an reservation contact our staff<a href="tel:+94112729729">+94112729729</a></h4>'
      };
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });//email
    }
    else { console.log('Error in resform save resformController.js Save :' + JSON.stringify(err, undefined, 2)); }
  });
});
module.exports = router;

