import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ReportorderService } from 'src/app/shared/reportorder.service';

import {Confirmorder } from 'src/app/shared/confirmorder.model';
import { ConfirmorderService } from 'src/app/shared/confirmorder.service';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-order-report-body-component',
  templateUrl: './order-report-body-component.component.html',
  styleUrls: ['./order-report-body-component.component.css'],
  providers: [ConfirmorderService]
})
export class OrderReportBodyComponentComponent implements OnInit {
  searchText!: string;



  constructor(public reportorderService: ReportorderService, public confirmorderService: ConfirmorderService) { }

  ngOnInit(){
    this.refreshConfirmorderList();
  }


  refreshConfirmorderList(){
    this.confirmorderService.getConfirmorderList().subscribe((res) => {
       this.confirmorderService.confirmorders = res as Confirmorder[];
    });
  }


  download() {
    var element = document.getElementById('table')

    html2canvas(element).then((canvas) => {
      console.log(canvas);

      var imgData = canvas.toDataURL('image/png');

      var doc = new jspdf();

      var imgHeight = canvas.height * 208 / canvas.width;

      doc.addImage(imgData,0,0,208,imgHeight);

      doc.save("Order Report.pdf");
      window.location.reload();
    })
  }




}
