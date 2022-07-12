import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Doctor } from '../doctor.model';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-doctor-display',
  templateUrl: './doctor-display.component.html',
  styleUrls: ['./doctor-display.component.css']
})
export class DoctorDisplayComponent implements OnInit {

  doctors: Doctor[] =[];
  private doctorsSub: Subscription = new Subscription;
  searchText: string;

  constructor(public doctorService: DoctorService) {}

  ngOnInit(): void {
    this.doctorService.getSchedule();
    this.doctorsSub = this.doctorService.getdoctorsUpdateListener()
    .subscribe((doctors: Doctor[]) =>{
      this.doctors = doctors;
    });
  }

  onDelete(doctorsId: string){
    this.doctorService.deleteSchedule(doctorsId);
  }

  ngOnDestroy(){
    this.doctorsSub.unsubscribe();
  }


}
