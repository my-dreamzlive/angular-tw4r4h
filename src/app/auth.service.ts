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
   
    if(this.user.status > 0){
      this.islogin = true;
    }else{
      this.islogin = false;
    }
    
  }

}