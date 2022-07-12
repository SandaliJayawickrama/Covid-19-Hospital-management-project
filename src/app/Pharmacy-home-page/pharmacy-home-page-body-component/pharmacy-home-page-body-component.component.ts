import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Pnameorder } from 'src/app/shared/pnameorder.model';
import { PnameorderService } from 'src/app/shared/pnameorder.service';
import { PharmacyuiService } from 'src/app/shared/pharmacyui.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pharmacy-home-page-body-component',
  templateUrl: './pharmacy-home-page-body-component.component.html',
  styleUrls: ['./pharmacy-home-page-body-component.component.css'],
  providers: [PnameorderService]
})
export class PharmacyHomePageBodyComponentComponent implements OnInit {
  searchText: string;

  constructor(public pnameorderService: PnameorderService, private route: Router) { }



  ngOnInit(){

    this.refreshConfirmorderList();

  }


  refreshConfirmorderList(){
    this.pnameorderService.getPnameorderList().subscribe((res) => {
       this.pnameorderService.pnameorders = res as Pnameorder[];
    });
  }

  navToSecondComp(){
    this.route.navigate(['pharmacyUI'],{queryParams:{data:this.searchText}})
  }

}
