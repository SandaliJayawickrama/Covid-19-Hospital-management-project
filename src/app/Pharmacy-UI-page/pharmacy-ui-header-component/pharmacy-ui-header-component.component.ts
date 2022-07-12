import { Component, OnInit } from '@angular/core';
import {Pnameorder } from 'src/app/shared/pnameorder.model';
import { PnameorderService } from 'src/app/shared/pnameorder.service';
import { PharmacyuiService } from 'src/app/shared/pharmacyui.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-pharmacy-ui-header-component',
  templateUrl: './pharmacy-ui-header-component.component.html',
  styleUrls: ['./pharmacy-ui-header-component.component.css'],
  providers: [PnameorderService]

})
export class PharmacyUIHeaderComponentComponent implements OnInit {


  constructor(public pnameorderService: PnameorderService, private route:ActivatedRoute) { }

  nametoDisplay:any;

  ngOnInit(): void {
          this.route.queryParams.subscribe((params:any)=>{
               console.log(params)
               this.nametoDisplay = params.data;

          })

  }



}
