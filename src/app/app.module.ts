import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { Apps } from './app.apps';
import { appRouting } from './app.routes';
import { LoginComponent } from './public/login/login.component';
import { LoginResetComponent } from './public/login-reset/login-reset.component';

import { Config } from './app.config';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { DashboardComponent } from './dashboard/dashboard.component';
export function getConfig(config:Config){
  return () => config.load()
}


@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, HttpModule, HttpClientModule, NgbModule.forRoot(), appRouting ],
  declarations: [ AppComponent, LoginComponent, LoginResetComponent, DashboardComponent ],
  providers: [ 
    Config, Apps,
    AuthService,
    { provide: APP_INITIALIZER, useFactory: getConfig, deps: [Config, Http, AuthService], multi: true },
   
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
  
}
