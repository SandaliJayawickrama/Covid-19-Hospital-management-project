import { Injectable } from "@angular/core";
import { Post } from "./cash.model";
import {Subject} from 'rxjs';
import { HttpClient } from "@angular/common/http";
import {map} from 'rxjs/operators';
import {Router} from "@angular/router";


@Injectable({providedIn:'root'})
export class cashService{
  private cash:Post[]=[];
  private cashUpdated =new Subject<Post[]>();

  constructor(private http:HttpClient,private router:Router){}

  gettingcash(){
    this.http.get<{message:string,cash:any}>('http://localhost:3000/cash')
    .pipe(map((cashData)=>{
        return cashData.cash.map((cash:{
            _id:any;
            paymentID:any;
            name:any;
            bankName:any;
            branch:any;
            email:any;
            date:any;

        })=>{ return{
                paymentID:cash.paymentID,
                name:cash.name,
                bankName:cash.bankName,
                branch:cash.branch,
                email:cash.email,
                date:cash.date,
                id:cash._id
              };
        });
    }))
    .subscribe(transformedcash=>{
       this.cash=transformedcash;
       this.cashUpdated.next([...this.cash]);
    });

  }

  gettingcashUpdateListener(){
    return this.cashUpdated.asObservable();
  }

  getCash(id:string){
     return {...this.cash.find(p=>p.id===id)};
  }

  addcash(paymentID:string,name:string,bankName:string,branch:string,email:string,date:string){
    const cash: Post={id:null as any,paymentID:paymentID,name:name,bankName:bankName,branch:branch,email:email,date:date};

    this.http.post<{message:string, postId:string}>("http://localhost:3000/cash",cash)
      .subscribe((responseData:any)=>{
        const id=responseData;
        cash.id=id;
        this.cash.push(cash);

        this.cashUpdated.next([...this.cash]);
        this.router.navigate(["/clist"]);

      });



  }

  updatePost(id:string,paymentID:string,name:string,bankName:string,branch:string,email:string,date:string){
    const cash:Post={id:id,paymentID:paymentID,name:name,bankName:bankName,branch:branch,email:email,date:date};
    this.http.put("http://localhost:3000/cash/" + id,cash)
    .subscribe(response=>console.log(response));
    this.router.navigate(["/clist"]);
  }

  deleteCash(cashId : string){
    this.http.delete("http://localhost:3000/cash/" + cashId)
    .subscribe(()=>{
        const updatedCash= this.cash.filter(cash =>cash.id !==cashId);
        this.cash=updatedCash;
        this.cashUpdated.next([...this.cash]);
    });
  }
}
