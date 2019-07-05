
import { Injectable, NgModule, ModuleWithProviders } from '@angular/core';
import { Title } from '@angular/platform-browser';

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
  login: any;
  view: any;
  user: any;
  storage = window.localStorage;
  constructor(public config: Config, private http: HttpClient,  public router: Router, public route: ActivatedRoute, private titleService: Title){
    
    this.env = config.getEnv('env');
    this.info = config.getEnv('info');
    this.api = config.get('api');
    this.headers = new HttpHeaders()
    .set('Content-Type', 'application/x-www-form-urlencoded')
    .set('Authkey', this.api.key).set('AuthHash', this.api.hash);
    this.options = {headers: this.headers};
    // this.options = {headers: this.headers, responseType:'text'};
    this.token = config.token;
    this.user = config.Authenticate;
    if(typeof(this.user.id)!=='undefined'){
        this.login = true;
    }else{
        this.login = false;
    }
  }
  ngbdt2dt(ngbdt){
    return new Date(ngbdt.year + '-' + ngbdt.month + '-' + ngbdt.day);
  }
  dt2ngbdt(dt){
    return {'year':dt.getFullYear(),'month':(dt.getMonth()+1),'day':dt.getDay()};
  }
  dt2ymd(dt){
    return dt.getFullYear() + '-' + (dt.getMonth()+1) + '-' + dt.getDay();
  }
  ngbdt2ymd(ngbdt){
    return ngbdt.year + '-' + ngbdt.month + '-' + ngbdt.day;
  }
  getResponse(action, params: any = null) {
    let req = this.httpRequest;
    req = req.set('action', action).set('token',this.token);
    
    if ( params !== null ) {
      Object.entries(params).forEach((param) => {
        if(typeof(param[0]) == 'string' && typeof(param[1])=='string'){
          req = req.set(param[0], param[1]);
        }
      });
    }
    return this.http.post(this.api.url, req, this.options).map(res => res);
  }

  reAuth(){
    this.token = this.config.token;
    this.user = this.config.Authenticate;
  }

  doLogin(credentials){
   this.options = {headers: this.headers, responseType:'text'};
    return new Promise(resolve => this.getResponse('master::user::login',credentials).subscribe((res)=>{
      res = typeof(res) !== 'object' ? JSON.parse(res): res;
      
      if(typeof(res['xtoken'])!=='undefined'){
       
        this.storage.setItem('xtoken',res['xtoken']);
        this.config.xtoken = res['xtoken'];
        this.navigate(['']);
      }
        resolve(res);
    }));

  }
  doLogout(){
    this.options = {headers: this.headers, responseType:'text'};
    return new Promise(resolve => this.getResponse('master::user::logout').subscribe((res)=>{
        if(typeof(res)=='string'){
          res = JSON.parse(res);
        }
        const keys = Object.keys(res);
        if (typeof(keys[0]) !== 'undefined' && ( keys[0] === 'RES' || keys[0] === 'INF')) {
          this.storage.removeItem('xtoken');
          delete this.config.xtoken;
          this.navigate(['/login']);
        }
        resolve(res);
    }));
  }
  navigate(val){
    this.router.navigate(val);

  }
  
}