import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Consultant} from './consultant'
@Injectable({
  providedIn: 'root'
})
export class ConsultantService {

  constructor( private http: HttpClient) { }

  get userToken() {
    return localStorage.getItem('session');
  }

  getToken() {
    return localStorage.getItem('session')
  }

  getList() {
    const url = 'http://127.0.0.1:8000/api/list';
    const headers: HttpHeaders = new HttpHeaders({
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.userToken}`
    });
    return this.http.get<any>(`${url}`, {headers: headers})
  }

  registerConsultant(consultant: Consultant) {
    const url = 'http://127.0.0.1:8000/api/new';
    const headers: HttpHeaders = new HttpHeaders({
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.userToken}`
    });

    return this.http.post<any>(`${url}`, consultant, {headers: headers})
  }

}
