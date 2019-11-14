import { Component, OnInit } from '@angular/core';
import {Http,Response, RequestOptions,Headers} from '@angular/http';
import  {Injectable} from '@angular/core'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { UserLoginModel } from '../login/UserLoginModel';
import { UserRegistrationModel } from '../registration/UserRegistrationModel';
import { Observable } from 'rxjs/Observable';

let header = new Headers({'Content-Type':'application/json','Access-Control-Allow-Origin':'*'});
let options = new RequestOptions({headers:header});

@Injectable()
export class UserApi{

    constructor(private httpService:Http){
        this.httpService = httpService;
    }
    
    login(user:UserLoginModel){
        let body = JSON.stringify(user);
        return this.httpService.post("http://localhost:8080/",body,options);
    }

    register(user:UserRegistrationModel):Observable<any>{
        console.log(user.email);
        let body = JSON.stringify(user);

        return this.httpService.post("http://localhost:8080/registration",body,options);
    }
}