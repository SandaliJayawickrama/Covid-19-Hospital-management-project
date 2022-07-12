import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

import { Reportorder } from './reportorder.model';


@Injectable({
  providedIn: 'root'
})
export class ReportorderService {
  selectedReportorder: Reportorder;
  reportorders: Reportorder[];
  readonly baseURL = 'http://localhost:3000/reportorders';

  constructor(private http : HttpClient) { }


  postReportorder(ro : Reportorder){
    return this.http.post(this.baseURL, ro);

  }

  getReportorderList(){
    return this.http.get(this.baseURL);
  }

  putReportorder(ro: Reportorder){
    return this.http.put(this.baseURL + `/${ro._id}`, ro);
  }

  deleteReportorder(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}
