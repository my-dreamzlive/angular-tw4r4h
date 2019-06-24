import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate{
  Auth;
  constructor(private auth: AuthService, public router: Router) {
   
  }
  canActivate(): boolean {
    this.auth.Authenticated();
    console.log('LoggedIn');
    console.log(this.auth.isLogin);
    
    return true;
  }
}