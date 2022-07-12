import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { map } from 'rxjs/operators';

import { Drappointment } from "./drappointment.model";

@Injectable({providedIn:'root'})
export class DrappointmentService {
  private DAschedule: Drappointment[] = [];
  private DAscheduleUpdated = new Subject<Drappointment[]>();

  constructor(private http: HttpClient) {}

  getSchedule(){
    this.http
      .get<{message: string; DAschedule: any }>(
        'http://localhost:3000/api/DAschedule'
      )
      .pipe(map((DrscheduleData) => {
        return DrscheduleData.DAschedule.map((Drschedule: any) => {
          return {
            drname: Drschedule.drname,
            hospital: Drschedule.hospital,
            date: Drschedule.date,
            time: Drschedule.time,
            amount: Drschedule.amount,
            id: Drschedule._id
          };
        });
      }))
      .subscribe(transformedSchedules => {
        this.DAschedule = transformedSchedules;
        this.DAscheduleUpdated.next([...this.DAschedule]);
      });
  }

  getDAscheduleUpdateListener(){
    return this.DAscheduleUpdated.asObservable();
  }

  getSchedules(id: string){
    return this.http.get<{
      _id: string,
      drname: string,
      hospital:string,
      date: string,
      time: string,
      amount: string,
    }>(
      "http://localhost:3000/api/DAschedule/" + id
      );
  }

  addSchedule(drname: string, hospital: string, date: string, time: string, amount: string){
    const Drschedule: Drappointment = {
      id: null as any,
      drname: drname,
      hospital: hospital,
      date:date,
      time:time,
      amount:amount,
    };
    this.http
    .post<{ message: string, dAscheduleId: string }>("http://localhost:3000/api/DAschedule", Drschedule)
    .subscribe(responseData => {
        const id = responseData.dAscheduleId;
        Drschedule.id = id;
        this.DAschedule.push(Drschedule);
        this.DAscheduleUpdated.next([...this.DAschedule]);
      });
  }


  updateSchedule(id: string, drname: string, hospital: string, date: string, time: string, amount: string){
    const Drschedule: Drappointment = {
      id: id,
      drname: drname,
      hospital: hospital,
      date: date,
      time: time,
      amount: amount,
    };
    this.http
    .put("http://localhost:3000/api/DAschedule/" + id, Drschedule)
    .subscribe(response => {
      const updatedSchedules = [...this.DAschedule];
      const oldScheduleIndex = updatedSchedules.findIndex(s => s.id === Drschedule.id);
      updatedSchedules[oldScheduleIndex] = Drschedule;
      this.DAschedule = updatedSchedules;
     this.DAscheduleUpdated.next([...this.DAschedule]);
    });
  }


  deleteSchedule(dAscheduleId: string){
    this.http.delete("http://localhost:3000/api/DAschedule/" + dAscheduleId)
    .subscribe(() => {
      const updatedSchedules = this.DAschedule.filter(Drschedule => Drschedule.id !== dAscheduleId);
      this.DAschedule = updatedSchedules;
      this.DAscheduleUpdated.next([...this.DAschedule]);
    });
  }


}
