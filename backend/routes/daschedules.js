const express = require("express");
const Drappointment = require("../models/daschedule");

const router = express.Router();

router.post("", (req, res, next) => {
  const Drschedule = new Drappointment({
    drname: req.body.drname,
    hospital: req.body.hospital,
    date: req.body.date,
    time: req.body.time,
    amount: req.body.amount,
  });
  Drschedule.save().then(createdSchedule => {
    res.status(201).json({
      message: "Schedule added successfully",
      dAscheduleId: createdSchedule._id
    });
  });
});


router.put("/:id", (req, res, next) => {
  const Drschedule = new Drappointment({
    _id: req.body.id,
    drname: req.body.drname,
    hospital: req.body.hospital,
    date: req.body.date,
    time: req.body.time,
    amount: req.body.amount,
  });
  Drappointment.updateOne({_id: req.params.id }, Drschedule).then(result => {
    res.status(200).json({ message: "Update successful!" });
  });
});



router.get("", (req, res, next) => {
  Drappointment.find().then(documents => {
    res.status(200).json({
      message: "Schedules fetched successfully!",
      DAschedule: documents
    });
  });
});


router.get("/:id", (req, res, next) => {
  Drappointment.findById(req.params.id).then(Drschedule => {
    if (Drschedule) {
      res.status(200).json(Drschedule);
    } else {
      res.status(404).json({message: 'Schedule not found!'});
    }
  })
});


router.delete("/:id", (req, res, next) => {
  Drappointment.deleteOne({_id: req.params.id}).then(result => {
    console.log(result);
    res.status(200).json({ message: "Schedule deleted!" });
  });
});


module.exports = router;
