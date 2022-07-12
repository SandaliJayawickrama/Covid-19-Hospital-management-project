import { Component, OnInit } from '@angular/core';
//import { NgForm } from '@angular/forms';
import { AdminService } from 'src/app/manage-user/admin.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-hospital-admin-login',
  templateUrl: './hospital-admin-login.component.html',
  styleUrls: ['./hospital-admin-login.component.css']
})
export class HospitalAdminLoginComponent implements OnInit {

  isLoading = false;  

  constructor(public adminService: AdminService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onLog(form: NgForm){
    if(form.invalid){
      return;
    }
    this.adminService.login(form.value.email, form.value.password);
    console.log(Response);
  }

  onSubmit(FormData: NgForm){
    console.log(FormData)
  }
}
