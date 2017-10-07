import { Component, OnInit } from '@angular/core';
import { AngularFireAuthModule, AngularFireAuth } from "angularfire2/auth";
import { Router } from '@angular/router';
import { moveIn, fallIn, moveInLeft } from '../router.animations';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  host: {'[@moveIn]': ''}
})
export class MembersComponent implements OnInit {
  name: any;
  state: string = '';

  constructor(public af: AngularFireAuth,private router: Router) {

    this.af.auth.onAuthStateChanged(auth => { 
      if(auth) {
        console.log(auth.email);
        this.name = auth;
      }
    });
  }

  logout() {
     this.af.auth.signOut();
     console.log( this.af.auth);
     this.router.navigateByUrl('/login');
  }

  ngOnInit() {
  }
}