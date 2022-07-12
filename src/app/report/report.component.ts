import { Component, OnInit } from '@angular/core';
import {ChartsService} from '../charts.service';
import jspdf from 'jspdf'
import html2canvas from 'html2canvas'
import {Associates} from '../patient.model'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  Associates:Associates[]=[];
  private AssociatesSub: Subscription = new Subscription;
  constructor(public _chart:ChartsService){}
  total=0;
  western=0;
  southern=0;
  northern=0;
  eastern=0;
  central=0;
  northcentral=0;
  northwestern=0;
  sabaragamuwa=0;
  uva=0;

  male=0;
  female=0;

  child=0;
  adult=0;
  elder=0;
    ngOnInit() {

this._chart.associatedetails()
this.AssociatesSub=this._chart.getAssociatesUpdateListener()
.subscribe((Associates:Associates[])=>{
 this.Associates=Associates});


      this._chart.PatientCharts()
      .subscribe(res=>{



   this.western = 0;
  for (let i = 0; i <res['posts'] .length; i++) {
    if (res['posts'][i].newProvince === 'Western') this.western++;
  }


  this.southern= 0;
  for (let i = 0; i <res['posts'] .length; i++) {
    if (res['posts'][i].newProvince === 'Southern') this.southern++;
  }this.northern = 0;
  for (let i = 0; i <res['posts'] .length; i++) {
    if (res['posts'][i].newProvince === 'Northern') this.northern++;
  }this.eastern = 0;
  for (let i = 0; i <res['posts'] .length; i++) {
    if (res['posts'][i].newProvince === 'Eastern') this.eastern++;
  } this.central = 0;
  for (let i = 0; i <res['posts'] .length; i++) {
    if (res['posts'][i].newProvince === 'Central') this.central++;
  } this.northcentral = 0;
  for (let i = 0; i <res['posts'] .length; i++) {
    if (res['posts'][i].newProvince === 'North Central') this.northcentral++;
  } this.northwestern = 0;
  for (let i = 0; i <res['posts'] .length; i++) {
    if (res['posts'][i].newProvince === 'North Western') this.northwestern++;
  } this.sabaragamuwa = 0;
  for (let i = 0; i <res['posts'] .length; i++) {
    if (res['posts'][i].newProvince === 'Sabaragamuwa') this.sabaragamuwa++;
  }this.uva = 0;
  for (let i = 0; i <res['posts'] .length; i++) {
    if (res['posts'][i].newProvince === 'Uva') this.uva++;
  }
  this.total=this.western+this.southern+this.northern+this.northcentral+this.northwestern+this.sabaragamuwa+this.uva+this.central+this.eastern;


  this.male = 0;
for (let i = 0; i <res['posts'] .length; i++) {
  if (res['posts'][i].newGender === 'Male') this.male++;
}
this.female = 0;
for (let i = 0; i <res['posts'] .length; i++) {
  if (res['posts'][i].newGender === 'Female') this.female++;
}


this.child = 0;
for (let i = 0; i <res['posts'] .length; i++) {
  if (res['posts'][i].newAge <18) this.child++;
}
this.adult = 0;
for (let i = 0; i <res['posts'] .length; i++) {
  if (res['posts'][i].newAge >=18 && res['posts'][i].newAge <60) this.adult++;
}
this.elder = 0;
for (let i = 0; i <res['posts'] .length; i++) {
  if (res['posts'][i].newAge >=60) this.elder++;
}

})
}

download1(){

var element=document.getElementById('province')!
html2canvas(element).then((canvas)=>{
var imgData= canvas.toDataURL('image/png')

var doc= new jspdf()
var imgHeight=canvas.height * 208 / canvas.width;
doc.addImage(imgData,0,0,208,imgHeight)
doc.save("Province.pdf")
})
}

download2(){

  var element=document.getElementById('gender')!
  html2canvas(element).then((canvas)=>{
  var imgData= canvas.toDataURL('image/png')

  var doc= new jspdf()
  var imgHeight=canvas.height * 208 / canvas.width;
  doc.addImage(imgData,0,0,208,imgHeight)
  doc.save("gender.pdf")
  })
  }

download3(){

  var element=document.getElementById('age')!
  html2canvas(element).then((canvas)=>{
  var imgData= canvas.toDataURL('image/png')

  var doc= new jspdf()
  var imgHeight=canvas.height * 208 / canvas.width;
  doc.addImage(imgData,0,0,208,imgHeight)
  doc.save("age.pdf")
  })
  }

  download4(){

    var element=document.getElementById('places')!
    html2canvas(element).then((canvas)=>{
    var imgData= canvas.toDataURL('image/png')

    var doc= new jspdf()
    var imgHeight=canvas.height * 208 / canvas.width;
    doc.addImage(imgData,0,0,208,imgHeight)
    doc.save("public_places.pdf")
    })
    }
}
