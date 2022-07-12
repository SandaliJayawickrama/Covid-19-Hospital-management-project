import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ParamMap } from '@angular/router';
import { Drappointment } from '../drappointment.model';
import { DrappointmentService} from '../drappointment.service';

import { Doctor } from 'src/app/Doctors/doctor.model';
import { DoctorService } from 'src/app/Doctors/doctor.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-dr-ap-add',
  templateUrl: './dr-ap-add.component.html',
  styleUrls: ['./dr-ap-add.component.css']
})
export class DrApAddComponent implements OnInit {
  doctors: Doctor[] =[];
  private doctorsSub: Subscription = new Subscription;

  constructor(public DAService: DrappointmentService, public route: ActivatedRoute, public doctorservice: DoctorService){}

  enteredDrName = "";
  enteredHospital = "";
  enteredAmount = "";
  enteredDate = "";
  enteredTime = "";
  Drschedule: Drappointment;
  private mode = 'drA-add';
  private dAscheduleId: string;


  ngOnInit(): void {
    this.doctorservice.getSchedule();
    this.doctorsSub = this.doctorservice.getdoctorsUpdateListener()
    .subscribe((doctors: Doctor[]) =>{
      this.doctors = doctors;
    });

    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("dAscheduleId")) {
        this.mode = "drA-edit";
        this.dAscheduleId = paramMap.get('dAscheduleId');
        this.DAService.getSchedules(this.dAscheduleId).subscribe(DrscheduleData => {
          this.Drschedule = {
            id: DrscheduleData._id,
            drname: DrscheduleData.drname,
            hospital: DrscheduleData.hospital,
            amount: DrscheduleData.amount,
            date: DrscheduleData.date,
            time: DrscheduleData.time,
          };
        });
      } else {
        this.mode = 'drA-add';
        this.dAscheduleId = null;
      }
    });
  }



  onSaveDrschedule(form: NgForm){
    if (form.invalid){
      return;
    }
    if (this.mode === 'drA-add'){
      this.DAService.addSchedule(form.value.drname, form.value.hospital, form.value.date, form.value.time, form.value.amount,);
    } else {
      this.DAService.updateSchedule(
        this.dAscheduleId,
        form.value.drname,
        form.value.hospital,
        form.value.date,
        form.value.time,
        form.value.amount,
      );
    }
    form.resetForm();
  }


}
