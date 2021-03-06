import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule} from '@angular/router';
import { FirebaseModule } from './firebase';

import { AuthGuard } from './auth';
import { routes } from './app.routes';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth/auth.interceptor';
import { Ng2Webstorage } from 'ngx-webstorage';

import { PaginationModule, TabsModule, ButtonsModule, BsDropdownModule } from 'ngx-bootstrap';
// Import 3rd party components

import { ChartsModule } from 'ng2-charts/ng2-charts';
import { Ng2TableModule } from './ng-table-module';
import { AddViewComponent } from './components/companies/add-view.component';
import { EditViewComponent } from './components/companies/edit-view/edit-view.component';
import { ModalModule} from 'ngx-bootstrap';
// Import directives

import {
  AsideToggleDirective,
  NAV_DROPDOWN_DIRECTIVES,
  ReplaceDirective,
  SIDEBAR_TOGGLE_DIRECTIVES
} from './directives';

const APP_DIRECTIVES = [
  AsideToggleDirective,
  NAV_DROPDOWN_DIRECTIVES,
  ReplaceDirective,
  SIDEBAR_TOGGLE_DIRECTIVES
];

import {
  ProjectMembersService
} from './services';

const APP_SERVICES = [
  ProjectMembersService
];

import {
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
  CompaniesComponent,
  AppBreadcrumbsComponent,

} from './components';

const APP_COMPONENTS = [
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
  CompaniesComponent,
  AddViewComponent,
  EditViewComponent,
  AppBreadcrumbsComponent
];

@NgModule({
  declarations: [
    AppComponent,
    ...APP_COMPONENTS,
    ...APP_DIRECTIVES,
    EditViewComponent
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
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ButtonsModule.forRoot(),
    Ng2TableModule,
    ModalModule.forRoot()
  ],

  providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true
      }, AuthGuard, ...APP_SERVICES
    ],
  bootstrap: [AppComponent],
  entryComponents:[AddViewComponent,
                   EditViewComponent]

})

export class AppModule { }
