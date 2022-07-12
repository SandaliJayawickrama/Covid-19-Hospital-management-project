import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Resform } from './resform.model';

@Injectable({
  providedIn: 'root'
})
export class ResformService {
  selectedResform:Resform;//form for insert & update
  resForm:Resform[];//save all data from mongo db resform collect
  readonly baseURL='http://localhost:3000/resforms/';

  constructor(private http:HttpClient) { }

  reserveVaccine(Vres: Resform){//post method
    return this.http.post(this.baseURL, Vres);
  }
  getAppointmentDetails(){
    return this.http.get(this.baseURL);
     // return this.http.get(this.baseURL+'/${Vres._id}',Vres);
  }
  putRes(Vres:Resform){
    return this.http.put(this.baseURL+ `/${Vres._id}`,Vres);
  }

  deleteRes(_id: String){//delete by customer national id
    return this.http.delete(this.baseURL+ `/${_id}`);
  }
  delobj(date: String){//delete by customer object id een though it says date
    return this.http.delete(this.baseURL+'obj'+`/${date}`);
  }
  deldate(dat: String){//delete by customer by date
    return this.http.delete(this.baseURL+'dat'+`/${dat}`);
  }



  getres(vid:String){
    return this.http.get(this.baseURL+`/${vid}`);//to get data by id
  }
}
