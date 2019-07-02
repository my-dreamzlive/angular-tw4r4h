import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Apps } from './../../app.apps';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  navigator;
  constructor(public app: Apps) { }

  ngOnInit() {
   this.navigator = [
     {"order":"1","id":"dashboard","name":"Dashboard","link":[''],"icon":"fas fa-fw fa-tachometer-alt"}
   ]
  }

}