import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// import 'rxjs/add/operator/map';

import { Reservation } from './reservation.model';

@Injectable(
  // {providedIn: 'root'}
  )
export class ReservationService {
  selectedReservation!: Reservation;
  Reservations!: Reservation[];
  readonly baseURL = 'http://localhost:3000/reservations';

  constructor(private http : HttpClient) { }

  postReservation(res1 : Reservation){
    return this.http.post(this.baseURL, res1);
  }

  getReservationList() {
    return this.http.get(this.baseURL);
  }

  putReservation(res1: Reservation) {
    return this.http.put(this.baseURL + `/${res1._id}`, res1);
  }

  deleteReservation(_id: string){
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}
