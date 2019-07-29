import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {  Response } from "@angular/http";
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import { User } from './user.model';

@Injectable()
export class UserService {
  readonly rootUrl = 'http://127.0.0.1:8000';
  constructor(private http: HttpClient) { }

  registerUser(user : User){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded'
      })};
    
    const body: User = {
      _username : user._username,
      _password : user._password
    }
    return this.http.post(this.rootUrl + '/register', body,{responseType: 'text'});
  }

  userAuthentication(username,password) {

    const body = {
      username : username,
      password : password
    }
    
    return this.http.post(this.rootUrl+'/api/login_check', body, {
        headers: { 'Content-Type': 'application/json' },
    }).map((res: Response) => res)

}



}
