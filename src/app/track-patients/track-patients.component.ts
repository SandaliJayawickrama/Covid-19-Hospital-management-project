import { Component, OnInit } from '@angular/core';
import {ChartsService} from '../charts.service'
import { Chart } from 'chart.js';
import {  registerables } from 'chart.js';
Chart.register(...registerables);
@Component({
  selector: 'app-track-patients',
  templateUrl: './track-patients.component.html',
  styleUrls: ['./track-patients.component.css']
})
export class TrackPatientsComponent implements OnInit {

barchart:any;
piechart:any;
genderchart:any;
agechart:any;
constructor(public _chart:ChartsService){}

western=0;
southern=0;
northern=0;
eastern=0;
central=0;
northcentral=0;
northwestern=0;
sabaragamuwa=0;
uva=0;

total=0;

male=0;
female=0;

child=0;
adult=0;
elder=0;
  ngOnInit() {
    


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

       this.barchart=new Chart('bar',{
                type:'bar',

                data:{
                  labels:['Western','Southern','Northern','Eastern','Central','North-Central','North-Western','Sabaragamuwa','Uva'],
                  datasets:[{
                    label:"Number of Patients",
                    data:[this.western,this.southern,this.northern,this.eastern,this.central,this.northcentral,this.northwestern,this.sabaragamuwa,this.uva],
                    backgroundColor:[

                      'rgba(255,0,0)',
                      'rgba(255,255,0)',
                      'rgba(128,0,128)',
                      'rgba(0,128,0)',
                      'rgba(0,0,255)',
                      'rgba(0,255,255)',
                      'rgba(165,42,42)',
                      'rgba(220,20,60)',
                      'rgba(255,140,0)',
                    ],
                  }]
},
options: {
  scales: {
    y: {
      beginAtZero: true
    }
}
}
})

this.piechart=new Chart('pie',{
  type:'pie',
  data:{
    labels:['Western','Southern','Northern','Eastern','Central','North-Central','North-Western','Sabaragamuwa','Uva'],
    datasets:[{
      label:"Number of Patients",
      data:[this.western,this.southern,this.northern,this.eastern,this.central,this.northcentral,this.northwestern,this.sabaragamuwa,this.uva],
      backgroundColor:[

      'rgba(255,0,0)',
      'rgba(255,255,0)',
      'rgba(128,0,128)',
      'rgba(0,128,0)',
      'rgba(0,0,255)',
      'rgba(0,255,255)',
      'rgba(165,42,42)',
      'rgba(220,20,60)',
      'rgba(255,140,0)'
    ],
      hoverOffset: 4
    }]

}
})
this.male = 0;
for (let i = 0; i <res['posts'] .length; i++) {
  if (res['posts'][i].newGender === 'Male') this.male++;
}
this.female = 0;
for (let i = 0; i <res['posts'] .length; i++) {
  if (res['posts'][i].newGender === 'Female') this.female++;
}

this.genderchart=new Chart('gender',{
  type:'pie',
  data:{
    labels:['Male','Female'],
    datasets:[{
      label:"Number of Patients",
      data:[this.male,this.female],
      backgroundColor:[

      'rgba(255,0,0)',
      'rgba(255,255,0)',

    ],
      hoverOffset: 4
    }]

}
})

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


this.agechart=new Chart('age',{
  type:'pie',
  data:{
    labels:['Children Age<18','Adult 18<Age<60','Elder Age>60'],
    datasets:[{
      label:"Number of Patients",
      data:[this.child,this.adult,this.elder],
      backgroundColor:[

      'rgba(255,0,0)',
      'rgba(255,255,0)',
      'rgba(165,42,42)'
    ],
      hoverOffset: 4
    }]

}
})

})
}
}

