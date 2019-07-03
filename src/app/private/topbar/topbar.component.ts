import { Component, OnInit } from '@angular/core';
import { Apps } from './../../app.apps';
@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  name = 'Loading';
  constructor(public app: Apps) { }

  ngOnInit() {
    let timer = setTimeout(()=>{
      this.name = typeof(this.app.user.profile.name) !== 'undefined' ? this.app.user.profile.name : this.name;
      
      
    },2000);
    
  }

}