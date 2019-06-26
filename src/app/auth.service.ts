import { Injectable } from '@angular/core';
import { Config } from './app.config';

import { promise } from 'protractor';
@Injectable({ providedIn: 'root' })
export class AuthService{
  login;
  constructor(public config: Config) { }

  public Authenticate(){
   this.login = this.config.Authenticate;
    
    
  }

}