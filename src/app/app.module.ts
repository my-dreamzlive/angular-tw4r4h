import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';

import { AppComponent } from './app.component';
import { Apps } from './app.apps';
// import { Route } from './app.route';
import { LoginComponent } from './public/login/login.component';
import { LoginResetComponent } from './public/login-reset/login-reset.component';

import { Config } from './app.config';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, HttpModule ],
  declarations: [ AppComponent, LoginComponent, LoginResetComponent ],
  providers: [ 
    Config, 
    { provide: APP_INITIALIZER, useFactory: (config:Config) => () => { 
      return config.load();
     }, deps: [Config, Http], multi: true },
    Apps
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
  
 }
