import { Component, OnInit } from '@angular/core';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import {LocalStorageService} from 'ngx-webstorage';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  public disabled=false;
  public status:{isopen:boolean}={isopen:false};

  public toggled(open:boolean):void{
    console.log('Dropdown is now:', open);
  }

  public toggleDropdown($event:MouseEvent):void{
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen=!this.status.isopen;
  }
  isLoggedIn: boolean=false;
  name: any;
  constructor(public af: AngularFireAuth, private router: Router,
    private storage: LocalStorageService) {
      this.af.auth.onAuthStateChanged(auth => {
        if (auth) {
          console.log(auth.email);
          this.name = auth;
          this.isLoggedIn = true;
        }
      });
  }

  logout() {
    this.af.auth.signOut();
    console.log( this.af.auth);
    this.storage.clear(environment.firebaseTokenKey);
    this.isLoggedIn = false;
    this.router.navigateByUrl(environment.loginpath);
  }

  ngOnInit() {
  }

}
