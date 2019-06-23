import { Injectable, NgModule, ModuleWithProviders } from '@angular/core';

import { RouterModule, Routes, Router, ActivatedRoute, NavigationStart, NavigationEnd, ParamMap } from '@angular/router';

import { HttpClient, HttpParams, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import 'rxjs/add/operator/map';

import { promise } from 'protractor';
import { Config } from './app.config';


import * as Rx from 'rxjs/Observable';
import { Observable, Subject } from 'rxjs/Rx';
@Injectable()
export class Apps {
  env: string;
  api: any;
  info: any;
  options = {headers: new Headers({ 'Content-Type': 'x-www-form-urlencoded' }), responseType: 'text'};
  httpRequest = new HttpParams();
  constructor(private config: Config, private http: HttpClient){
    this.env = config.getEnv('env');
    this.info = config.getEnv('info');
    this.api = config.get('api');
    let token;
    
    token = new Promise(resolve => this.getResponse('request::token').subscribe(resolve));
    token.then(res =>{
      console.log(res);
    });
  }
  getResponse(action, params: any = null) {
    let req = this.httpRequest;
    req = req.set('action', action).set('apikey',this.api.key).set('hash',this.api.hash);
    if ( params !== null ) {

      Object.entries(params).forEach((param) => {

        req = req.set(param[0], param[1]);
      });
    }


      return this.http.post(this.api.url + 'request.php', req).map(res => res);
    }
   
  
}