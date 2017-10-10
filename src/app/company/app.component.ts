import { Component }  from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <!--<a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>-->
      <a routerLink="/companies" routerLinkActive="active">Companies</a>
    </nav>
    <router-outlet></router-outlet>

    <div>
    <nav>
        <a [routerLink]="['/']">Home</a>
        <a [routerLink]="['/test-page']">Test Page</a>
    </nav>
    <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppCompanyComponent {
  title = 'Company Page';
}
