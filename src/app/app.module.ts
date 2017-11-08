import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule}       from '@angular/router';
import { FirebaseModule }    from './firebase';

import { AuthGuard }         from './auth';
import { routes }            from './app.routes';
import { LoginComponent }    from './login/login.component';
import { EmailComponent }    from './email/email.component';
import { SignupComponent }   from './signup/signup.component';
import { MembersComponent }  from './members/members.component';

import { ProjectMembersComponent }  from './project-members/project-members.component';
import { ManageScComponent }        from './manage-sc/manage-sc.component';
import { ViewDesignmodelComponent } from './view-designmodel/view-designmodel.component';

import { ProjectMembersService }          from './project-members/project-members.service';


import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth/auth.interceptor';
import {Ng2Webstorage} from 'ngx-webstorage';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectsComponent } from './projects/projects.component';
import { CompaniesComponent } from './companies/companies.component';

import { PaginationModule, TabsModule, ButtonsModule } from 'ngx-bootstrap';

import { Ng2TableModule } from './ng-table-module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent,
    ViewDesignmodelComponent,
    ProjectMembersComponent,
    ManageScComponent,
    NavComponent,
    FooterComponent,
    ProjectsComponent,
    CompaniesComponent
    
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    Ng2Webstorage,    
    FirebaseModule,
    routes,
    PaginationModule.forRoot(),
    TabsModule.forRoot(),
    ButtonsModule.forRoot(),
    Ng2TableModule
    
  ],

  providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true
      }, AuthGuard, ProjectMembersService
    ],
  bootstrap: [AppComponent]

})

export class AppModule { }
