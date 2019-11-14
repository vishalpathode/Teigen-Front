import { Component, OnInit } from '@angular/core';
import { UserRegistrationModel } from './UserRegistrationModel';
import { UserApi } from '../APIs/UserApi';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user = new UserRegistrationModel();
  constructor(private userService:UserApi) { }

  ngOnInit() {
  }

  userRegistration(user:UserRegistrationModel){
    this.userService.register(user)
    .subscribe((response) => {
      if(response){
        console.log(response);
        this.reset();
      }
    },(error) =>{
      console.log(error);
    })
  }

  reset(){
    this.user.email = null;
    this.user.firstname = null;
    this.user.lastname = null;
    this.user.password = null;
    this.user.phoneNumber = null;
  }

}
