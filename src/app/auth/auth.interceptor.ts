import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';

import { AngularFireAuth } from "angularfire2/auth";
import { Observable } from 'rxjs/Observable';
import { LocalStorageService } from 'ngx-webstorage';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(public auth: AngularFireAuth, private storage: LocalStorageService) {
    //
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    var value = this.storage.retrieve(environment.firebaseTokenKey);
    console.log(value);
    request = request.clone({ headers: request.headers.set('Authorization', `Bearer ${value}`) });
    console.log(request);
    return next.handle(request);
  }
}