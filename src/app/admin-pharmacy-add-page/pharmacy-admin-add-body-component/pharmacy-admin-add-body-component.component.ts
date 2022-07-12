import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Pnameorder } from 'src/app/shared/pnameorder.model';

import { PnameorderService } from 'src/app/shared/pnameorder.service';

@Component({
  selector: 'app-pharmacy-admin-add-body-component',
  templateUrl: './pharmacy-admin-add-body-component.component.html',
  styleUrls: ['./pharmacy-admin-add-body-component.component.css'],
  providers: [PnameorderService]
})
export class PharmacyAdminAddBodyComponentComponent implements OnInit {

  constructor(public pnameorderService: PnameorderService, private toastr: ToastrService) { }

  ngOnInit(){
    this.resetForm();
  }

  showToatrsave() {
    this.toastr.success('Saved Successfully');
  }


  refreshConfirmorderList(){
    this.pnameorderService.getPnameorderList().subscribe((res) => {
       this.pnameorderService.pnameorders = res as Pnameorder[];
    });
  }


  resetForm(form?: NgForm) {
    if (form)
       form.reset();

   this.pnameorderService.selectedPnameorder = {
        _id: "",
        pno: "",
        pname: "",
        location: "",
        cno: "",




    }

}

onSubmit(form : NgForm){
        this.pnameorderService.postPnameorder(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshConfirmorderList();
        this.showToatrsave();
   });


}


}
