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
  changed = false;
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
  changeRoom(val = null, i = null){
    this.changed = true;
    this.rooms[i]['code'] = this.app.filterCode(this.rooms[i]['code']);
    this.rooms[i]['available'] = this.app.filterDigits(this.rooms[i]['available'].toString());
    
    console.log(this.rooms[i]);
  }
  newRoom(){
    if(typeof(this._new.roomtype)!=='undefined'){
      this._new.code = this.app.toCode(this._new.roomtype);
    }
    console.log(this._new);
  }
  saveChanges(){

  }
}