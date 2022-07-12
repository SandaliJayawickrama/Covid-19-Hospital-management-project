import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

import { Confirmorder } from './confirmorder.model';

@Injectable({
  providedIn: 'root'
})
export class ConfirmorderService {
  selectedConfirmorder: Confirmorder;
    confirmorders: Confirmorder[];
    readonly baseURL = 'http://localhost:3000/confirmorders';

  constructor(private http : HttpClient) { }

  postConfirmorder(cord : Confirmorder){
    return this.http.post(this.baseURL, cord);

  }

  getConfirmorderList(){
    return this.http.get(this.baseURL);
  }

  putConfirmorder(cord: Confirmorder){
    return this.http.put(this.baseURL + `/${cord._id}`, cord);
  }

  deleteConfirmorder(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}

