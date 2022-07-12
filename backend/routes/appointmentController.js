const express = require('express');//RIVINDU
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
var nodemailer = require('nodemailer');//for mail


var {appointment} = require('../models/appointment');
var transporter = nodemailer.createTransport({//for mailing
  service: 'gmail',
  auth: {
    user: 'gamingscoote@gmail.com',
    pass: 'escjyitdcumgxest'
  }
});

//=>localhost:3000/appointment/
//Get reservation details fro DB
router.get('/',(req, res, next)=>{//get all collection data from database
  appointment.find((err, docs) => {
    if (!err) {res.send(docs); }
    else { console.log('Error in Retriving appointment.js appointment : ' + JSON.stringify(err, undefined, 2)); }
  });
});

/*-----------------------------*/
//ENter reservation details to Database
router.post('/', (req, res)=>{
  var Ares=new appointment({
    name:req.body.name,//name means email
    docname:req.body.docname,//docname means docname
    email:req.body.email,//email mean date
    contact:req.body.contact//contact is national id
  });
  Ares.save((err, doc) => {
    if (!err) {res.send(doc);
      var mailOptions = {//emai;
        from: 'gamingscoote@gmail.com',
        to: req.body.name,
        subject: 'Appointment Made',
        html: '<h4>Dear Patient:<br/> <h4>Your appointment with:'+req.body.docname+'<h4>Has been Made Please Refer Doctor arrival time from the website. use your national id( '+req.body.contact+' )number to ancell Apointment <h4><h3>NOTE CANCELLING RESERVATION WITH NATIONAL ID WILL CANCELL ALL APPOINTMENT MADE WITH THAT ID</h3><h4>If you want to Cancell an appointment or update details made on a specific day contact our staff<a href="tel:+94112729729">+94112729729</a></h4>'
      };
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });//email
    }
    else { console.log('Error in appointment save appointmentController.js Save :' + JSON.stringify(err, undefined, 2)); }
  });
});

/*-----------------------------*/
//get appointment details by id
router.get('/:aid', (req, res) => {//get aid(id) from url and find data for id
  if (!ObjectId.isValid(req.params.aid))
       return res.status(400).send("No record with given id  appointmentController.js: ${req.params.id}");

 appointment.findById(req.params.aid, (err, doc) => {
    if (!err) {res.send(doc); }
    else { console.log('Error in Retriving aid(id) data in appointmentController.js : ' + JSON.stringify(err, undefined, 2)); }
  });
});
/*-----------------------------*/
/*router.get('/natid/:nic', async (req, res) => {//get nic() from url and find data for nic
  await appointment.findOne({
    contact: req.params.nic
  })
   .then(() => {
    if (!err) {res.send(doc); }
    req.body = { status: 'Task feteched!' }
   })
   .catch(err => {
    req.body = 'error appointmentcontroller find by nic: ' + err
   })

});*/


/*-----------------------------*/
//update apointment details
router.put('/:aid',(req, res)=>{
  if (!ObjectId.isValid(req.params.aid))
       return res.status(400).send("No record with given id (update) resformController.js: ${req.params.aid}");

  var Ares={
    name:req.body.name,
    docname:req.body.docname,
    email:req.body.email,
    contact:req.body.contact
  };
  appointment.findByIdAndUpdate(req.params.aid,{$set:Ares},{new:true},(err,doc)=>{
    if (!err) {res.send(doc); }
    else { console.log('Error in updating aid(id) data in appointmentontroller.js : ' + JSON.stringify(err, undefined, 2)); }
  });//search by this id
});

router.delete('/:natid', async ctx => {
  await appointment.deleteMany({
    contact: ctx.params.natid
  })
   .then(() => {
    ctx.body = { status: 'Task Deleted!' }
   })
   .catch(err => {
    ctx.body = 'error appointmentcontroller: ' + err
   })
 });
 router.delete('/dat/:date', async ctx => {
  await appointment.deleteMany({
    email: ctx.params.date
  })
   .then(() => {
    ctx.body = { status: 'Task Deleted!' }
   })
   .catch(err => {
    ctx.body = 'error appointmentcontroller: ' + err
   })
 });

router.delete('/one/:aid',(req,res)=>{
  if(!ObjectId.isValid(req.params.aid))
    return res.status(400).send('No records with given aid(id):${req.params.aid}');
  appointment.findByIdAndRemove(req.params.aid,(err,doc)=>{
    if (!err) {res.send(doc); }
    else { console.log('Error in Deleting aid(id) data in appointmentController.js : ' + JSON.stringify(err, undefined, 2)); }
  });
});

/*-----------------------------*/

module.exports=router;

