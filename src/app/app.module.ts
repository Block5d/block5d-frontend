import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FirebaseModule } from './firebase';
import { AuthGuard } from './auth';
import { routes } from './app.routes';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectMembersComponent } from './project-members/project-members.component';
import { CompanyComponent } from './company/company.component';
import { ManageScComponent } from './manage-sc/manage-sc.component';
import { ViewDesignmodelComponent } from './view-designmodel/view-designmodel.component';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './projects/in-memory-data.service';
import { ProjectDetailComponent }  from './projects/project-detail.component';
import { ProjectService }          from './projects/project.service';
import { ProjectSearchComponent }  from './projects/project-search.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent,
    ProjectsComponent,
    ProjectMembersComponent,
    CompanyComponent,
    ManageScComponent,
    
    ViewDesignmodelComponent,
    ProjectDetailComponent,
    ProjectSearchComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    FirebaseModule,
    routes,

    InMemoryWebApiModule.forRoot(InMemoryDataService),

  ],
  providers: [AuthGuard, ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
