import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate{

  constructor(public auth: AuthService, public router: Router) {
    auth.Authenticated();
    
  }
  canActivate(): boolean {
    //console.log(this.auth.isLogin);
    if (!this.auth.Authenticated()) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
}