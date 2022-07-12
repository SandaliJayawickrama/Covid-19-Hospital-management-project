import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { map } from 'rxjs/operators';

import { Doctor } from "./doctor.model";

@Injectable({providedIn:'root'})
export class DoctorService {
  private doctors: Doctor[] = [];
  private doctorsUpdated = new Subject<Doctor[]>();

  constructor(private http: HttpClient) {}

  getSchedule(){
    this.http
      .get<{message: string; doctors: any }>(
        'http://localhost:3000/api/doctors'
      )
      .pipe(map((doctorData) => {
        return doctorData.doctors.map((doctor: any) => {
          return {
            drname: doctor.drname,
            phone: doctor.phone,
            address: doctor.address,
            quali: doctor.quali,
            id: doctor._id
          };
        });
      }))
      .subscribe(transformedSchedules => {
        this.doctors = transformedSchedules;
        this.doctorsUpdated.next([...this.doctors]);
      });
  }

  getdoctorsUpdateListener(){
    return this.doctorsUpdated.asObservable();
  }

  getSchedules(id: string){
    return this.http.get<{
      _id: string,
      drname: string,
      phone:string,
      address: string,
      quali: string,
    }>(
      "http://localhost:3000/api/doctors/" + id
      );
  }

  addSchedule(drname: string, phone: string, address: string, quali: string){
    const doctor: Doctor = {
      id: null as any,
      drname: drname,
      phone: phone,
      address:address,
      quali:quali,
    };
    this.http
    .post<{ message: string, doctorsId: string }>("http://localhost:3000/api/doctors", doctor)
    .subscribe(responseData => {
        const id = responseData.doctorsId;
        doctor.id = id;
        this.doctors.push(doctor);
        this.doctorsUpdated.next([...this.doctors]);
      });
  }


  updateSchedule(id: string, drname: string, phone: string, address: string, quali: string){
    const doctor: Doctor = {
      id: id,
      drname: drname,
      phone: phone,
      address: address,
      quali: quali,
    };
    this.http
    .put("http://localhost:3000/api/doctors/" + id, doctor)
    .subscribe(response => {
      const updatedSchedules = [...this.doctors];
      const oldScheduleIndex = updatedSchedules.findIndex(s => s.id === doctor.id);
      updatedSchedules[oldScheduleIndex] = doctor;
      this.doctors = updatedSchedules;
     this.doctorsUpdated.next([...this.doctors]);
    });
  }


  deleteSchedule(doctorsId: string){
    this.http.delete("http://localhost:3000/api/doctors/" + doctorsId)
    .subscribe(() => {
      const updatedSchedules = this.doctors.filter(doctor => doctor.id !== doctorsId);
      this.doctors = updatedSchedules;
      this.doctorsUpdated.next([...this.doctors]);
    });
  }


}
