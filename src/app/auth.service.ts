import { Injectable } from '@angular/core';
import { Config } from './app.config';

import { promise } from 'protractor';
@Injectable({ providedIn: 'root' })
export class AuthService{
  user;
  islogin;
  constructor(public config: Config) { }

  public Authenticate(){
   this.user = this.config.Authenticate;
    if(typeof(this.user.id)!=='undefined'){
      this.islogin = true;
    }else{
      this.islogin = false;
    }
    
  }

}