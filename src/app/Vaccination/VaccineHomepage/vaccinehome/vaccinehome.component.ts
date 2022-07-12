import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import{Vaccination} from 'src/app/Vaccination/vaccination.model'
import { VaccinationService } from '../../vaccination.service';


@Component({
  selector: 'app-vaccinehome',
  templateUrl: './vaccinehome.component.html',
  styleUrls: ['./vaccinehome.component.css']
})
export class VaccinehomeComponent implements OnInit {
  searchText: string;

  Vschedule: Vaccination[] =[];
  private VscheduleSub: Subscription = new Subscription;

  constructor(public vaccinationService: VaccinationService) { }

  ngOnInit(): void {
    this.vaccinationService.getSchedule();
    this.VscheduleSub = this.vaccinationService.getVscheduleUpdateListener()
    .subscribe((Vschedule: Vaccination[]) =>{
      this.Vschedule = Vschedule;
    });
  }

}
