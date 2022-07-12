import { Component, OnInit,} from '@angular/core';
import { NgForm,Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ToastrService } from 'ngx-toastr';



import { PostService } from '../patient.service';
@Component({
  selector: 'app-infected',
  templateUrl: './infected.component.html',
  styleUrls: ['./infected.component.css']
})
export class InfectedComponent implements OnInit {

isLoading=false;
private mode='create';
private postid:any;
post :any;

  constructor(public postService:PostService ,public route:ActivatedRoute,private toastr: ToastrService){}
  ngOnInit(){

this.route.paramMap.subscribe((paramMap:ParamMap)=>{
  if(paramMap.has('postid')){
this.mode='edit';
this.postid=paramMap.get('postid');
this.isLoading=true;
this.postService.getEditPost(this.postid).subscribe(postData=>{
  this.post={id:postData._id,newName : postData.newName,
    newAge : postData.newAge,
    newGender: postData.newGender,
    newEmail : postData.newEmail,
    newContact : postData.newContact,
    newAddress : postData.newAddress ,
    newProvince : postData.newProvince,
    newCity : postData.newCity}
})
this.isLoading=false;
  }else{
    this.mode='create';
    this.postid=null;
  }
})
  }

  showToatrsave() {
    this.toastr.success('Saved Successfully');
  }
  showToatrupdate() {
    this.toastr.success('Updated Successfully');
  }


  onSavePost(form: NgForm){

if(form.invalid){return;}
this.isLoading=true;
if(this.mode==='create'){
 this.postService.addPost(  form.value.fname,
  form.value.age,
  form.value.gender,
   form.value.email,
  form.value.contact,
   form.value.address,
  form.value.province,
  form.value.city)
  this.showToatrsave();
}
  else{

    this.postService.updatePosts(this.postid, form.value.fname,
      form.value.age,
      form.value.gender,
       form.value.email,
      form.value.contact,
       form.value.address,
      form.value.province,
      form.value.city)
      this.showToatrupdate();
  }
  form.reset();
  }

}

