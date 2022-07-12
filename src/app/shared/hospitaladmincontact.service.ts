import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/toPromise';

import { Hospitaladmincontact } from './hospitaladmincontact.model';
import { HospitalAdminContactComponent } from '../Admin-Ui/hospital-admin-contact/hospital-admin-contact.component';


@Injectable()

export class HospitaladmincontactService {
  selectedHospitaladmincontact: Hospitaladmincontact;
  hospitaladmincontacts: Hospitaladmincontact[];
  readonly baseURL = 'http://localhost:3000/hospitaladmincontacts';

  

  constructor(private http : HttpClient) { }

  postHospitaladmincontact(hos : Hospitaladmincontact){
    return this.http.post(this.baseURL, hos);

  }

  getHospitaladmincontactList(){
    return this.http.get(this.baseURL);
  }


  putHospitaladmincontact(hos: Hospitaladmincontact){
    return this.http.put(this.baseURL + `/${hos._id}` , hos);
  }


  deleteHospitaladmincontact(_id: string){
    return this.http.delete(this.baseURL + `/${_id}`);
  }


}
