import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
@Injectable()
export class Config {
 private _config: Object;
 private _env: Object;
 public Authenticate: any;
 token;
 
 options;
 constructor(private http: HttpClient) {
   //this.load();
   //console.log(this._config);
   
 }

load() {
 return new Promise((resolve, reject) => {
   
   this.http.get('../assets/env.json')
   .map(res => res)
   .subscribe((env_data) => {
     this._env = env_data;
     this.http.get('../assets/' + env_data.env + '.json')
     .map(res => res)
     .subscribe((data) => {
       this._config = data;
        let headers = new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .set('Authkey', data.api.key).set('AuthHash', data.api.hash);
        this.options = {headers: headers};
        let httpRequest = new HttpParams();
        httpRequest.set('action','request::token');
        let storage = window.localStorage;
        let crxf = storage.getItem('crxf');
        //console.log(crxf);
        if(typeof(crxf)!=='string'){
          this.http.post(data.api.url, req, this.options)
          .map(res => res)
          .subscribe((pdata)=>{
            if(pdata.token !== 'undefined'){
              storage.setItem('crxf',pdata.token);
              
              this.token = pdata.token;
              resolve(true);
            }
          });
        }else{
          this.token = crxf;
          resolve(true);
        }
     });
   });
 });
}
Auth(){
  
  
  return new Promise((resolve, reject)=>
  {
     setTimeout(()=>{
            this.getResponse("master::check::login").subscribe(res => {
            this.Authenticate = res;
            resolve();
          });
       }, 3000);
   });
}
getResponse(action, params: any = null) {
  let req = new HttpParams();
  let headers = new HttpHeaders()
  .set('Content-Type', 'application/x-www-form-urlencoded')
  .set('Authkey', this._config.api.key).set('AuthHash', this._config.api.hash);
  this.options = {headers: headers};
  req = req.set('action', action).set('token',this.token);
  
  if ( params !== null ) {

    Object.entries(params).forEach((param) => {

      req = req.set(param[0], param[1]);
    });
  }
  return this.http.post(this._config.api.url, req, this.options).map(res => res);
}

 getEnv(key: any) {
   return this._env[key];
 }
 get(key: any) {
   return this._config[key];
 }
};