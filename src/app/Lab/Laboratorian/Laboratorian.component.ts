import { core } from "@angular/compiler";
import { Component } from "@angular/core";
import { bookingDetails } from "../../shared/bookingDetails.model";
import { LabService } from "../services/lab.service";
import { Subscription } from "rxjs";
import { OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { MatRadioChange } from "@angular/material/radio";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { mimeType } from "./mime-type.validator";
import { LabUpdateService } from "../services/labUpdate.service";
@Component({
  selector:'Laboratorian',
  templateUrl:'./Laboratorian.component.html',
  styleUrls:['./Laboratorian.component.css']
})

export class Laboratorian implements OnInit, OnDestroy {
  form!:FormGroup;
  imagePreview:String|any;
  isLoading=false;
  bookingDetails:bookingDetails[]=[];
  private bookingsSub:Subscription=new Subscription;

  constructor(public labsService:LabService, private router:Router, public labsUpdateService:LabUpdateService){}


  ngOnInit(){

    this.form=new FormGroup({
      image:new FormControl(null, {
        validators:[Validators.required],
        asyncValidators:[mimeType]
      })
    })

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

  onImagePicked(event:Event){
    const file=(event.target as HTMLInputElement).files![0];

    this.form.patchValue({image:file});
    this.form.get('image')?.updateValueAndValidity();

    const reader=new FileReader();

    reader.onload=()=>{
      this.imagePreview=reader.result;
    };

    reader.readAsDataURL(file);
    console.log(file);
    console.log(this.form);
  }

  onUpdateBooking(progress:string, bookId:string, labName:String, labId:String, bookDate:Date, result:string, NIC:String, email:string){
    if(this.form.invalid){
      return;
    }
    progress="Successful";

    this.labsUpdateService.updateBooking(progress, bookId, labName, labId, bookDate, result, NIC,  email, this.form.value.image);

  }

  updateProgress(progress:string, bookId:string, labName:String, labId:String, bookDate:Date, result:string, NIC:String){


    this.labsService.UpdateProgress(progress, bookId, labName, labId, bookDate, result, NIC, this.form.value.image);

  }

  onDelete(bookId:string){
    this.labsService.deleteBooking(bookId);
  }

  // updateResult(bookId:String, labName:String, labId:String, bookDate:Date, result:String, NIC:String){

  //   this.labsService.UpdateResult(bookId, labName, labId, bookDate, result, NIC);
  // }
}
