import { Injectable } from "@angular/core";
import { Post } from "./card.model";
import {Subject} from 'rxjs';
import { HttpClient } from "@angular/common/http";
import {map} from 'rxjs/operators';
import {Router} from "@angular/router";


@Injectable({providedIn:'root'})
export class cardService{
  private card:Post[]=[];
  private cardUpdated =new Subject<Post[]>();

  constructor(private http:HttpClient,private router:Router){}

  gettingcard(){
    this.http.get<{message:string,card:any}>('http://localhost:3000/api/card')
    .pipe(map((cardData)=>{
        return cardData.card.map((card:{
            _id:any;
            paymentID:any;
            number:any;
            name:any;
            edate:any;
            cvc:any;
            date:any;

        })=>{ return{
                paymentID:card.paymentID,
                number:card.number,
                name:card.name,
                edate:card.edate,
                cvc:card.cvc,
                date:card.date,
                id:card._id
              };
        });
    }))
    .subscribe(transformedcard=>{
       this.card=transformedcard;
       this.cardUpdated.next([...this.card]);
    });

  }

  gettingcardUpdateListener(){
    return this.cardUpdated.asObservable();
  }

  getCard(id:string){
     return {...this.card.find(p=>p.id===id)};
  }

  addcard(paymentID:string,number:string,name:string,edate:string,cvc:string,date:string){
    const card: Post={id:null as any,paymentID:paymentID,number:number,name:name,edate:edate,cvc:cvc,date:date};

    this.http.post<{message:string, postId:string}>("http://localhost:3000/api/card",card)
      .subscribe((responseData:any)=>{
        const id=responseData;
        card.id=id;
        this.card.push(card);

        this.cardUpdated.next([...this.card]);
        this.router.navigate(["/list"]);

      });



  }

  updatePost(id:string,paymentID:string,number:string,name:string,edate:string,cvc:string,date:string){
    const card:Post={id:id,paymentID:paymentID,number:number,name:name,edate:edate,cvc:cvc,date:date};
    this.http.put("http://localhost:3000/api/card/" + id,card)
    .subscribe(response=>console.log(response));
    this.router.navigate(["/list"]);
  }

  deleteCard(cardId : string){
    this.http.delete("http://localhost:3000/api/card/" + cardId)
    .subscribe(()=>{
        const updatedCard= this.card.filter(card =>card.id !==cardId);
        this.card=updatedCard;
        this.cardUpdated.next([...this.card]);
    });
  }
}
