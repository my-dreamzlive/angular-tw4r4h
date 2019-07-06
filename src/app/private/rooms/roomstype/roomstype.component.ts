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
      //res = this.app.toJSON(res);
      console.log(res);
      this.rooms = res;
    });
  }
  ngOnInit() {
    this._new = [];
    
  }
  changeRoom(){
    console.log(this.rooms);
  }
  newRoom(){
    if(typeof(this._new.roomtype)!=='undefined'){
      this._new.code = this.app.toCode(this._new.roomtype);
    }
    console.log(this._new);
  }
}