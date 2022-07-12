import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { from } from "rxjs";
import { Post } from "../card.model";
import { cardService } from "../card.service";


@Component({
  selector:'app-card-create',
  templateUrl:'./card-create.component.html',
  styleUrls:['./card-create.component.css']
})

export class CardCreateComponent implements OnInit {
  enteredID='';
  enteredNumber='';
  enteredName='';
  enteredEDate='';
  enteredCVC='';
  enteredDate='';
  isLoading=false;
  private mode='create';
  private cardId:any;
  card:any;


ngOnInit(){
  this.route.paramMap.subscribe((paramMap:ParamMap) => {
    if(paramMap.has('cardId')){
         this.mode='cardedit';
         this.cardId=paramMap.get('cardId');
         this.isLoading=true;
         this.card=this.cardService.getCard(this.cardId);
         this.isLoading=false;

    }else{
      this.mode='create';
      this.cardId=null;
    }
  });
}

constructor(public cardService:cardService,public route:ActivatedRoute){}


  onSavePost(form:NgForm){

     if(form.invalid){
       return;
     }
     this.isLoading=true;
     if(this.mode === 'create'){
      this.cardService.addcard(form.value.paymentID, form.value.number,
        form.value.name, form.value.edate, form.value.cvc, form.value.date);
     }
      else{
        this.cardService.updatePost(this.cardId,form.value.paymentID, form.value.number,
          form.value.name, form.value.edate, form.value.cvc, form.value.date);
      }

        form.resetForm();
  }
}
