import { Component, OnInit } from '@angular/core';

import { Apps } from '../app.apps';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  App;
  constructor(public Apps: Apps) { 
    this.App = Apps;
    this.App.view = 'front';
    this.App.getLogin();
  }

  ngOnInit() {
    this.App.islogin.then(res => {
        if(typeof(res['status'] !== 'undefined')){
          if(res['status']){
            this.App.navigate(['dashboard']);
          }
        }
    });
  }

}