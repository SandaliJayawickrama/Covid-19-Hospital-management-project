import {Component,OnDestroy,OnInit} from "@angular/core";
import { Post } from "../cash.model";
import { cashService } from "../cash.service";
import {Subscription} from 'rxjs';


@Component({
  selector:'app-cash-list',
  templateUrl:'./cash-list.component.html',
  styleUrls:['./cash-list.component.css']
})

export class CashListComponent implements OnInit,OnDestroy{
 // posts=[
 //   {title:'first post',content:'this is first post content'},
 //   {title:'Second post',content:'this is second post content'},
 //  {title:'third post',content:'this is third post content'}
 // ];
 posts:Post[]=[];
 isLoading=false;
 searchText: any;
 private cashSub:Subscription = new Subscription;

 constructor(public cashService:cashService){}

 ngOnInit(){
   this.isLoading=true;
   this.cashService.gettingcash();
   this.cashSub =this.cashService.gettingcashUpdateListener()
   .subscribe((cash:Post[]) => {
        this.isLoading=false;
        this.posts=cash;
   });
 }

 cashDelete(cashId:string){
   this.cashService.deleteCash(cashId);
 }
 ngOnDestroy(){
   this.cashSub.unsubscribe();
 }

}
