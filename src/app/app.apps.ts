
import { Injectable, NgModule, ModuleWithProviders } from '@angular/core';

import { RouterModule, Routes, Router, ActivatedRoute, NavigationStart, NavigationEnd, ParamMap } from '@angular/router';

import { HttpHeaders, HttpClient, HttpParams, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import 'rxjs/add/operator/map';

import { promise } from 'protractor';
import { Config } from './app.config';

import { AuthService } from './auth.service';

import * as Rx from 'rxjs/Observable';
import { Observable, Subject } from 'rxjs/Rx';
@Injectable()
export class Apps {
  env: string;
  api: any;
  info: any;
  options: any;
  headers: any;
  token: any;
  httpRequest = new HttpParams();
  islogin: any;
  constructor(private config: Config, private http: HttpClient,  public router: Router, public route: ActivatedRoute){
    this.env = config.getEnv('env');
    this.info = config.getEnv('info');
    this.api = config.get('api');
    this.headers = new HttpHeaders()
    .set('Content-Type', 'application/x-www-form-urlencoded')
    .set('Authkey', this.api.key).set('AuthHash', this.api.hash);
    this.options = {headers: this.headers};
    // this.options = {headers: this.headers, responseType:'text'};
    this.requestToken();
  }
  
  getResponse(action, params: any = null) {
    let req = this.httpRequest;
    if(typeof(this.token)=='undefined'){
      req = req.set('action', action);
    }else{
      req = req.set('action', action).set('token',this.token);
    }
    if ( params !== null ) {

      Object.entries(params).forEach((param) => {

        req = req.set(param[0], param[1]);
      });
    }
    return this.http.post(this.api.url, req, this.options).map(res => res);
  }

  requestToken(): void{
    let storage = window.localStorage;
    let crxf = storage.getItem('crxf');
    //console.log(crxf);
    if(typeof(crxf)!=='string'){
        this.token = new Promise(resolve => this.getResponse('request::token').subscribe(resolve));
        this.token.then(res =>{
          storage.setItem('crxf',res.token);
          //console.log(encodeURI(res));
        });
    }
    this.token = crxf;
  }

  getLogin(){
    
    //console.log(crxf);
    this.islogin = new Promise(resolve => this.getResponse('check::login').subscribe((res)=>{
        
        resolve(res);
    }));
    
   
  }

  doLogin(user:any,pass:any){
    let params;
    params = {
      "user":user,
      "pwd":pass
    }
    return new Promise(resolve => this.getResponse('auser::login',params).subscribe((res)=>{
        resolve(res);
    }));

  }

  navigate(val){
    this.router.navigate(val);

  }
  
}