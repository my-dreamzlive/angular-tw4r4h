import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate{

  constructor(public auth: AuthService, public router: Router) {
    
  }
  canActivate(): boolean {
    let auth = this.auth.Authenticated();
    if (!this.auth.Authenticated()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}