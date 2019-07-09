import { Component, OnInit } from '@angular/core';
import { Apps } from './../../app.apps';
@Component({
  selector: 'app-globals',
  templateUrl: './globals.component.html',
  styleUrls: ['./globals.component.css']
})
export class GlobalsComponent implements OnInit {

  constructor(public app: Apps) { }

  ngOnInit() {
  }
  getGlobals(){
    let resp = new Promise((resolve)=>{
      this.app.getResponse('master::get::globals').subscribe((res)=>{
        resolve(res);
      });
    });
    resp.then((res)=>{
      console.log(res);
    });
  }
}