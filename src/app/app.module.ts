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


import { CompaniesComponent }      from './company/companies.component';
import { CompanyDetailComponent }  from './company/company-detail.component';
import { CompanyService }          from './company/company.service';
import { CompanySearchComponent }  from './company/company-search.component';
import { DialogComponent} from './company/dialog.component';
import { EditComponent}   from './company/edit.component';


import { ProjectsComponent } from './projects/projects.component';
import { ProjectDetailComponent }  from './projects/project-detail.component';
import { ProjectService }          from './projects/project.service';
import { ProjectSearchComponent }  from './projects/project-search.component';

import { ProjectMembersService }          from './project-members/project-members.service';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth/auth.interceptor';
import {Ng2Webstorage} from 'ngx-webstorage';

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

    CompanyDetailComponent,
    CompaniesComponent,
    CompanySearchComponent,
    DialogComponent,
    EditComponent,
    ProjectsComponent,
    ProjectDetailComponent,
    ProjectSearchComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    Ng2Webstorage,    
    FirebaseModule,
    routes
  ],

  providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true
      }, AuthGuard, CompanyService, ProjectService, ProjectMembersService,
    ],
  bootstrap: [AppComponent]

})

export class AppModule { }
