import { Component } from "@angular/core";
import { OnInit, OnDestroy } from "@angular/core";
import { LabService } from "../services/lab.service";
import { Subscription } from "rxjs";
import { bookingDetails } from "../../shared/bookingDetails.model";
@Component({
  selector: 'get-pcr',
  templateUrl: './get-pcr.component.html',
  styleUrls: ['./get-pcr.component.css']
})

export class getPcrComponent implements OnInit, OnDestroy{

  isLoading=false;
  private bookingsSub:Subscription=new Subscription;
  bookingDetails:bookingDetails[]=[];

  constructor(public labsService:LabService){

  }
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
