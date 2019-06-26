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
    if(typeof(this.auth.login.id)!=='undefined'){
      return true;
    }else{
      this.router.navigate(['login']);
      return false;
    }
    
    // console.log(this.auth.isLogin);
    
  }
}