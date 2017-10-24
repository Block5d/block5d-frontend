import { Component, OnInit } from '@angular/core';
//import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from "angularfire2/auth";
import { Router } from '@angular/router';
import { moveIn, fallIn } from '../router.animations';
import { environment } from '../../environments/environment';
import {LocalStorageService} from 'ngx-webstorage';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css'],
  animations: [moveIn(), fallIn()],
  host: {'[@moveIn]': ''}
})
export class EmailComponent implements OnInit {

    state: string = '';
    error: any;

    constructor(public af: AngularFireAuth,private router: Router,
      private storage:LocalStorageService) {
      this.af.auth.onAuthStateChanged(auth => { 
        if(auth) {
          this.router.navigateByUrl(environment.homepath);
        }
      });
  }


  onSubmit(formData) {
    if(formData.valid) {
      console.log(formData.value);
      this.af.auth.signInWithEmailAndPassword(
        formData.value.email,
        formData.value.password
      ).then(
        (success) => {
        console.log(success);
        this.af.auth.currentUser.getIdToken().then((token)=>{
          console.log("LOGIN TOKEN ==> " + token);
          this.storage.store(environment.firebaseTokenKey, token);
        })
        this.router.navigate([environment.homepath]);
      }).catch(
        (err) => {
        console.log(err);
        this.error = err;
      })
    }
  }

  ngOnInit() {
  }

}