import { Component, OnInit } from '@angular/core';
import { Apps } from './../../app.apps';
@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  name = 'Loading';
  timer;
  constructor(public app: Apps) { }

  ngOnInit() {
    console.log(this.app.user.status);
    this.timer = setInterval(()=>{
      if(typeof(this.app.user.status) !== undefined){
        this.name = this.app.user.profile.name;
        clearInterval(this.timer);
      }
    },1000);
    
  }

}