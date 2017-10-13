import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';

import { AngularFireAuth } from "angularfire2/auth";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(public auth: AngularFireAuth) {
    console.log(this.auth.idToken);
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(this.auth.idToken);
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.auth.idToken}`
      }
    });
    return next.handle(request);
  }
}