import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders  } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

export let appRoutes: Routes = [
  { path: 'checkpost', component: AppComponent },
  
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes, {
  useHash: true
});

