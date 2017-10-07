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
    ViewDesignmodelComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    FirebaseModule,
    routes
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
