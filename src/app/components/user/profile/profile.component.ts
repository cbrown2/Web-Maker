import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { User } from 'src/app/models/user.model.client';
import { UserService } from 'src/app/services/user.service.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute, private userService:UserService) { }

  uid:string;
  user: User ={
    username : "",
    password: "",
    firstName: "",
    lastName: "",
    email: ""
  };
  oldUserName:string;
  userError: boolean;
  successFlag: boolean;
  users: User[];

  ngOnInit() {
  this.activatedRoute.params.subscribe(params=>{
this.uid = params["uid"];
this.user = this.userService.findUserById(this.uid);
this.oldUserName= this.user.username;

  });
  }


update() {
 if(this.user.username === this.oldUserName){ 
  this.userError = false;
  this.successFlag = true;
  this.userService.updateUser(this.user);
}else {
  const user:User = this.userService.findUserByUsername(this.user.username);
  if(user){
this.userError=true;
this.successFlag =true;
  }else{
    this.userError = false;
    this.successFlag =true;
   this.userService.updateUser(this.user); 
  }
}
}
}