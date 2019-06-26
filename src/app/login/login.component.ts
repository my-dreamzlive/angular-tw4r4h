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
  }

  ngOnInit() {
    console.log(this.App.login);
    if(this.App.login){
      this.router.navigate(['']);
    }
  }

}