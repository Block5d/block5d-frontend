import { Injectable } from '@angular/core';
import { Headers, Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { environment } from '../../environments/environment';
import { User } from '../models/user.model'

@Injectable()
export class ProjectMembersService {

  constructor(private http: Http) { }

  private formatErrors(error: any) {
    console.log(JSON.stringify(error));
    return Observable.throw(error.json());
  }

  getAllUsers(): Observable<User[]> {
    console.log(`${environment.url}api/users`);
    return this.http.get(`${environment.url}api/users`, { })
    .map((res: Response) => <User[]>res.json())
    .catch(this.formatErrors);
  }

  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      errMsg = `${error.status} - ${error.statusText || ''} `;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}