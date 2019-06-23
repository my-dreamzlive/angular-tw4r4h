import { Injectable, NgModule, ModuleWithProviders } from '@angular/core';

import { Http } from '@angular/http';
import { RouterModule, Routes, Router, ActivatedRoute, NavigationStart, NavigationEnd, ParamMap } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import 'rxjs/add/operator/map';

import { promise } from 'protractor';
import { Config } from './app.config';

export let apilink = 'https://api.prasanthinilayam.in/';

import * as Rx from 'rxjs/Observable';
import { Observable, Subject } from 'rxjs/Rx';

@Injectable()
export class Apps {
  Name = 'SaiAdmin';
  Version = '1.0.0';
  headerConf = {headers: new Headers({ 'Content-Type': 'x-www-form-urlencoded' })};
  constructor(private config: Config){
    config.load();
    var env = config.getEnv('env');
    console.log(env);
  }

}