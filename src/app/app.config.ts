import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
@Injectable()
export class Config {
 private config: Object;
 private env: Object;
 constructor(private http: Http) {
   this.http.get('../assets/env.json')
   .map(res => res.json())
   .subscribe((env_data) => {
      this.env = env_data;
      this.http.get('../assets/' + env_data.env + '.json')
      .map(res => res.json())
      .subscribe((data) => {
        this.config = data;
        
      });
   });
 }
 getEnv(key: any) {
   return this.env[key];
 }
 get(key: any) {
   return this.config[key];
 }
};