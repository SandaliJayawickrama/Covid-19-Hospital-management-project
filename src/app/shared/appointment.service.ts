import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise'

import { Appointment } from './appointment.model';
@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  selectedAppointment: Appointment;
  appointment: Appointment[];
  readonly baseURL='http://localhost:3000/appointment/';

  constructor(private http:HttpClient) { }

  postAppointment(Ares: Appointment){//to post appointment via controller
    return this.http.post(this.baseURL, Ares);

  }
  getAppointmentList(){//get all apointments
    return this.http.get(this.baseURL);
  }
  getAppointment(nic: String){//get based on NIC
    return this.http.get(this.baseURL+ 'natid'+`/${nic}`);//nic
  }
  putRes(Ares:Appointment){
    return this.http.put(this.baseURL+ `/${Ares._id}`,Ares);
  }
  deleteRes(_id: String){//delete by national id
    return this.http.delete(this.baseURL+ `/${_id}`);//natid
  }
  deleteDate(date: String){//delete all in date
    return this.http.delete(this.baseURL+ 'dat'+`/${date}`);//date
  }
  deleteAid(aid: String){//delete on by deleteAid
    return this.http.delete(this.baseURL+ 'one'+`/${aid}`);//deleteAid
  }

}
