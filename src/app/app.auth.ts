import { Injectable, NgModule, ModuleWithProviders } from '@angular/core';

import { Apps } from './app.apps';
@Injectable()
export class Auth{
  App;
  Authenticated;
  constructor(private Apps: Apps){
    this.App = Apps;
    this.Authenticate();
    
    console.log(this.Authenticated);
  }

  Authenticate(): void{
    let request = new Promise(resolve => this.App.getResponse('check::login').subscribe(resolve));
    let auth;
    request.then(res=>{
      
      auth = typeof(res['status']) !== 'undefined' ? res['status'] : false;
    });
    this.Authenticated = auth;
  }

}