import { Injectable } from '@angular/core';
import {HttpInterceptor} from '@angular/common/http';
import {ConsultantService} from './consultant.service';
@Injectable({
  providedIn: 'root'
})
export class TokenIntercptorService implements HttpInterceptor {
  userToken: any;

  constructor( private consultant: ConsultantService) { }

  intercept(req, next) {
    const tokenInReq = req.clone({
      setHeader: {
        Authorization: `Bearer ${this.consultant.getToken}`
      }
    })
    return next.handle(tokenInReq)

  }
}
