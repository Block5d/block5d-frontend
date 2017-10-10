import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MembersComponent } from './members/members.component';
import { AuthGuard } from './auth';
import { SignupComponent } from './signup/signup.component';
import { EmailComponent } from './email/email.component';

import { ProjectsComponent } from './projects/projects.component';
import { ProjectMembersComponent } from './project-members/project-members.component';
import { CompanyComponent } from './company/company.component';


import { ProjectDetailComponent }  from './projects/project-detail.component';



export const router: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'login-email', component: EmailComponent },
    { path: 'members', component: MembersComponent, canActivate: [AuthGuard] },
    { path: 'projects', component: ProjectsComponent, canActivate: [AuthGuard] },
    { path: 'project-members', component: ProjectMembersComponent, canActivate: [AuthGuard] },
    { path: 'companies', component: CompanyComponent, canActivate: [AuthGuard] },
    { path: 'detail/:id', component: ProjectDetailComponent, canActivate: [AuthGuard] },
    //{ path: 'projects', component: ProjectDetailComponent, canActivate: [AuthGuard] },

]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);