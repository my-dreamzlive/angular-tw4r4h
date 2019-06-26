import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

import { Apps } from './app.apps';

@Injectable()
export class AuthGuardService implements CanActivate{
  
  constructor(private auth: AuthService, public app: Apps) {
   
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return true;
    // console.log(this.auth.isLogin);
    
  }
}