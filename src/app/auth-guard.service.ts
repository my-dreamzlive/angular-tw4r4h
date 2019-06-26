import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate{
  
  constructor(private auth: AuthService,private router: Router) {
    
   // console.log(Auth);
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.auth.Authenticate();
    if(this.auth.islogin == false){
      //this.router.navigate(['login']);
    }
    return this.auth.islogin;
    // console.log(this.auth.isLogin);
    
  }
}