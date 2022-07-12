import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Drappointment } from '../drappointment.model';
import { DrappointmentService } from '../drappointment.service';

@Component({
  selector: 'app-dr-ap-display',
  templateUrl: './dr-ap-display.component.html',
  styleUrls: ['./dr-ap-display.component.css']
})
export class DrApDisplayComponent implements OnInit {

  DAschedule: Drappointment[] =[];
  private DAscheduleSub: Subscription = new Subscription;

  constructor(public drappointmentService: DrappointmentService) {}

  ngOnInit(): void {
    this.drappointmentService.getSchedule();
    this.DAscheduleSub = this.drappointmentService.getDAscheduleUpdateListener()
    .subscribe((DAschedule: Drappointment[]) =>{
      this.DAschedule = DAschedule;
    });
  }

  onDelete(dAscheduleId: string){
    this.drappointmentService.deleteSchedule(dAscheduleId);
  }

  ngOnDestroy(){
    this.DAscheduleSub.unsubscribe();
  }

}
