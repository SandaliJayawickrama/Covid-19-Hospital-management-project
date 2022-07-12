import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserService } from 'src/app/manage-user/user.service';
import { User } from 'src/app/manage-user/user-model';



@Component({
  selector: 'app-site-admin-page',
  templateUrl: './site-admin-page.component.html',
  styleUrls: ['./site-admin-page.component.css'],
  providers: [ UserService ]
})
export class SiteAdminPageComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.refreshUserList();
  }


  refreshUserList(){
    this.userService.getUserList().subscribe((res) =>{
      this.userService.users = res as User[];
  
    });
  }


  

}
