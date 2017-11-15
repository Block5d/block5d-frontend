import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MembersComponent } from './components/members/members.component';
import { AuthGuard } from './auth';
import { SignupComponent } from './components/signup/signup.component';
import { EmailComponent } from './components/email/email.component';
import { ProjectMembersComponent } from './components/project-members/project-members.component';
import { NgModule } from '@angular/core';
import { ProjectsComponent } from './components/projects/projects.component';
import { CompaniesComponent} from './components/companies/companies.component';


export const router: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'login-email', component: EmailComponent },
    { path: 'members', component: MembersComponent, canActivate: [AuthGuard] },
    { path: 'projects', component: ProjectsComponent, canActivate: [AuthGuard] },
    { path: 'project-members', component: ProjectMembersComponent, canActivate: [AuthGuard] },
    { path: 'companies', component: CompaniesComponent, canActivate: [AuthGuard] },
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router, { useHash: true });
