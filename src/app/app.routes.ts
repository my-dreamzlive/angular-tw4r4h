import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders  } from '@angular/core';

import { RouterModule, Routes, CanActivate  } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { 
  AuthGuardService as AuthGuard 
} from './auth-guard.service';
export let appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { 
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard] 
  }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes, {
  useHash: true
});

