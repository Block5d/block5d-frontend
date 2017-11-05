import { Component, OnInit, HostBinding } from '@angular/core';
import { AngularFireAuthModule, AngularFireAuth } from "angularfire2/auth";
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { moveIn } from '../router.animations';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [moveIn()],
  host: {'[@moveIn]': ''}
})
export class LoginComponent implements OnInit {

  error: any;
  constructor(public af: AngularFireAuth,private router: Router) {
    this.af.auth.onAuthStateChanged(auth => { 
      if(auth) {
        this.router.navigateByUrl(environment.homepath);
      }
    });
  }

  loginFb() {
    var provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('user_birthday');
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Facebook Access Token.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      if(user){
        this.router.navigate([environment.homepath]);
      }else{
        this.router.navigate([environment.loginpath]);
      }
    });
    
  }

  loginGoogle() {
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Facebook Access Token.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      if(user){
        console.log(user);
        this.router.navigate([environment.homepath]);
      }else{
        this.router.navigate([environment.loginpath]);
      }
    });
  
  }


  ngOnInit() {
  }

}