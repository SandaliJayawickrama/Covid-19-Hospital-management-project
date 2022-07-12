import { Component, OnInit } from '@angular/core';
import { Resform } from 'src/app/shared/resform.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ResformService } from 'src/app/shared/resform.service';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-viewreservations',
  templateUrl: './viewreservations.component.html',
  styleUrls: ['./viewreservations.component.css']
})
export class ViewreservationsComponent implements OnInit {
  searchText: string;//search

  constructor(public resformService:ResformService,private router: Router) { }

  ngOnInit(): void {
    this.Listallreservation();

  }
  Listallreservation(){
    this.resformService.getAppointmentDetails().subscribe((res)=>{
      this.resformService.resForm=res as Resform[];

    });
   }
  onDelete(_id: string){

    if(confirm('Do u want to delete this resrvation?')==true){
        this.resformService.deleteRes(_id).subscribe((res)=>{
          this.Listallreservation();
          alert("Reservation Deleted");
        });
    }
  }
  onUpdate(Vres:Resform){
    this.resformService.selectedResform=Vres;
  }
  downloaddetails(){// for report
    var element=document.getElementById('customers')
    html2canvas(element).then((canvas)=>{
      var imgdata=canvas.toDataURL('report/png')
      var doc=new jspdf()
      var imgHeight=canvas.height*208/canvas.width;
      doc.addImage(imgdata,0,0,208,imgHeight)
      doc.save("report.pdf")
    })
  }


}


