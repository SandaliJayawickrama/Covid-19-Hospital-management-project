import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { map } from 'rxjs/operators';

import { Vaccination } from "./vaccination.model";

@Injectable({providedIn:'root'})
export class VaccinationService {
  private Vschedule: Vaccination[] = [];
  private VscheduleUpdated = new Subject<Vaccination[]>();

  constructor(private http: HttpClient) {}

  getSchedule(){
    this.http
      .get<{message: string; Vschedule: any }>(
        'http://localhost:3000/api/Vschedule'
      )
      .pipe(map((VacscheduleData) => {
        return VacscheduleData.Vschedule.map((Vacschedule: any) => {
          return {
            vschedname: Vacschedule.vschedname,
            vname: Vacschedule.vname,
            dosage: Vacschedule.dosage,
            centerN: Vacschedule.centerN,
            centerA: Vacschedule.centerA,
            date: Vacschedule.date,
            time: Vacschedule.time,
            vcapacity: Vacschedule.vcapacity,
            age: Vacschedule.age,
            id: Vacschedule._id
          };
        });
      }))
      .subscribe(transformedSchedules => {
        this.Vschedule = transformedSchedules;
        this.VscheduleUpdated.next([...this.Vschedule]);
      });
  }

  getVscheduleUpdateListener(){
    return this.VscheduleUpdated.asObservable();
  }

  getSchedules(id: string){
    return this.http.get<{
      _id: string,
      vschedname: string,
      vname:string,
      dosage: string,
      centerN: string,
      centerA: string,
      date: string,
      time: string,
      vcapacity: number,
      age: string
    }>(
      "http://localhost:3000/api/Vschedule/" + id
      );
  }

  addSchedule(vschedname: string, vname: string, dosage: string, centerN: string, centerA: string, date: string, time: string, vcapacity: number, age: string){
    const Vacschedule: Vaccination = {
      id: null as any,
      vschedname: vschedname,
      vname: vname,
      dosage: dosage,
      centerN: centerN,
      centerA: centerA,
      date:date,
      time:time,
      vcapacity:vcapacity,
      age:age
    };
    this.http
    .post<{ message: string, vscheduleId: string }>("http://localhost:3000/api/Vschedule", Vacschedule)
    .subscribe(responseData => {
        const id = responseData.vscheduleId;
        Vacschedule.id = id;
        this.Vschedule.push(Vacschedule);
        this.VscheduleUpdated.next([...this.Vschedule]);
      });
  }


  updateSchedule(id: string, vschedname: string, vname: string, dosage: string, centerN: string, centerA: string, date: string, time: string, vcapacity: number, age: string){
    const Vacschedule: Vaccination = {
      id: id,
      vschedname: vschedname,
      vname: vname,
      dosage: dosage,
      centerN: centerN,
      centerA: centerA,
      date: date,
      time: time,
      vcapacity: vcapacity,
      age: age
    };
    this.http
    .put("http://localhost:3000/api/Vschedule/" + id, Vacschedule)
    .subscribe(response => {
      const updatedSchedules = [...this.Vschedule];
      const oldScheduleIndex = updatedSchedules.findIndex(s => s.id === Vacschedule.id);
      updatedSchedules[oldScheduleIndex] = Vacschedule;
      this.Vschedule = updatedSchedules;
     this.VscheduleUpdated.next([...this.Vschedule]);
    });
  }



  deleteSchedule(vscheduleId: string){
    this.http.delete("http://localhost:3000/api/Vschedule/" + vscheduleId)
    .subscribe(() => {
      const updatedSchedules = this.Vschedule.filter(Vacschedule => Vacschedule.id !== vscheduleId);
      this.Vschedule = updatedSchedules;
      this.VscheduleUpdated.next([...this.Vschedule]);
    });
  }


}
