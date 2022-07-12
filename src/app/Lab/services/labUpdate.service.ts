import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Lab} from "../../shared/lab.model";
import { Subject } from "rxjs";
import { bookingDetails } from "../../shared/bookingDetails.model";
import { DatePipe } from "@angular/common";
import { Router } from "@angular/router";
@Injectable({providedIn:'root'})


export class LabUpdateService{
  private bookDetails:bookingDetails[]=[];

  private bookingUpdated=new Subject<bookingDetails[]>();
  constructor(private http: HttpClient,  private datePipe: DatePipe, private router:Router){
  }



  updateBooking(progress:string, id:string, labName:String, labId:String, bookDate:Date, result:string, NIC:String, email:string ,image:File|string){

      let bData:bookingDetails|FormData|any;
      if(typeof image==='object'){
        bData=new FormData();
        bData.append("bookId", id);
        bData.append("progress", progress);
        bData.append("result", result);
        bData.append("progress", progress);
        bData.append("email", email);
        bData.append("image", image, id);
      }else{
        bData={bookId:id,
        labName:labName,
        labId:labId,
        bookDate:bookDate,
        result:result,
        progress:progress,
        NIC:NIC,
        imagePath:"",
        email:email
       }
      }
      this.http
      .put("http://localhost:3000/api/labbookings/"+id,bData )
      .subscribe((response)=>{
        const updatedBookings=[...this.bookDetails];
        const oldPostIndex=updatedBookings.findIndex(booking=>booking.bookId===id);
        const booking:bookingDetails={
          bookId: id,
          labName: labName,
          labId: labId,
          bookDate: bookDate,
          progress: progress,
          result: result,
          NIC: NIC,
          imagePath: "",
          email:email
        }
        updatedBookings[oldPostIndex]=booking;
        this.bookDetails=updatedBookings;
        this.bookingUpdated.next([...this.bookDetails]);
        console.log(response);
      });
    }
}
