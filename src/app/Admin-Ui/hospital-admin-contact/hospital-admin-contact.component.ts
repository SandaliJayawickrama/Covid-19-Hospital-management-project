import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

import { Hospitaladmincontact } from 'src/app/shared/hospitaladmincontact.model';
import { HospitaladmincontactService } from 'src/app/shared/hospitaladmincontact.service';


declare var M: any;
 

@Component({
  selector: 'app-hospital-admin-contact',
  templateUrl: './hospital-admin-contact.component.html',
  styleUrls: ['./hospital-admin-contact.component.css'],
  providers: [HospitaladmincontactService]
})
export class HospitalAdminContactComponent implements OnInit {

  isLoading = false;

  constructor(public hospitaladmincontactService: HospitaladmincontactService, private toastr:ToastrService) { }

  ngOnInit() {
    this.resetForm();
    this.refreshHospitaladminlist();

    
  }

  showToatr1() {
    this.toastr.success('Saved Successfully!')
  }
  showToatr2() {
    this.toastr.success('Update Successfully!')
  }
  showToatr3() {
    this.toastr.success('Delete Successfully!')
  }

  resetForm(form?: NgForm){
    if (form)
    form.reset();

      this.hospitaladmincontactService.selectedHospitaladmincontact = {

      _id: "",
      name: "",
      hname: "",
      email: "",
      phone: "",

    }
  }

  

onSubmit(form : NgForm){
  if(form.value._id == "") {
    console.log(FormData);
      this.hospitaladmincontactService.postHospitaladmincontact(form.value).subscribe((res) =>{
        this.resetForm(form);
        this.refreshHospitaladminlist();
       this.showToatr1();
       
 });
}
    else {
      this.hospitaladmincontactService.putHospitaladmincontact(form.value).subscribe((res) =>{
        this.resetForm(form);
        this.refreshHospitaladminlist();
      this.showToatr2();
  });
 }
}



refreshHospitaladminlist() {
  this.hospitaladmincontactService.getHospitaladmincontactList().subscribe((res) => {
    this.hospitaladmincontactService.hospitaladmincontacts = res as Hospitaladmincontact[];
  });
}



onEdit(hos : Hospitaladmincontact){
  this.hospitaladmincontactService.selectedHospitaladmincontact = hos;
}



onDelete(_id: string, form: NgForm){
  if(confirm('Are you sure to delete this record?') == true ){
    this.hospitaladmincontactService.deleteHospitaladmincontact(_id).subscribe((res) => {
      this.refreshHospitaladminlist();
      this.resetForm(form);
      this.showToatr3();
    });
  }
}

 Search(){
   
 }

}
