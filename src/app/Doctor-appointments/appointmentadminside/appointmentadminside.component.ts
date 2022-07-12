import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/shared/appointment.service';//for service class
import { NgForm } from '@angular/forms';
import { Appointment } from 'src/app/shared/appointment.model';//for model class
import { Subscription } from 'rxjs';
import jspdf from 'jspdf';//for download pdf
import html2canvas from 'html2canvas';//for download pdf

import { Drappointment } from '../drappointment.model';
import { DrappointmentService } from '../drappointment.service';
declare var M:any;
@Component({
  selector: 'app-appointmentadminside',
  templateUrl: './appointmentadminside.component.html',
  styleUrls: ['./appointmentadminside.component.css']
  ,providers:[AppointmentService]
})
export class AppointmentadminsideComponent implements OnInit {
  DAschedule: Drappointment[] =[];//to display doctor details
  private DAscheduleSub: Subscription = new Subscription;
  searchText: string;//for search


  constructor(public appointmenService: AppointmentService,public drappointmentService: DrappointmentService) { }

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
      M.toast({html: 'Saved Succesfully',classes:'rounded'});
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
  onDelete(_id: string){//delete by national id
    if(confirm('Do u want to delete this resrvation?')==true){
        this.appointmenService.deleteRes(_id).subscribe((res)=>{
          this.refreshappointmentList();
          alert("Reservation Deleted");
        });
    }
  }
  onDatedel(date: string){//delete by date id onDatedel
    if(confirm('Do u want to delete all reservations on this date')==true){
        this.appointmenService.deleteDate(date).subscribe((res)=>{
          this.refreshappointmentList();
          alert("Reservation Deleted");
        });
    }
  }
  onDelid(_id: string){//delete by object id
    if(confirm('Do u want to delete this resrvation?')==true){
        this.appointmenService.deleteAid(_id).subscribe((res)=>{
          this.refreshappointmentList();
          alert("Reservation Deleted");
        });
    }
  }

  downloaddetails(){// for report download admin side
    var element=document.getElementById('customers')
    html2canvas(element).then((canvas)=>{
      var imgdata=canvas.toDataURL('report/png')
      var doc=new jspdf()
      var imgHeight=canvas.height*208/canvas.width;
      doc.addImage(imgdata,0,0,208,imgHeight)
      doc.save("report.pdf")
    })
  }


}
