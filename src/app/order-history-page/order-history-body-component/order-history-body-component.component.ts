import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Confirmorder } from 'src/app/shared/confirmorder.model';
import { ConfirmorderService } from 'src/app/shared/confirmorder.service';

declare var M: any;

@Component({
  selector: 'app-order-history-body-component',
  templateUrl: './order-history-body-component.component.html',
  styleUrls: ['./order-history-body-component.component.css'],
  providers: [ConfirmorderService]
})
export class OrderHistoryBodyComponentComponent implements OnInit {

  constructor(public confirmorderService: ConfirmorderService) { }

  enteredValue = '';
  newPost = '';
  onAddPost(){

       this.newPost =  this.enteredValue;
  };



  ngOnInit(){
    this.resetForm();
    this.refreshConfirmorderList();
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
  this.confirmorderService.postConfirmorder(form.value).subscribe((res) => {
    this.resetForm(form);
    M.toast({ html: 'Saved successfully', classes: 'rounded' });
  });
}

refreshConfirmorderList(){
  this.confirmorderService.getConfirmorderList().subscribe((res) => {
     this.confirmorderService.confirmorders = res as Confirmorder[];
  });
}

onEdit(cord : Confirmorder){
          this.confirmorderService.selectedConfirmorder = cord;
}


}
