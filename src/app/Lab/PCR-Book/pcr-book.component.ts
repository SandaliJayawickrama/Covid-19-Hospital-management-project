import { core } from "@angular/compiler";
import { Component, OnInit, OnDestroy, Input } from "@angular/core";
import { Subscription } from "rxjs";
import { LabService } from "../services/lab.service";
import { Lab } from "../../shared/lab.model";
import { bookingDetails } from "../../shared/bookingDetails.model";
import { MatDatepickerInput, MatDatepickerInputEvent } from "@angular/material/datepicker";
import { convertToParamMap } from "@angular/router";
import { DatePipe } from '@angular/common';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({

  selector:'pcr-book',
  templateUrl:'./pcr-book.component.html',
  styleUrls:['./pcr-book.component.css']
})

export class pcrBook implements OnInit, OnDestroy{
  form!:FormGroup;
  isLoading=false;

  minDate:Date | undefined;
  maxDate:Date|undefined;
  public error='';
  selected:String[]=[];
  event:String[]=[];

  bookingDetails:bookingDetails[]=[];
  labs:Lab[]=[];
  private labsSub:Subscription=new Subscription;
  private bookingsSub:Subscription=new Subscription;

  applicant: any;

  constructor(public labsService:LabService, private datePipe: DatePipe){


    const currentYear = new Date().getFullYear();
    const currentDate = new Date().getDate();
    const currentMonth = new Date().getMonth();
    this.minDate = new Date(currentYear - 0,currentMonth+0,currentDate+1);
    this.maxDate = new Date(currentYear + 1, -2, -10);

  }


ngOnInit(){
  this.form=new FormGroup({
    NIC:new FormControl(null, {
      validators:[Validators.required, Validators.minLength(12)]
    }),
    input:new FormControl(null, {
      validators:[Validators.required]
    }),
    email:new FormControl(null, {
      validators:[Validators.required]
    })
  });

  this.isLoading=true;
  this.labsService.getLabs();
  this.labsSub=this.labsService.getLabsUpdateListener()
      .subscribe((labs:Lab[])=>{
        this.isLoading=false;
        this.labs=labs;
      });



}
ngOnDestroy(){

  this.labsSub.unsubscribe;

}

events:String[]=[];

  addEvent( event: MatDatepickerInputEvent<Date>) {

    this.events.push(` ${event.value}`);


  }

onBook(LaboratoryId:String, LaboratoryName:String){
  if(this.form.invalid){
    return;
  }

  this.labsService.onBook(LaboratoryId, LaboratoryName, this.form.value.input, this.form.value.NIC, this.form.value.email );

  this.form.reset();


}



}
