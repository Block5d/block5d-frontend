import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompaniesComponent }      from './companies.component';
import { CompanyDetailComponent }  from './company-detail.component';

const routes: Routes = [
  //{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  //{ path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: CompanyDetailComponent },
  { path: 'companies',  component: CompaniesComponent },
  //{ path: 'modal-basic',component: NgbdModalBasic}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}