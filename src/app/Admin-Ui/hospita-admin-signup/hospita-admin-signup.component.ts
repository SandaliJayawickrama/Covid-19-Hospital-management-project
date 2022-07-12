import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/manage-user/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hospita-admin-signup',
  templateUrl: './hospita-admin-signup.component.html',
  styleUrls: ['./hospita-admin-signup.component.css']
})
export class HospitaAdminSignupComponent implements OnInit {

  isLoading = false;

  constructor(public router:Router , public adminService: AdminService, private toastr:ToastrService) { }

  ngOnInit(): void {
  }


  showToast(){
    this.toastr.success("Signup Success")
  }
  showToast2(){
    this.toastr.error("error!")
  }

  onSignup(form: NgForm){

    if(form.invalid){
      this.showToast2();
      return;
    }
    this.adminService.createAdmin(form.value.email, form.value.password);
    this.showToast();
    this.router.navigate(['/hospital-admin-contact']);
  }

}

