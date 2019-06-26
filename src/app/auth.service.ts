import { Injectable } from '@angular/core';
import { Apps } from './app.apps';

import { promise } from 'protractor';
@Injectable({ providedIn: 'root' })
export class AuthService{
  islogin;
  constructor(public App: Apps) { }

  public Authenticate(){
    return new Promise((resolve, reject) => {
        this.App.getResponse("master::check::login")
        .subscribe((res) => {
            resolve(res);
        });
      });
    
  }

}