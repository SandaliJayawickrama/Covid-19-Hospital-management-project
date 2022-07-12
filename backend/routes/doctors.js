const express = require("express");
const Doctor = require("../models/doctor");

const router = express.Router();

router.post("", (req, res, next) => {
  const doctor = new Doctor({
    drname: req.body.drname,
    phone: req.body.phone,
    address: req.body.address,
    quali: req.body.quali,
  });
  doctor.save().then(createdSchedule => {
    res.status(201).json({
      message: "Schedule added successfully",
      doctorsId: createdSchedule._id
    });
  });
});


router.put("/:id", (req, res, next) => {
  const doctor = new Doctor({
    _id: req.body.id,
    drname: req.body.drname,
    phone: req.body.phone,
    address: req.body.address,
    quali: req.body.quali,
  });
  Doctor.updateOne({_id: req.params.id }, doctor).then(result => {
    res.status(200).json({ message: "Update successful!" });
  });
});



router.get("", (req, res, next) => {
  Doctor.find().then(documents => {
    res.status(200).json({
      message: "Schedules fetched successfully!",
      doctors: documents
    });
  });
});


router.get("/:id", (req, res, next) => {
  Doctor.findById(req.params.id).then(doctor => {
    if (doctor) {
      res.status(200).json(doctor);
    } else {
      res.status(404).json({message: 'Schedule not found!'});
    }
  })
});


router.delete("/:id", (req, res, next) => {
  Doctor.deleteOne({_id: req.params.id}).then(result => {
    console.log(result);
    res.status(200).json({ message: "Schedule deleted!" });
  });
});


module.exports = router;
