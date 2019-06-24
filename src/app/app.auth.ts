import { Injectable, NgModule, ModuleWithProviders } from '@angular/core';

import { Apps } from './app.apps';
@Injectable({ providedIn: 'root' })
export class Auth{
  App;
  Authenticated;
  constructor(private Apps: Apps){
    this.App = Apps;
    this.Authenticate();
    
    console.log(this.Authenticated);
  }

  Authenticate(){
    return new Promise(resolve => this.App.getResponse('check::login').subscribe(res=>{
       this.Authenticated = typeof(res['status']) !== 'undefined' ? res['status'] : false;
      resolve(true);
    }));
  }

}