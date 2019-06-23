import { Injectable, NgModule, ModuleWithProviders } from '@angular/core';

import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { RouterModule, Routes, Router, ActivatedRoute, NavigationStart, NavigationEnd, ParamMap } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import 'rxjs/add/operator/map';

import { promise } from 'protractor';
import { Config } from '../config/config';
export let post = new HttpParams()
.set('apikey', 'S84pc_fPCPXy8g_Pj0z0MHMJ8I0sdg8sCUl2yy3ONUkuM0l3MvFxLQrxy6jKLNH3cSwqCTUojcwz8quKcvcrDwMA') 
.set('hash', '9282ac3e16b8cbb6b885766f23c8339ebd49594c'); 
// export let post = new HttpParams().set('apikey', 'SktzWUlibWJlRE1YeXdyb0J4L0RTZz09'); // sv2.local
// export let post = new HttpParams().set('apikey','TXVDTjFKLzQxeDlISDZCclRqWlEvUT09'); // SSL_OP_NO_TLSv1.local
export let apilink = 'https://api.prasanthinilayam.in/';

import * as Rx from 'rxjs/Observable';
import { Observable, Subject } from 'rxjs/Rx';

@Injectable()
export class Apps {
  Name = 'SaiAdmin';
  Version = '1.0.0';
  headerConf = {headers: new Headers({ 'Content-Type': 'x-www-form-urlencoded' })};
  constructor(private _config: Config){

  }

}