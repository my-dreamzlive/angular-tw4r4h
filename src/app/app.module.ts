import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { Apps } from './app.apps';
import { appRouting } from './app.routes';
import { LoginComponent } from './login/login.component';
import { LoginComponent as LoginTemplate } from './public/login/login.component';
import { LoginResetComponent } from './public/login-reset/login-reset.component';

import { Config } from './app.config';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { DashboardComponent } from './dashboard/dashboard.component';
export function getConfig(config:Config){
  return () => config.load()
}
export function getAuth(config:Config){
  return () => config.Auth();
}
@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule,   HttpClientModule, NgbModule.forRoot(), appRouting ],
  declarations: [ AppComponent, LoginComponent, LoginTemplate, LoginResetComponent, DashboardComponent ],
  providers: [ 
    Config, Apps,
    AuthService,
    AuthGuardService,
    { provide: APP_INITIALIZER, useFactory: getConfig, deps: [Config], multi: true },
     { provide: APP_INITIALIZER, useFactory: getAuth, deps: [Config], multi: true },
   
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
  
}
