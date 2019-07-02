import { Component, OnInit } from '@angular/core';
import { Apps } from './../../app.apps';
import * as $ from 'jquery';
@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  constructor(public app: Apps) { }

  ngOnInit() {
  }

}