import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/shared/appointment.service';
import { FormGroup, NgForm } from '@angular/forms';
import { Appointment } from 'src/app/shared/appointment.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';//ro navigate

import { Drappointment } from '../drappointment.model';
import { DrappointmentService } from '../drappointment.service';


declare var M:any;
@Component({
  selector: 'app-dr-appointment',
  templateUrl: './dr-appointment.component.html',
  styleUrls: ['./dr-appointment.component.css'],
  providers:[AppointmentService]
})
export class DrAppointmentComponent implements OnInit {
  DAschedule: Drappointment[] =[];
  private DAscheduleSub: Subscription = new Subscription;
  appointment: FormGroup;

  constructor(public appointmenService: AppointmentService,public drappointmentService: DrappointmentService,private route:Router) { }

  ngOnInit(){
    this.resetForm();
    this.refreshappointmentList();
    this.drappointmentService.getSchedule();
    this.DAscheduleSub = this.drappointmentService.getDAscheduleUpdateListener()
    .subscribe((DAschedule: Drappointment[]) =>{
      this.DAschedule = DAschedule;
    });

  }
  resetForm(form?:NgForm){
    if(form)
    form.reset();
    this.appointmenService.selectedAppointment={
      _id:"",
      name:"",
      docname:"",
      email:"",
      contact:null//check
    }
  }
  onBook(form :NgForm){//for pass details to service
    if(form.value._id==""){
    this.appointmenService.postAppointment(form.value).subscribe((res)=>{
      this.resetForm(form);
      this.refreshappointmentList();
      alert("Reservation Made")
     /* M.toast({html: 'Saved Succesfully',classes:'rounded'});*/
     this.route.navigate(['/appointmenthomepage']);
    });
  }
  else{
    this.appointmenService.putRes(form.value).subscribe((res)=>{
      this.resetForm(form);
      this.refreshappointmentList();
      M.toast({html: 'Updated Succesfully',classes:'rounded'});
    });
    }
  }
  refreshappointmentList(){
    this.appointmenService.getAppointmentList().subscribe((res)=>{
      this.appointmenService.appointment=res as Appointment[];
    });
  }
  onEdit(Ares:Appointment){
    this.appointmenService.selectedAppointment=Ares;
  }
  onDelete(_id: string){
    if(confirm('Do u want to delete this resrvation?')==true){
        this.appointmenService.deleteRes(_id).subscribe((res)=>{
          this.refreshappointmentList();
          alert("Reservation Deleted");
        });
    }
  }



}
