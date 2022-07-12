import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Vaccination } from '../vaccination.model';
import { VaccinationService } from '../vaccination.service';


@Component({
  selector: 'app-vac-display',
  templateUrl: './vac-display.component.html',
  styleUrls: ['./vac-display.component.css']
})
export class VacDisplayComponent implements OnInit, OnDestroy {


Vschedule: Vaccination[] =[];
private VscheduleSub: Subscription = new Subscription;
searchText:string;

constructor(public vaccinationService: VaccinationService) {}

ngOnInit(): void {
  this.vaccinationService.getSchedule();
  this.VscheduleSub = this.vaccinationService.getVscheduleUpdateListener()
  .subscribe((Vschedule: Vaccination[]) =>{
    this.Vschedule = Vschedule;
  });
}

onDelete(vscheduleId: string){
  this.vaccinationService.deleteSchedule(vscheduleId);
}

ngOnDestroy(){
  this.VscheduleSub.unsubscribe();
}

}
