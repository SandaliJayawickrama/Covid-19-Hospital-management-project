import { Injectable } from '@angular/core';
import {Patient} from './patient.model'
import { Subject } from 'rxjs';
import { Associates } from './patient.model';
import { HttpClient } from '@angular/common/http';
import{map} from 'rxjs/operators'

import { Router } from '@angular/router';
 
@Injectable({providedIn:'root'})
export class PostService{

  private posts: Patient[]=[];
private postsUpdated= new  Subject<Patient[]>();

constructor(private http : HttpClient,private router:Router){}

  getPost(){

    this.http.get<{message :string,posts:any}>('http://localhost:3000/posts')
.pipe(map((postData)=>{
  return postData.posts.map((post: { _id: any; newName: any; newAge: any;newGender:any; newEmail: any; newContact: any; newAddress: any; newProvince: any; newCity: any; }) =>{
    return {
      id:post._id,
      newName:post.newName,
      newAge:post.newAge,
      newGender:post.newGender,
      newEmail:post.newEmail,
      newContact:post.newContact,
      newAddress:post.newAddress,
      newProvince:post.newProvince,
      newCity:post.newCity
};
  });
}))

    .subscribe((transformedPosts)=>{
      this.posts=transformedPosts;
      this.postsUpdated.next([...this.posts]);
    });
  }
  getPostUpdateListener(){
return this.postsUpdated.asObservable();

  }

  getEditPost(id:string){

return this.http.get<{ _id:string,
  newName : string,
  newAge : string,
  newGender: string,
  newEmail : string,
  newContact : string,
  newAddress : string,
  newProvince : string,
  newCity : string}>("http://localhost:3000/posts/"+id);

  };
addPost(
  newName : string,
  newAge : string,
  newGender: string,
  newEmail : string,
  newContact : string,
  newAddress : string,
  newProvince : string,
  newCity : string
       )
{
const post: Patient ={
  id: null as any,
  newName : newName,
  newAge : newAge,
  newGender:newGender,
  newEmail : newEmail,
  newContact : newContact,
  newAddress : newAddress,
  newProvince : newProvince,
  newCity : newCity};
this.http.post<{message :string,postid :string}>('http://localhost:3000/posts',post).subscribe(
  (responseData)=>{
    const id =responseData.postid;
    post.id=id;
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
    this.router.navigate(["/patient"]);
  });

}

updatePosts(
  id:string,
  newName : string,
  newAge : string,
  newGender:string,
  newEmail : string,
  newContact : string,
  newAddress : string,
  newProvince : string,
  newCity : string)
  {
    const post: Patient ={
    id: id,
    newName : newName,
    newAge : newAge,
    newGender:newGender,
    newEmail : newEmail,
    newContact : newContact,
    newAddress : newAddress,
    newProvince : newProvince,
    newCity : newCity};
this.http.put("http://localhost:3000/posts/"+id,post).subscribe(response=>{
  const updatedPosts=[...this.posts];
  const oldpostindex=updatedPosts.findIndex(p=>p.id === post.id);
  updatedPosts[oldpostindex]=post;
  this.posts=updatedPosts;
  this.postsUpdated.next([...this.posts]);})
this.router.navigate(["/patient"]);

  }


deletePost(postid:string){
  this.http.delete("http://localhost:3000/posts/"+postid)
  .subscribe(()=>{
    const updatedPosts =this.posts.filter(post =>post.id !== postid);
    this.posts=updatedPosts;
    this.postsUpdated.next([...this.posts]);
  });
}
 }





@Injectable({providedIn:'root'})
export class AssociatesService{

  private Associates: Associates[]=[];
private AssociatesUpdated= new  Subject<Associates[]>();

constructor(private http : HttpClient,private router:Router){}

  getAssociates(){

    this.http.get<{message :string,details:any}>('http://localhost:3000/details')
.pipe(map((postData)=>{
  return postData.details.map((detail:any)=>{
    return {
      id:detail._id,
      recentName:detail.recentName,
      recentContacts:detail.recentContacts,
      recentPlaces:detail.recentPlaces
  };
  });
}))

    .subscribe((transformedAssociates)=>{
      this.Associates=transformedAssociates;
      this.AssociatesUpdated.next([...this.Associates]);
    });
  }
  getAssociatesUpdateListener(){
return this.AssociatesUpdated.asObservable();

  }

  getEditAssociates(id:string){
    return this.http.get<{
      _id:string,
      recentName : string,
      recentContacts : string,
      recentPlaces : string,}>('http://localhost:3000/details/'+id);
  }
addAssociates(

  recentName : string,
  recentContacts : string,
  recentPlaces : string,
       )
{

const detail: Associates={
id:null as any,
recentName : recentName,
recentContacts : recentContacts,
  recentPlaces : recentPlaces};



  this.http.post<{message :string,detailid:string}>('http://localhost:3000/details',detail).subscribe(
  (resData)=>{
    const id=resData.detailid;
    detail.id=id;
    this.Associates.push(detail);
    this.AssociatesUpdated.next([...this.Associates]);
    this.router.navigate(["/recent"]);
  }
);

}


updateAssociates(
  id:string,
  recentName : string,
  recentContacts : string,
  recentPlaces : string
  ){
    const detail:Associates={
      id:id,
      recentName : recentName,
      recentContacts : recentContacts,
      recentPlaces : recentPlaces

    };
    this.http.put('http://localhost:3000/details/'+id,detail).subscribe(response=>{
      const updateddetails=[...this.Associates];
      const oldDetailindex=updateddetails.findIndex(p=>p.id === detail.id);
      updateddetails[oldDetailindex]=detail;
      this.Associates=updateddetails;
      this.AssociatesUpdated.next([...this.Associates])
    })
    this.router.navigate(["/recent"]);
  };





deleteAssociates(detailid:string){

  this.http.delete('http://localhost:3000/details/'+detailid)
  .subscribe(()=>{
    const updateddetails =this.Associates.filter(detail =>detail.id !== detailid);
    this.Associates=updateddetails;
    this.AssociatesUpdated.next([...this.Associates]);

  });


}
 }
