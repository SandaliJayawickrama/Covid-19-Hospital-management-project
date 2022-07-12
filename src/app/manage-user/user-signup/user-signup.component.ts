import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr'; 
import { AuthService } from '../auth.service';

declare var M: any;

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {
  //toastr: any;

  constructor(public authService: AuthService,private toastr:ToastrService , private router:Router) { }

  isLoading = false;  

  ngOnInit(): void {
   
  }
  showToast1(){
    this.toastr.error("invalied!!!!")
  }
  showToast(){
    this.toastr.success("Registration Success")
  }

  onSignup(form: NgForm){
    if(form.invalid){
      this.router.navigate(['/user-signup']);
      this.showToast1();
      return;
    }
    this.authService.createUser(form.value.fullname, form.value.email, form.value.phone, 
      form.value.password, form.value.dob, form.value.nic, form.value.address1, form.value.address2, form.value.province, form.value.gender);
      this.router.navigate(['/user-login']);
      this.showToast();

    }

}
