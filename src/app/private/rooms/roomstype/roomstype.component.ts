import { Component, OnInit } from '@angular/core';

import { Apps } from './../../../app.apps';
@Component({
  selector: 'app-roomstype',
  templateUrl: './roomstype.component.html',
  styleUrls: ['./roomstype.component.css']
})
export class RoomstypeComponent implements OnInit {
  _new: any;
  rooms: object = [];
  constructor(public app: Apps) {
    this.roomlist();
  }
  roomlist(){
    let httpResp = new Promise((resolve)=>{
      this.app.getResponse("master::get::roomlist").subscribe((res)=>{
        resolve(res);
      });
    });
    httpResp.then((res: Response)=>{
      res = this.app.toJSON(res);
      this.rooms = res;
    });
  }
  ngOnInit() {
    this._new = [];
    
  }
  newRoom(){
    console.log(this._new);
  }
}