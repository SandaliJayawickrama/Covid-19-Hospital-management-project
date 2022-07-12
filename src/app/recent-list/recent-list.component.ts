import { Component, OnInit,OnDestroy } from '@angular/core';
import {Associates} from '../patient.model'
import { AssociatesService } from '../patient.service';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-recent-list',
  templateUrl: './recent-list.component.html',
  styleUrls: ['./recent-list.component.css']
})
export class RecentListComponent implements OnInit {
 searchrecent:any
isLoading=false;
Associates:Associates[]=[];
  private AssociatesSub: Subscription = new Subscription;
constructor(public AssociatesService:AssociatesService,private toastr: ToastrService){}

 ngOnInit() {
  this.isLoading=true;
   this.AssociatesService.getAssociates();
   this.AssociatesSub=this.AssociatesService.getAssociatesUpdateListener()
   .subscribe((Associates:Associates[])=>{
    this.isLoading=false;
    this.Associates=Associates});
 };
 showToatrdelete() {
  this.toastr.success('Deleted Successfully');
}
 ondelete(detailid:string){
   this.AssociatesService.deleteAssociates(detailid);
   this,this.showToatrdelete();
 };
   ngOnDestroy(){
   this.AssociatesSub.unsubscribe();
}
}
