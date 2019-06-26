import { Injectable } from '@angular/core';
import { Config } from './app.config';

import { promise } from 'protractor';
@Injectable({ providedIn: 'root' })
export class AuthService{
  islogin;
  constructor(public config: Config) { }

  public Authenticate(){
    if(typeof(this.config.Authenticate.status) === 'boolean'){
      this.islogin = this.config.Authenticate.status;
    }else{
      this.islogin = false;
    }
  }

}