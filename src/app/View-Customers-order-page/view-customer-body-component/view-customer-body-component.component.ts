import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Confirmorder } from 'src/app/shared/confirmorder.model';
import { ConfirmorderService } from 'src/app/shared/confirmorder.service';
import { ToastrService } from 'ngx-toastr';
import { OrderConfirmBodyComponentComponent } from 'src/app/order-confirm-page/order-confirm-body-component/order-confirm-body-component.component';
import { Router } from '@angular/router';
import { EmailValidator, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-view-customer-body-component',
  templateUrl: './view-customer-body-component.component.html',
  styleUrls: ['./view-customer-body-component.component.css'],
  providers: [ConfirmorderService]

})
export class ViewCustomerBodyComponentComponent implements OnInit {
  drugname = new FormControl('', [Validators.required, Validators.required]);

  searchText: string;
  constructor(public confirmorderService: ConfirmorderService, private toastr: ToastrService, private router: Router) { }
  enteredValue = '';
  newPost = '';
  onAddPost(){

       this.newPost =  this.enteredValue;
  };



  ngOnInit(){
    this.resetForm();
    this.refreshConfirmorderList();
  }

  showToatrsave() {
    this.toastr.success('Saved Successfully');
  }

  showToatrupdate() {
    this.toastr.success('Updated Successfully');
  }

  showToatrdelete() {
    this.toastr.success('Deleted Successfully');
  }

  refreshConfirmorderList(){
    this.confirmorderService.getConfirmorderList().subscribe((res) => {
       this.confirmorderService.confirmorders = res as Confirmorder[];
    });
  }

  resetForm(form?: NgForm) {
    if (form)
       form.reset();

   this.confirmorderService.selectedConfirmorder = {
        _id: "",
        username: "",
        drugid: "",
        iname: "",
        itype: "",
        nitems: "",
        msg: "",



    }

}

onSubmit(form : NgForm){
  if(form.value._id == ""){
        this.confirmorderService.postConfirmorder(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshConfirmorderList();
        this.showToatrsave();
   });
  }
  else{
       this.confirmorderService.putConfirmorder(form.value).subscribe((res) => {
       this.resetForm(form);
       this.refreshConfirmorderList();
       this.showToatrupdate();
       window.location.reload();
    });
  }
}



onEdit(cord : Confirmorder){
  this.confirmorderService.selectedConfirmorder = cord;

}

onDelete(_id: string, form: NgForm){
  if (confirm('Are You sure to delete this record ?') == true) {
       this.confirmorderService.deleteConfirmorder( _id ).subscribe((res) => {
         this.refreshConfirmorderList();
         this.resetForm(form);
         this. showToatrdelete();
         window.location.reload();
       });
  }
}








}
