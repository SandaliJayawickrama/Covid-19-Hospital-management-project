import { Component, OnInit } from '@angular/core';
import { ResformService } from 'src/app/shared/resform.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Resform } from 'src/app/shared/resform.model';
import { Vaccination } from '../vaccination.model';//sadalis center details
import { VaccinationService } from '../vaccination.service';//sadalis center details
import { Subscription } from 'rxjs';//for sadalie center details
import jspdf from 'jspdf';//download report
import html2canvas from 'html2canvas';//download report

declare var M:any;
@Component({
  selector: 'app-reservationadminside',
  templateUrl: './reservationadminside.component.html',
  styleUrls: ['./reservationadminside.component.css'],
  providers:[ResformService]
})
export class ReservationadminsideComponent implements OnInit {
  searchText: string;//for search
  Vschedule: Vaccination[] =[];
  private VscheduleSub: Subscription = new Subscription;


    constructor(public resformService:ResformService,public vaccinationService: VaccinationService,private router: Router) { }

    ngOnInit(){
      this.resetForm();
      this.Listallreservation();
      this.vaccinationService.getSchedule();
      this.VscheduleSub = this.vaccinationService.getVscheduleUpdateListener()
      .subscribe((Vschedule: Vaccination[]) =>{
        this.Vschedule = Vschedule;
      });
    }
    resetForm(form?: NgForm) {
      if (form)
         form.reset();

     this.resformService.selectedResform = {
          _id: "",
          name:"",
          age:"",
          nationalid:"",
          city:"",
          street:"",
          houseno:"",
          code:"",
          date:"",
          email:"",
          phone:"",
          opt:"",
          time:""
      }

  }
  onReserve(form : NgForm){//add items to database
    if(form.value._id==""){

        this.resformService.reserveVaccine(form.value).subscribe((res) => {
          alert("Reservation Made");
    });
    }
  else{//update items to database
    this.resformService.putRes(form.value).subscribe((res) => {
      alert("Updated Succesfully");
      this.resetForm(form);
  });

  }
  this.Listallreservation();
  }
  Listallreservation(){
  this.resformService.getAppointmentDetails().subscribe((res)=>{
  this.resformService.resForm=res as Resform[];

  });
  }
  onUpdate(Vres:Resform){
  this.resformService.selectedResform=Vres;
  }
  onDelete(_id: string){//delete by nat id

    if(confirm('Do u want to delete this resrvation?')==true){
        this.resformService.deleteRes(_id).subscribe((res)=>{
          this.Listallreservation();
          alert("Reservation Deleted");
        });
    }
  }
  onDelone(obj: string){//delete by objectid
    if(confirm('Do u want to delete this resrvation?')==true){
        this.resformService.delobj(obj).subscribe((res)=>{
          this.Listallreservation();
          alert("Reservation Deleted");
        });
    }
  }
  onDatedel(date: string){//delete by objectid
    if(confirm('Do u want to delete this resrvation?')==true){
        this.resformService.deldate(date).subscribe((res)=>{
          this.Listallreservation();
          alert("Reservation Deleted");
        });
    }
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

  /*onDelete(_id: string,form: NgForm){
  if(confirm('Do u want to delete this resrvation?')==true){
  this.resformService.deleteRes(_id).subscribe((res)=>{
  this.Listallreservation();
  this.resetForm(form);
  alert("Reservation Deleted");
  });
  }
  }*/

}
