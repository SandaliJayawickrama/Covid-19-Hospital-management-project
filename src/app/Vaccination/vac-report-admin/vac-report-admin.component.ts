import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DrappointmentService } from 'src/app/Doctor-appointments/drappointment.service';
import { Drappointment } from 'src/app/Doctor-appointments/drappointment.model';

@Component({
  selector: 'app-vac-report-admin',
  templateUrl: './vac-report-admin.component.html',
  styleUrls: ['./vac-report-admin.component.css']
})
export class VacReportAdminComponent implements OnInit {


  DAschedule: Drappointment[] =[];
  private DAscheduleSub: Subscription = new Subscription;

  constructor(public drappointmentService: DrappointmentService) {}


  total=0;
  raja=0;
  nuge=0;
  army=0;

  ngOnInit() {
    this.drappointmentService.getSchedule();
    this.DAscheduleSub = this.drappointmentService.getDAscheduleUpdateListener()
    .subscribe((DAschedule: Drappointment[]) =>{
      this.DAschedule = DAschedule;});

      /*this.drappointmentService.getSchedule()
      .subscribe((res: { [x: string]: { newProvince: string; }[]; })=>{


       this.raja = 0;
       for (let i = 0; i <res['posts'] .length; i++) {
       if (res['posts'][i].newProvince === 'raja') this.raja++;
       }

     })*/

  }//oninit


  }
