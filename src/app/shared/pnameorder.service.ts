import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

import { Pnameorder } from './pnameorder.model';


@Injectable({
  providedIn: 'root'
})
export class PnameorderService {

  selectedPnameorder: Pnameorder;
  pnameorders: Pnameorder[];
  readonly baseURL = 'http://localhost:3000/pnameorders';

  constructor(private http : HttpClient) { }


  postPnameorder(pn : Pnameorder){
    return this.http.post(this.baseURL, pn);

  }

  getPnameorderList(){
    return this.http.get(this.baseURL);
  }

  putPnameorder(pn: Pnameorder){
    return this.http.put(this.baseURL + `/${pn._id}`, pn);
  }

  deletePnameorder(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }



}
