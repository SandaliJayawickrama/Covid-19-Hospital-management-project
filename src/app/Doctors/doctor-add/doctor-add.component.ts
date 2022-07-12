import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { ActivatedRoute } from '@angular/router';
import { ParamMap } from '@angular/router';
import { Doctor } from '../doctor.model';

import { DoctorService} from '../doctor.service';


@Component({
  selector: 'app-doctor-add',
  templateUrl: './doctor-add.component.html',
  styleUrls: ['./doctor-add.component.css']
})
export class DoctorAddComponent implements OnInit {

  enteredDrName = "";
  enteredPhone = "";
  enteredAddress = "";
  enteredQualification = "";
  doctor: Doctor;
  private mode = 'doc-add';
  private doctorsId: string;

  constructor(public DAService: DoctorService, public route: ActivatedRoute, private toastr: ToastrService){}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("doctorsId")) {
        this.mode = "doc-edit";
        this.doctorsId = paramMap.get('doctorsId');
        this.DAService.getSchedules(this.doctorsId).subscribe(doctorData => {
          this.doctor = {
            id: doctorData._id,
            drname: doctorData.drname,
            phone: doctorData.phone,
            address: doctorData.address,
            quali: doctorData.quali,
          };
        });
      } else {
        this.mode = 'doc-add';
        this.doctorsId = null;
      }
    });

  }


  onSavedoctor(form: NgForm){
    if (form.invalid){
      return;
    }
    if (this.mode === 'doc-add'){
      this.DAService.addSchedule(form.value.drname, form.value.phone, form.value.address, form.value.quali);
      this.toastr.success('Succussfully added..');
    } else {
      this.DAService.updateSchedule(
        this.doctorsId,
        form.value.drname,
        form.value.phone,
        form.value.address,
        form.value.quali,
      );
    }
    form.resetForm();
  }


}
