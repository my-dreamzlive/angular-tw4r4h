import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

import { Apps } from './app.apps';

@Injectable()
export class AuthGuardService implements CanActivate{
  
  constructor(private auth: AuthService, public router: Router, public app: Apps) {
   
  }
  canActivate(): boolean {
    this.auth.Authenticate().then(res => {
        console.log(res);
        if(typeof(res['status'] !== 'undefined')){
          return res['status'];
        }else{
          return false;
        }
    });
    // console.log(this.auth.isLogin);
    
  }
}