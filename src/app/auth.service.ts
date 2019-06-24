import { Injectable } from '@angular/core';
import { Apps } from './app.apps';

import { promise } from 'protractor';
@Injectable()
export class AuthService {
  Response;
  constructor(private App: Apps) { }

  public Authenticated(){
    
    this.response = new Promise((resolve) => this.App.getResponse("check::login").subscribe(resolve));
    response.then(res=>{
      console.log(res);
    });
  }

}