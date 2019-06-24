import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate{
  Auth;
  constructor(public auth: AuthService, public router: Router) {
   this.Auth = auth;
   this.Auth.Authenticated();
  }
  canActivate(): boolean {
    
    console.log('LoggedIn');
    console.log(this.Auth.isLogin);
    if (!this.auth.Authenticated()) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
}