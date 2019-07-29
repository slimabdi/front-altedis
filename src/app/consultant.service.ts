import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Consultant} from './consultant'
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ConsultantService {

  constructor( private http: HttpClient) { }

  get userToken() {
    return localStorage.getItem("session");
  }

  getList(){
    let url = 'http://127.0.0.1:8000/api/list';
    let headers: HttpHeaders = new HttpHeaders({
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.userToken}`
    });
    return this.http.get<any>(`${url}`, {headers: headers})
  }



  registerConsultant(consultant : Consultant){
    let url = 'http://127.0.0.1:8000/api/new';
    let headers: HttpHeaders = new HttpHeaders({
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.userToken}`
    });

    return this.http.post<any>(`${url}`,consultant,{headers: headers})
  }

}
