import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ParamMap } from '@angular/router';
import { Vaccination } from '../vaccination.model';


import { VaccinationService} from '../vaccination.service';

@Component({
  selector: 'app-vac-add',
  templateUrl: './vac-add.component.html',
  styleUrls: ['./vac-add.component.css']
})
export class VacAddComponent implements OnInit {

  enteredSchedName = "";
  enteredVacName = "";
  enteredDosage = "";
  enteredCenterN = "";
  enteredCenterA = "";
  enteredDate = "";
  enteredTime = "";
  enteredVcapacity = "";
  enteredAge = "";
  Vacschedule: Vaccination;
  private mode = 'vac-add';
  private vscheduleId: string;


  constructor(public vacService: VaccinationService, public route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("vscheduleId")) {
        this.mode = "vac-edit";
        this.vscheduleId = paramMap.get('vscheduleId');
        this.vacService.getSchedules(this.vscheduleId).subscribe(VacscheduleData => {
          this.Vacschedule = {
            id: VacscheduleData._id,
            vschedname: VacscheduleData.vschedname,
            vname: VacscheduleData.vname,
            dosage: VacscheduleData.dosage,
            centerN: VacscheduleData.centerN,
            centerA: VacscheduleData.centerA,
            date: VacscheduleData.date,
            time: VacscheduleData.time,
            vcapacity: VacscheduleData.vcapacity,
            age: VacscheduleData.age
          };
        });
      } else {
        this.mode = 'vac-add';
        this.vscheduleId = null;
      }
    });
  }


  onSaveVacSchedule(form: NgForm){
    if (form.invalid){
      return;
    }
    if (this.mode === 'vac-add'){
      this.vacService.addSchedule(form.value.vschedname, form.value.vname, form.value.dosage, form.value.centerN, form.value.centerA, form.value.date, form.value.time, form.value.vcapacity, form.value.age);
    } else {
      this.vacService.updateSchedule(
        this.vscheduleId,
        form.value.vschedname,
        form.value.vname,
        form.value.dosage,
        form.value.centerN,
        form.value.centerA,
        form.value.date,
        form.value.time,
        form.value.vcapacity,
        form.value.age
      );
    }
    form.resetForm();
  }


}
