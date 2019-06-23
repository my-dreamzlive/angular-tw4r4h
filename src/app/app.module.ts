import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Apps } from './app.apps';
// import { Route } from './app.route';
import { LoginComponent } from './public/login/login.component';
import { LoginResetComponent } from './public/login-reset/login-reset.component';

import { Config } from './app.config';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, HttpModule ],
  declarations: [ AppComponent, LoginComponent, LoginResetComponent ],
  providers: [ Config, Apps ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
  
 }
