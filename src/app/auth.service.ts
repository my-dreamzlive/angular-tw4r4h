import { Injectable } from '@angular/core';
import { Apps } from './app.apps';

import { promise } from 'protractor';
@Injectable()
export class AuthService{
  Authenticated;
  constructor(private App: Apps) { }

  public Authenticate(){
    return new Promise((resolve, reject) => {
        this.App.getResponse("check::login")
        .subscribe((res) => {
            this.Authenticated = res;
            resolve(true);
          
        });
      });
    
  }

}