import { Injectable } from '@angular/core';
import { Apps } from './app.apps';
@Injectable()
export class AuthService {

  constructor(private App: Apps) { }

  public Authenticated(){
    this.App.getResponse("check::login");
    console.log('Hi');
  }

}