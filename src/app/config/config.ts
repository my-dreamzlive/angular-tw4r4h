import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
@Injectable()
export class Config {
 private _config: Object;
 private _env: Object;
 constructor(private http: Http) {
   this.http.get('./src/app/config/env.json')
   //.map(res => res.json())
   .subscribe((env_data) => {
     console.log(env_data);
   });
 }
 getEnv(key: any) {
   return this._env[key];
 }
 get(key: any) {
   return this._config[key];
 }
};