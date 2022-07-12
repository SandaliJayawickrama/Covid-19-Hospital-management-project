import { Component, OnInit } from '@angular/core';
import { ResformService } from 'src/app/shared/resform.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Resform } from 'src/app/shared/resform.model';
import { Vaccination } from '../vaccination.model';//sadalis center details
import { VaccinationService } from '../vaccination.service';//sadalis center details
import { Subscription } from 'rxjs';//for sadalie center details


declare var M:any;
@Component({
  selector: 'app-vaccine-res',
  templateUrl: './vaccine-res.component.html',
  styleUrls: ['./vaccine-res.component.css'],
  providers:[ResformService]
})
export class VaccineResComponent implements OnInit {
Vschedule: Vaccination[] =[];
private VscheduleSub: Subscription = new Subscription;


  constructor(public resformService:ResformService,public vaccinationService: VaccinationService,private route:Router) { }

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
        this.route.navigate(['/vaccinehome']);


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

/*onDelete(_id: string,form: NgForm){
if(confirm('Do u want to delete this resrvation?')==true){
this.resformService.deleteRes(_id).subscribe((res)=>{
this.Listallreservation();
this.resetForm(form);
alert("Reservation Deleted");
});
}
}*/
/*for reserve button*/



}
