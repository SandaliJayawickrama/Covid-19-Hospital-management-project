const express = require("express");
const Vaccination = require("../models/schedule");
//const reservation = require("../models/resform");

const router = express.Router();

router.post("", (req, res, next) => {
  const Vacschedule = new Vaccination({
    vschedname: req.body.vschedname,
    vname: req.body.vname,
    dosage: req.body.dosage,
    centerN: req.body.centerN,
    centerA: req.body.centerA,
    date: req.body.date,
    time: req.body.time,
    vcapacity: req.body.vcapacity,
    age: req.body.age
  });
  Vacschedule.save().then(createdSchedule => {
    res.status(201).json({
      message: "Schedule added successfully",
      vscheduleId: createdSchedule._id
    });
  });
});


router.put("/:id", (req, res, next) => {
  const Vacschedule = new Vaccination({
    _id: req.body.id,
    vschedname: req.body.vschedname,
    vname: req.body.vname,
    dosage: req.body.dosage,
    centerN: req.body.centerN,
    centerA: req.body.centerA,
    date: req.body.date,
    time: req.body.time,
    vcapacity: req.body.vcapacity,
    age: req.body.age
  });
  Vaccination.updateOne({_id: req.params.id }, Vacschedule).then(result => {
    res.status(200).json({ message: "Update successful!" });
  });
});



router.get("", (req, res, next) => {
  Vaccination.find().then(documents => {
    res.status(200).json({
      message: "Schedules fetched successfully!",
      Vschedule: documents
    });
  });
});


router.get("/:id", (req, res, next) => {
  Vaccination.findById(req.params.id).then(Vacschedule => {
    if (Vacschedule) {
      res.status(200).json(Vacschedule);
    } else {
      res.status(404).json({message: 'Schedule not found!'});
    }
  })
});


router.delete("/:id", (req, res, next) => {
  Vaccination.deleteOne({_id: req.params.id}).then(result => {
    console.log(result);
    res.status(200).json({ message: "Schedule deleted!" });
  });
});


module.exports = router;
