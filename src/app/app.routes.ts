import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders  } from '@angular/core';

import { RouterModule, Routes, CanActivate  } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { NotFoundComponent } from './private/not-found/not-found.component';

import { ProfileComponent } from './private/profile/profile.component';
import { 
  AuthGuardService as AuthGuard 
} from './auth-guard.service';
export let appRoutes: Routes = [
  { path: 'login', component: LoginComponent, data: { title: 'Login'} },
  
  { 
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    runGuardsAndResolvers: 'always',
    data: { title: 'Dashboard'}
  },
  { 
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
    runGuardsAndResolvers: 'always',
    data: { title: 'Profile'}
  },
  { 
    path:'notfound',
    component: NotFoundComponent,
    canActivate: [AuthGuard],
    runGuardsAndResolvers: 'always',
    data: { title: '404 - Page Not Found'}
  },
  { path: '**', redirectTo: 'notfound' }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes, {
  useHash: true
});

