import { Component, OnInit } from '@angular/core';
import { Userservice, UserService } from "../../../services/user.service.client"
import { Router } from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;



  constructor(private userService: UserService, private router: Router)  { }

  ngOnInit() {
  }
 login() {
  const user = this.userService.findUserByCredentials(this.username, this.password);
  if(user) {
        this.router.navigate(["user", user._id])
  }
 }
}
