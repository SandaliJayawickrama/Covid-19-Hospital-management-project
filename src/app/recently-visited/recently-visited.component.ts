import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AssociatesService } from '../patient.service';

@Component({
  selector: 'app-recently-visited',
  templateUrl: './recently-visited.component.html',
  styleUrls: ['./recently-visited.component.css']
})
export class RecentlyVisitedComponent implements OnInit {

  isLoading=false;
private mode='detail';
private detailid:any;
detail:any;
  constructor(public AssociatesService:AssociatesService, public route:ActivatedRoute,private toastr: ToastrService){}
  ngOnInit() {

this.route.paramMap.subscribe((paramMap:ParamMap)=>{
  if(paramMap.has('detailid')){
    this.mode='update';
    this.detailid=paramMap.get('detailid');
    this.isLoading=true;
this.AssociatesService.getEditAssociates(this.detailid).subscribe(detailData=>{
  this.detail={id:detailData._id,
    recentName : detailData.recentName,
  recentContacts : detailData.recentContacts,
  recentPlaces : detailData.recentPlaces }
})
this.isLoading=false;
  }else{
    this.mode='detail';
    this.detailid=null;
  }
})

  }
  showToatrsave() {
    this.toastr.success('Saved Successfully');
  }
  showToatrupdate() {
    this.toastr.success('Updated Successfully');
  }

  onSaveDetail(form:NgForm){

    if(form.invalid){return;}

    this.isLoading=true;
if(this.mode==='detail'){
    this.AssociatesService.addAssociates(
      form.value.name1,
      form.value.contacts,
      form.value.places)
    this.showToatrsave();}
      else{
        this.AssociatesService.updateAssociates(
          this.detailid,
          form.value.name1,
          form.value.contacts,
          form.value.places
        )
        this.showToatrupdate();
      }
      form.reset();
      }




}
