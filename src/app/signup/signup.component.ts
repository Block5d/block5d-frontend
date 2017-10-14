import { Component, OnInit } from '@angular/core';
import { AngularFireAuthModule, AngularFireAuth } from "angularfire2/auth";
import { Router } from '@angular/router';
import { moveIn, fallIn } from '../router.animations';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  animations: [moveIn(), fallIn()],
  host: {'[@moveIn]': ''}
})
export class SignupComponent implements OnInit {

  state: string = '';
  error: any;

  constructor(public af: AngularFireAuth,private router: Router) {

  }

  onSubmit(formData) {
    if(formData.valid) {
      console.log(formData.value);
      this.af.auth.createUserWithEmailAndPassword(formData.value.email,
        formData.value.password
      ).then(
        (success) => {
        this.router.navigate([environment.homepath])
      }).catch(
        (err) => {
        this.error = err;
      })
    }
  }

  ngOnInit() {
  }

}