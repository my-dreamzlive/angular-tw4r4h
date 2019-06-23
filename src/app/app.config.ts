import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
@Injectable()
export class Config {
 private _config: Object;
 private _env: Object;
 constructor(private http: Http) {
   //this.load();
   //console.log(this._config);
 }

load() {
 return new Promise((resolve, reject) => {
   this.http.get('../assets/env.json')
   .map(res => res.json())
   .subscribe((env_data) => {
     this._env = env_data;
     this.http.get('../assets/' + env_data.env + '.json')
     .map(res => res.json())
     .subscribe((data) => {
       this._config = data;
       resolve(true);
     });
   });
 });
}

 getEnv(key: any) {
   return this._env[key];
 }
 get(key: any) {
   return this._config[key];
 }
};