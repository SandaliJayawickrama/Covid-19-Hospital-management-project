import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Pnameorder } from 'src/app/shared/pnameorder.model';
import { PnameorderService } from 'src/app/shared/pnameorder.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-pharmacy-admin-view-body-component',
  templateUrl: './pharmacy-admin-view-body-component.component.html',
  styleUrls: ['./pharmacy-admin-view-body-component.component.css'],
  providers: [PnameorderService]
})
export class PharmacyAdminViewBodyComponentComponent implements OnInit {
   searchText: string;

  constructor(public pnameorderService: PnameorderService,  private toastr: ToastrService) { }

  ngOnInit(){
    this.refreshConfirmorderList();
  }

  refreshConfirmorderList(){
    this.pnameorderService.getPnameorderList().subscribe((res) => {
       this.pnameorderService.pnameorders = res as Pnameorder[];
    });
  }

  showToatrdelete() {
    this.toastr.success('Deleted Successfully');
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

  onDelete(_id: string){
    if (confirm('Are You sure to delete this record ?') == true) {
         this.pnameorderService.deletePnameorder( _id ).subscribe((res) => {
           this.refreshConfirmorderList();

           this. showToatrdelete();
         });
    }
  }


}
