import { Routes } from '@angular/router';

import { LoginComponent } from './pages/auth/login/login.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { IssueListComponent } from './pages/issues/issue-list/issue-list.component';
import { IssueFormComponent } from './pages/issues/issue-form/issue-form.component';
import { IssueDetailComponent } from './pages/issues/issue-detail/issue-detail.component';
import { ProjectManagementComponent } from './pages/projects/project-management/project-management.component';
import { UserManagementComponent } from './pages/users/user-management/user-management.component';

import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

export const routes: Routes = [
  // Routes outside layout
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },

  // Routes inside MainLayout
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'issues', component: IssueListComponent },
      { path: 'issues/create', component: IssueFormComponent },
      { path: 'issues/:id', component: IssueDetailComponent },
      { path: 'projects', component: ProjectManagementComponent },
      { path: 'users', component: UserManagementComponent },
    ],
  },

  // Wildcard route
  { path: '**', redirectTo: 'dashboard' },
];
