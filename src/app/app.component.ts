
import { Component, OnInit } from '@angular/core';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { moveIn, fallIn, moveInLeft } from './router.animations';
import { LocalStorageService} from 'ngx-webstorage';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  host: {'[@moveIn]': ''}
})
export class AppComponent implements OnInit {
  isLoggedIn = false;
  constructor(public af: AngularFireAuth, private router: Router,
    private storage: LocalStorageService) {

    this.af.auth.onAuthStateChanged(auth => {
      if (auth) {
        console.log(auth.email);
        this.isLoggedIn = true;
      }
    });
  }

  ngOnInit() {
  }
}
