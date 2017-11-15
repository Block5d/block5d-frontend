import{HttpClient} from "@angular/common/http";
import{Injectable} from '@angular/core';
import {Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {environment } from '../../environments/environment';
import {User } from '../models/user.model'

@Injectable()
export class CompaniesService{
    constructor(private http:HttpClient){}
    getAllUsers(): Observable<any[]> {
        console.log(`${environment.url}api/users`);
        return this.http.get(`${environment.url}api/users`)
          .map((res: Response) => {
            console.log(res);
            return res;
          })
          .catch(
            (error: Response) => {
                return Observable.throw('Something went wrong');
            }
          );
      }

}