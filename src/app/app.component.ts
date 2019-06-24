import { Component } from '@angular/core';
import { Apps } from './app.apps';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  App;
  constructor(public Apps: Apps){
    this.App = Apps;
    this.App.view = 'front';
  }
}
