import { Component,  OnDestroy,  OnInit } from '@angular/core';
import {Patient} from '../patient.model'
import { PostService } from '../patient.service';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-infected-list',
  templateUrl: './infected-list.component.html',
  styleUrls: ['./infected-list.component.css']
})
export class InfectedListComponent implements OnInit,OnDestroy {

 searchpatient: any;
  isLoading=false;
 posts:Patient[]=[];
   private postSub: Subscription = new Subscription;
 constructor(public postService:PostService,private toastr: ToastrService){}

  ngOnInit(){
    this.isLoading=true;
    this.postService.getPost();
    this.postSub=this.postService.getPostUpdateListener()
    .subscribe((posts:Patient[])=>{
      this.isLoading=false;
      this.posts=posts});
  }

  showToatrdelete() {
    this.toastr.success('Deleted Successfully');
  }

  onDelete(postid :string){

    this.postService.deletePost(postid);
    this.showToatrdelete();
  };
ngOnDestroy(){
  this.postSub.unsubscribe();
}
}
