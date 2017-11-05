import { Component, OnInit } from '@angular/core';
import { AngularFireAuthModule, AngularFireAuth } from "angularfire2/auth";
import { Router } from '@angular/router';
import { moveIn, fallIn, moveInLeft } from '../router.animations';
import {LocalStorageService} from 'ngx-webstorage';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  host: {'[@moveIn]': ''}
})
export class MembersComponent implements OnInit {
  name: any;
  
  constructor(public af: AngularFireAuth,private router: Router,
    private storage:LocalStorageService) {

    this.af.auth.onAuthStateChanged(auth => { 
      if(auth) {
        console.log(auth.email);
        this.name = auth;
      }
    });
  }

  ngOnInit() {
  }
}