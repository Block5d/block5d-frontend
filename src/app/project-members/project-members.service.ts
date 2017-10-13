import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

@Injectable()
export class ProjectMembersService {

  constructor(private http: Http) { }

  getAllUsers() {
    console.log(environment.url);
    console.log("--->");
    return this.http.get(`${environment.url}api/users`)
        .map((res:Response) => res.json())
        .catch(this.handleError);
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