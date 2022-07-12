import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { from } from "rxjs";
import { Post } from "../cash.model";
import { cashService } from "../cash.service";

@Component({
  selector:'app-card-create',
  templateUrl:'./cash-create.component.html',
  styleUrls:['./cash-create.component.css']
})

export class CashCreateComponent implements OnInit {
  enteredID='';
  enteredName='';
  enteredBankName='';
  enteredBranch='';
  enteredEmail='';
  enteredDate='';
  isLoading=false;
  private mode='create';
  private cashId:any;
  cash:any;


ngOnInit(){
  this.route.paramMap.subscribe((paramMap:ParamMap) => {
    if(paramMap.has('cashId')){
         this.mode='edit';
         this.cashId=paramMap.get('cashId');
         this.isLoading=true;
         this.cash=this.cashService.getCash(this.cashId);
         this.isLoading=false;

    }else{
      this.mode='create';
      this.cashId=null;
    }
  });
}

constructor(public cashService:cashService,public route:ActivatedRoute){}


  onSavePost(form:NgForm){

     if(form.invalid){
       return;
     }
     this.isLoading=true;
     if(this.mode === 'create'){
      this.cashService.addcash(form.value.cpaymentID, form.value.cname,
        form.value.cbankName, form.value.cbranch, form.value.cemail, form.value.cdate);
     }
      else{
        this.cashService.updatePost(this.cashId,form.value.cpaymentID, form.value.cname,
          form.value.cbankName, form.value.cbranch, form.value.cemail, form.value.cdate);
      }

        form.resetForm();
  }
}
