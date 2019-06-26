import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apps } from '../app.apps';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  App;
  constructor(public Apps: Apps, public router: Router) { 
    this.App = Apps;
    this.App.view = 'front';
    this.App.getLogin();
  }

  ngOnInit() {
    this.App.islogin.then(res => {
        if(typeof(res['status'] !== 'undefined')){
          if(res['status'] === true){
            this.router.navigate([""]);
          }
        }
    });
  }

}