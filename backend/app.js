const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const multer = require('multer');
const labsRoutes=require("./routes/labs");
const labBookingsRoutes=require("./routes/labbookings");
const path=require('path');
var orderController = require('./routes/orderController.js');
var confirmorderController = require('./routes/confirmorderController');
var pnameorderController = require('./routes/pnameorderController');
var reportorderController = require('./routes/reportorderController');

var reservationController = require('./routes/reservationController.js');

var hospitaladmincontactController = require('./routes/hospitaladmincontactController');
const userRoutes = require("./routes/user");
const hospitaladminRoutes = require("./routes/hospitaladmin");

var orderController = require('./routes/orderController.js');//chamath
var confirmorderController = require('./routes/confirmorderController');//chamath
var pnameorderController = require('./routes/pnameorderController');//chamath
var reportorderController = require('./routes/reportorderController');//chamath

var resformController=require('./routes/resformController');//Rivindu
var appointmentController=require('./routes/appointmentController');//Rivindu

//Sandali
const scheduleRoutes = require("./routes/schedules");
const DAscheduleRoutes = require("./routes/daschedules");
const DoctorRoutes = require("./routes/doctors");




const patientRoutes=require("./routes/patients");
const AssociatesRoutes=require("./routes/Associates");


const cardRoutes= require("./routes/cards");
const cashRoutes= require("./routes/cashs");



var app = express();

app.use(bodyParser.json());
app.use(cors({ origin: '*' }));
app.use("/images", express.static(path.join("images")));


app.listen(3000, () => console.log('Server started at post : 3000'));





app.use('/orders', orderController);//chamath
app.use('/confirmorders', confirmorderController);//chamath
app.use('/pnameorders', pnameorderController);//chamath
app.use('/reportorders', reportorderController);//chamath

app.use('/resforms',resformController );//Rivindu for vacination purposes
app.use('/appointment',appointmentController);//for rivindu doctor appointment



app.use('/orders', orderController);
app.use('/confirmorders', confirmorderController);
app.use('/pnameorders', pnameorderController);
app.use('/reportorders', reportorderController);
app.use('/hospitaladmincontacts', hospitaladmincontactController);
app.use("/api/user", userRoutes);
app.use("/api/hadmin", hospitaladminRoutes )


app.use(patientRoutes);
app.use(AssociatesRoutes);


//sandali
app.use("/api/Vschedule" , scheduleRoutes);
app.use("/api/DAschedule" , DAscheduleRoutes);
app.use("/api/doctors" , DoctorRoutes);


app.use("/api/card",cardRoutes);
app.use(cashRoutes);


//muthuni
app.use('/reservations',reservationController);




//DB Connections

mongoose.connect('mongodb+srv://chamath:Chama123@cluster0.lnfwc.mongodb.net/node-angular', (err) => {
     if(!err)
           console.log('MongoDB connection succeeded.');
     else
           console.log('Error is DB connection : ' + JSON.stringify(err, undefined, 2));


});

//Naveen
app.use("/api/labbookings", labBookingsRoutes );
app.use("/api/labs", labsRoutes);



module.exports = mongoose;


//Upload Image multer
const storage = multer.diskStorage({
  destination: (req, file, callBack) => {
      callBack(null, 'uploads')
  },
  filename: (req, file, callBack) => {
      callBack(null, `FunOfHeuristic_${file.originalname}`)
  }
})

const upload = multer({ storage: storage })

//let upload = multer({ dest: 'uploads/' })

app.get("/", (req, res) => {
  res.send(
    `<h1 style='text-align: center'>
          Wellcome to FunOfHeuristic
          <br><br>
          <b style="font-size: 182px;">😃👻</b>
      </h1>`
  );
});

app.post('/file', upload.single('file'), (req, res, next) => {
  const file = req.file;
  console.log(file.filename);
  if (!file) {
    const error = new Error('No File')
    error.httpStatusCode = 400
    return next(error)
  }
    res.send(file);
})


