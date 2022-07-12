import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AdminData } from './admin-data-model';
import { EmailValidator } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private token: string;
  private isAuthonticated = false;

  constructor(private http: HttpClient) { }
  
  getToken(){
    return this.token;
  }
  
  getIsAuth(){
    return this.isAuthonticated;
  }

  createAdmin(email: string, password: string){
    const AdminData: AdminData = {email: email, password: password}
    this.http.post("http://localhost:3000/api/hadmin/hospital-admin-signup" ,AdminData)
    .subscribe(Response => {
      console.log(Response);
    });
  }

  login(email: string, password: string){
    const AdminData: AdminData = {email: email, password: password }
    this.http.post<{token: string}>("http://localhost:3000/api/hadmin/admin-login" , AdminData)
    .subscribe(Response => {
      console.log(Response);
      const token = Response.token;
      this.token = token;
      if(token){
        this.isAuthonticated = true;
      }
      return token;
    });
  }

}
