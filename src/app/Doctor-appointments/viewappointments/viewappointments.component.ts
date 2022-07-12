import { Component, OnInit } from '@angular/core';
import { Resform } from 'src/app/shared/resform.model';
import { NgForm } from '@angular/forms';
import { AppointmentService } from 'src/app/shared/appointment.service';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { Appointment } from 'src/app/shared/appointment.model';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-viewappointments',
  templateUrl: './viewappointments.component.html',
  styleUrls: ['./viewappointments.component.css']
})
export class ViewappointmentsComponent implements OnInit {
  searchText: string;
  constructor(public appointmenService: AppointmentService,private route: ActivatedRoute) { }

  ngOnInit(){
      this.refreshappointmentList();
  }
  refreshappointmentList(){
    this.appointmenService.getAppointmentList().subscribe((res)=>{
      this.appointmenService.appointment=res as Appointment[];
    });
  }
  downloaddetails(){// for report
    var element=document.getElementById('customers')
    html2canvas(element).then((canvas)=>{
      var imgdata=canvas.toDataURL('report/png')
      var doc=new jspdf()
      var imgHeight=canvas.height*208/canvas.width;
      doc.addImage(imgdata,0,0,208,imgHeight)
      doc.save("report.pdf")
    })
  }
  onDelete(_id: string){//even thogh it says id its natid
    if(confirm('All reservations Made by this national ID will be deleted')==true){
     this.appointmenService.deleteRes(_id).subscribe((res)=>{
       if(res===true){
      //this.refreshappointmentList();
      alert("Reservation Deleted")
     }
     /* M.toast({html: 'Saved Succesfully',classes:'rounded'});*/
    });
    }else{alert("Reservation NOT Deleted")}
  }


}

