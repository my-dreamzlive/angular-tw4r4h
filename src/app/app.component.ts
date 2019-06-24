import { Component } from '@angular/core';
import { Apps } from './app.apps';
import { Auth } from './app.auth';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  App;
  constructor(public Apps: Apps, private Auth: Auth){
    this.App = Apps;
    this.App.view = 'front';
  }
}
