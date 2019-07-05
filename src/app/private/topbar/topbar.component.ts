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
    this.timer = setInterval(()=>{
      
        this.name = this.app.user.profile.name;
      if(this.name !== 'Loading' && this.name !== undefined){
        clearInterval(this.timer);
      }
    },1000);
    
  }

}