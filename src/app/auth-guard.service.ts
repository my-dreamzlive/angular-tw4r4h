import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

import { Apps } from './app.apps';

@Injectable()
export class AuthGuardService implements CanActivate{
  
  constructor(private auth: AuthService, public router: Router, public app: Apps) {
   
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.auth.Authenticate().then(res => {
       
        if(typeof(res['status']) !== 'undefined'){
          if(res['status'] === true || res['status']=== '1'){
            return true;
          }else{
            this.app.router.navigate(['./login']);
            return false;
          }
        }
    });
    // console.log(this.auth.isLogin);
    
  }
}