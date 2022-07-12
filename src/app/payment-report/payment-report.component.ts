import { Component, OnInit } from '@angular/core';
import jspdf from 'jspdf'
import html2canvas from 'html2canvas'
import { Subscription } from 'rxjs';
import { Post } from '../cash/cash.model';
import { cashService } from '../cash/cash.service';

@Component({
  selector: 'app-payment-report',
  templateUrl: './payment-report.component.html',
  styleUrls: ['./payment-report.component.css']
})
export class PaymentReportComponent implements OnInit {

posts:Post[]=[];

 private cashSub:Subscription = new Subscription;

 constructor(public cashService:cashService){}


 ngOnInit(){

  this.cashService.gettingcash();
  this.cashSub =this.cashService.gettingcashUpdateListener()
  .subscribe((cash:Post[]) => {

       this.posts=cash;
  });
}

  downloadSLIIP(){
    var element=document.getElementById('table')!

    html2canvas(element).then((canvas)=>{
       var imgData=canvas.toDataURL('image/png')

       var doc=new jspdf()
       var imgHeight=canvas.height*208/canvas.width;
       doc.addImage(imgData,0,0,208,imgHeight)
       doc.save("paymentSLIP.pdf")
    })
  }
}

