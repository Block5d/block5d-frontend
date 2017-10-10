import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule}      from './company/app-routing.module';

import { RouterModule}       from '@angular/router';


import { FirebaseModule }    from './firebase';
import { AuthGuard }         from './auth';
import { routes }            from './app.routes';
import { LoginComponent }    from './login/login.component';
import { EmailComponent }    from './email/email.component';
import { SignupComponent }   from './signup/signup.component';
import { MembersComponent }  from './members/members.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectMembersComponent }  from './project-members/project-members.component';
import { ManageScComponent }        from './manage-sc/manage-sc.component';
import { ViewDesignmodelComponent } from './view-designmodel/view-designmodel.component';

import { AppCompanyComponent }     from './company/app.component';
import { CompaniesComponent }      from './company/companies.component';
import { CompanyDetailComponent }  from './company/company-detail.component';
import { CompanyService }          from './company/company.service';
import { CompanySearchComponent }  from './company/company-search.component';

import { DialogComponent} from './company/dialog.component';
import { EditComponent}   from './company/edit.component';

import { ModalComponent } from './company/_directives/index';
import { ModalService } from './company/_services/index';

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
    ManageScComponent,
    AppCompanyComponent,
    CompanyDetailComponent,
    CompaniesComponent,
    CompanySearchComponent,
    DialogComponent,
    EditComponent,
    ModalComponent,
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
    AppRoutingModule
  ],

  providers: [AuthGuard,CompanyService, ModalService,ProjectService],
  bootstrap: [AppComponent]

})

export class AppModule { }
