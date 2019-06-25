import { Injectable } from '@angular/core';
import { Apps } from './app.apps';

import { promise } from 'protractor';
@Injectable()
export class AuthService {
  isLogin;
  constructor(private App: Apps) { }

  public Authenticated(){
    let Response;
    Response = new Promise((resolve) => this.App.getResponse("check::login").subscribe(resolve));
    Response.then(res=>{
      this.isLogin = res;
      console.log(this.isLogin);
    });
  }

}