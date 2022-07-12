import { core } from "@angular/compiler";
import { Component, OnInit, OnDestroy, Input } from "@angular/core";
import { Subscription } from "rxjs";
import { LabService } from "../services/lab.service";
import { Lab } from "../../shared/lab.model";
import { bookingDetails } from "../../shared/bookingDetails.model";
import { MatDatepickerInput, MatDatepickerInputEvent } from "@angular/material/datepicker";
import { DatePipe } from "@angular/common";
@Component({
  selector:'progress-page',
  templateUrl:'./Track-Progress.component.html',
  styleUrls:['./Track-Progress.component.css']

})

export class trackProgressComponent implements OnInit, OnDestroy{

  isLoading=false;
  selected:String[]=[];
  event:String[]=[];

  bookingDetails:bookingDetails[]=[];
  labs:Lab[]=[];
  private labsSub:Subscription=new Subscription;
  private bookingsSub:Subscription=new Subscription;
  constructor(public labsService:LabService){}
  ngOnInit(){


    this.isLoading=true;
    this.labsService.getBookings();

    this.bookingsSub=this.labsService.getBookingsUpdateListener()
    .subscribe((bookings:bookingDetails[])=>{
      this.isLoading=false;
      this.bookingDetails=bookings;

    });
  }
  ngOnDestroy(){

    this.bookingsSub.unsubscribe;

  }


}
