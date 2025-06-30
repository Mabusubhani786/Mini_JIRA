// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

// Layout components
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { MenuComponent } from './layout/menu/menu.component';

// Auth pages
import { LoginComponent } from './pages/auth/login/login.component';
import { SignupComponent } from './pages/auth/signup/signup.component';

// Dashboard and other feature pages
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { IssueListComponent } from './pages/issues/issue-list/issue-list.component';
import { IssueFormComponent } from './pages/issues/issue-form/issue-form.component';
import { IssueDetailComponent } from './pages/issues/issue-detail/issue-detail.component';
import { ProjectManagementComponent } from './pages/projects/project-management/project-management.component';
import { UserManagementComponent } from './pages/users/user-management/user-management.component';

// Routes
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HeaderComponent,
    MenuComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    IssueListComponent,
    IssueFormComponent,
    IssueDetailComponent,
    ProjectManagementComponent,
    UserManagementComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
