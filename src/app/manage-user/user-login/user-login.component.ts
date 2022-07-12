import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';



declare var M: any;

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  isLoading = false;

  constructor(public authService: AuthService, private toastr:ToastrService, public router:Router) { }

  ngOnInit(): void {
  }



showToast2(){
  this.toastr.error('dose not match username or password!')
}

showToast1(){
  this.toastr.success('Login Success')
}
showToast3(){
  this.toastr.error('please enter credentials')
}



  Token = this.authService.getToken();
  IsAuth = this.authService.getIsAuth();

  onLogin(form: NgForm){
    if (form.invalid){
      this.showToast3();
      return;
    }
    else {
    this.authService.login(form.value.fullname, form.value.email, form.value.phone,
      form.value.password, form.value.dob, form.value.nic, form.value.address1, form.value.address2, form.value.province, form.value.gender);

     if(this.IsAuth){
     // this.showToast1();
      this.router.navigate(['/hospital-admin']);
      }
      if(this.Token){
      //  this.showToast1();
      }
      else {
     // this.showToast1();
      this.router.navigate(['/hospital-admin']);
      }
    }
    }


}
