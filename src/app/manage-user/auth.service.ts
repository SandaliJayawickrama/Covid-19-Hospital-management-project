import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';




import { AuthData } from './auth-data-model';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string;
  private isAuthonticated = false;

constructor(private http: HttpClient) { }

getToken(){
  return this.token;
}


getIsAuth(){
  return this.isAuthonticated;
}

  createUser(fullname: string, email:string, phone:string, password:string, dob:string, nic:string, address1:string, address2:string, province:string, gender:string){
    const AuthData: AuthData = {fullname: fullname, email: email, phone: phone, password: password, dob: dob, nic:nic, address1: address1, address2: address2, province: province, gender: gender }
    this.http.post("http://localhost:3000/api/user/signup" ,AuthData)
    .subscribe(Response =>{
      console.log(Response);
    });
  }


  getallUser(fullname: string, email:string, phone:string, password:string, dob:string, nic:string, address1:string, address2:string, province:string, gender:string){
    const AuthData: AuthData = {fullname: fullname, email: email, phone: phone, password: password, dob: dob, nic:nic, address1: address1, address2: address2, province: province, gender: gender }
    this.http.post("http://localhost:3000/api/user/all" ,AuthData)
    .subscribe(Response =>{
      console.log(Response);
    });
  }


  
  login(fullname: string, email:string, phone:string, password:string, dob:string, nic:string, address1:string, address2:string, province:string, gender:string){
    const AuthData: AuthData = { fullname: fullname, email: email, phone: phone, password: password, dob: dob, nic:nic, address1: address1, address2: address2, province: province, gender: gender }
    this.http.post<{token: string}>("http://localhost:3000/api/user/login", AuthData)
    .subscribe(response => {
      console.log(response);
      const token = response.token;
      this.token = token;
      if(token){
        this.isAuthonticated = true;
        
      }
     //console.log(this.isAuthonticated);
      return token;
    });
  }


}
