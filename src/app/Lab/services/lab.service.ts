import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import { Lab } from "../../shared/lab.model";
import { Subject } from "rxjs";
import { bookingDetails } from "../../shared/bookingDetails.model";
import { DatePipe } from "@angular/common";
import { Router } from "@angular/router";
@Injectable({providedIn:'root'})


export class LabService{

  private labs:Lab[]=[];
  private bookDetails:bookingDetails[]=[];

  private bookingUpdated=new Subject<bookingDetails[]>();
  private labsUpdated=new Subject<Lab[]>();

  constructor(private http: HttpClient,  private datePipe: DatePipe, private router:Router){
  }

  getLabs(){
    this.http
    .get<{ id:null, message:string,labs:any}>(

      "http://localhost:3000/api/labs"
    )
    .pipe(map((labData)=>{
      return labData.labs.map((lab:any)=>{
        return{
          Id:lab._id,
          Name:lab.Name,
          Address:lab.Address
        };
      });
    }))
    .subscribe((transformedLabs)=>{

      this.labs=transformedLabs;
      this.labsUpdated.next([...this.labs]);
      });
  }

  getBookings(){

    this.http
     .get<{id:null, message:String, bookingDetails:any}>(
       "http://localhost:3000/api/labbookings"
     ).pipe(map((bookData)=>{
       return bookData.bookingDetails.map((bookingDetail:any)=>{
         return{
          bookId:bookingDetail._id,
          labName:bookingDetail.labName,
          labId:bookingDetail.labId,
          bookDate:this.datePipe.transform(bookingDetail.bookDate, "yyyy-MM-dd"),
          progress:bookingDetail.progress,
          result:bookingDetail.result,
          NIC:bookingDetail.nIC,
          imagePath:bookingDetail.imagePath,
          email:bookingDetail.email
         };
       });
     })).subscribe((transformedBookings)=>{

       this.bookDetails=transformedBookings;
       this.bookingUpdated.next([...this.bookDetails]);
     })
  }

  getLabsUpdateListener(){

    return this.labsUpdated.asObservable();
  }
  getBookingsUpdateListener(){

    return this.bookingUpdated.asObservable();
  }

  onBook(LaboratoryId:any, LaboratoryName:any, Date:any, nic:String, eMail:string){


    const bookDetail:bookingDetails={

      bookId:'',
      progress:'Results not added',
      labName:LaboratoryName,
      labId:LaboratoryId,
      bookDate:Date,
      result:'Not added',
      NIC:nic,
      imagePath:"",
      email:eMail

    };
    this.http.post<{message:String, bookId:string}>('http://localhost:3000/api/labbookings', bookDetail)
    .subscribe((responseData)=>{

      const id=responseData.bookId;
      bookDetail.bookId=id;
      this.bookDetails.push(bookDetail);
      this.bookingUpdated.next([...this.bookDetails]);

    });

  }

  UpdateProgress(progress:string, id:string, labName:String, labId:String, bookDate:Date, result:string, NIC:String,
    image:File|string){

      let bData:bookingDetails;{
        bData={bookId:id,
        labName:labName,
        labId:labId,
        bookDate:bookDate,
        result:result,
        progress:progress,
        NIC:NIC,
        imagePath:"",
        email:""
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
          email:""
        }
        updatedBookings[oldPostIndex]=booking;
        this.bookDetails=updatedBookings;
        this.bookingUpdated.next([...this.bookDetails]);
        console.log(response);
      });

  }

  deleteBooking(id:string){
    this.http
    .delete("http://localhost:3000/api/labbookings/"+id)
    .subscribe(()=>{
      const updatedBookings=this.bookDetails.filter(bookDetail=>bookDetail.bookId!==id);
      this.bookDetails=updatedBookings;
      this.bookingUpdated.next([...this.bookDetails]);
    })
  }

  // UpdateResult(id:String, labName:String, labId:String, bookDate:Date, result:String, NIC:String){

  //   const BookingDetails:bookingDetails={
  //     bookId:id,
  //     labName:labName,
  //     labId:labId,
  //     bookDate:bookDate,
  //     result:result,
  //     progress:'',
  //     NIC:NIC}

  //     this.http
  //     .put("http://localhost:3000/api/labbookings/"+id,BookingDetails )
  //     .subscribe(response=>console.log(response));
  // }

}
