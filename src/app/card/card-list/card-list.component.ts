import {Component,OnDestroy,OnInit} from "@angular/core";
import { Post } from "../card.model";
import { cardService } from "../card.service";
import {Subscription} from 'rxjs';


@Component({
  selector:'app-card-list',
  templateUrl:'./card-list.component.html',
  styleUrls:['./card-list.component.css']
})

export class CardListComponent implements OnInit,OnDestroy{
 // posts=[
 //   {title:'first post',content:'this is first post content'},
 //   {title:'Second post',content:'this is second post content'},
 //  {title:'third post',content:'this is third post content'}
 // ];
 posts:Post[]=[];
 isLoading=false;
 searchText: any;
 private cardSub:Subscription = new Subscription;

 constructor(public cardService:cardService){}

 ngOnInit(){
   this.isLoading=true;
   this.cardService.gettingcard();
   this.cardSub =this.cardService.gettingcardUpdateListener()
   .subscribe((card:Post[]) => {
        this.isLoading=false;
        this.posts=card;
   });
 }

 cardDelete(cardId:string){
   this.cardService.deleteCard(cardId);
 }
 ngOnDestroy(){
   this.cardSub.unsubscribe();
 }

}
