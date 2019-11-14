import { Component, OnInit } from '@angular/core';
import { UserLoginModel } from './UserLoginModel';
import { UserApi } from '../APIs/UserApi';
import { error } from 'protractor';
import { UserDetails } from '../dashboard/UserDetails';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  user = new UserLoginModel();
  userDetails = new UserDetails();
  constructor(private userService:UserApi) { }

  ngOnInit() {
  }

  userlogin():void{
    if(this.user.email && this.user.password){
      this.userService.login(this.user)
      .subscribe((response) =>{
        
      },(error)=>{


      })
    }else{
      console.log('Email/Password is missing.')
    }
  }

}
