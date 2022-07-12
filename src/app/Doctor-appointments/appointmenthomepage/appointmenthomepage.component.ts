import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Drappointment } from '../drappointment.model';
import { DrappointmentService } from '../drappointment.service';

@Component({
  selector: 'app-appointmenthomepage',
  templateUrl: './appointmenthomepage.component.html',
  styleUrls: ['./appointmenthomepage.component.css']
})
export class AppointmenthomepageComponent implements OnInit {
  searchText: string;

  DAschedule: Drappointment[] =[];
  private DAscheduleSub: Subscription = new Subscription;

  constructor(public drappointmentService: DrappointmentService) { }

  ngOnInit(): void {
    this.drappointmentService.getSchedule();
    this.DAscheduleSub = this.drappointmentService.getDAscheduleUpdateListener()
    .subscribe((DAschedule: Drappointment[]) =>{
      this.DAschedule = DAschedule;
    });
  }

}
