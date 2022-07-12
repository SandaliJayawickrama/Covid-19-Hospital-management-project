import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  isLoading = false;  

  showToast3(){
    this.toastr.error('please enter credentials')
  }
  showToast1(){
    this.toastr.success('Login Success')
  }

  constructor(public adminService: AdminService , private toastr:ToastrService, public router:Router) { }

  ngOnInit(): void {
  }
  Token = this.adminService.getToken();
  IsAuth = this.adminService.getIsAuth();

  onLogin(form: NgForm){
    if (form.invalid){
      this.showToast3();
      return;
    }
    this.adminService.login(form.value.email, form.value.password)
 
    if(this.IsAuth){
      this.router.navigate(['/']);
    }
    else {
      this.router.navigate(['/site-admin']);
      
    }
  }
}
