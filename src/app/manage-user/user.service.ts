import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
//import  'rxjs/add/operator/map';
//import 'rxjs/add/operator/toPromise'; 

import { User } from './user-model';


@Injectable()

export class UserService {
  selectedUser: User;
  users: User[];
  readonly baseURL = 'http://localhost:3000/api/user/';

  constructor(private http: HttpClient) { }

  getUserList() {
       return this.http.get(this.baseURL);
  }

  deleteUser(_id: string){
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}
