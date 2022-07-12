import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
//import {ExportAsServise, ExportAsConfig} from 'ngx-export'

import { Doctor } from '../doctor.model';
import { DoctorService } from '../doctor.service';

import jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-doctor-report',
  templateUrl: './doctor-report.component.html',
  styleUrls: ['./doctor-report.component.css']
})
export class DoctorReportComponent implements OnInit {

  doctors: Doctor[] =[];
  private doctorsSub: Subscription = new Subscription;
  searchText: string;

  constructor(public doctorService: DoctorService) {}

  ngOnInit(): void {
    this.doctorService.getSchedule();
    this.doctorsSub = this.doctorService.getdoctorsUpdateListener()
    .subscribe((doctors: Doctor[]) =>{
      this.doctors = doctors;
    });
  }

  /*onDelete(doctorsId: string){
    this.doctorService.deleteSchedule(doctorsId);
  }*/

  ngOnDestroy(){
    this.doctorsSub.unsubscribe();
  }

  download(){
    var element = document.getElementById('doc-repo')
    html2canvas(element).then((canvas) => {
      console.log(canvas)

      var imgData = canvas.toDataURL('image/png')
      var doc = new jspdf()

      var imagHeight = canvas.height * 228 /canvas.width;

      doc.addImage(imgData, 0, 0, 228, imagHeight)
      doc.save("doctors.pdf")

    })
  }

}
