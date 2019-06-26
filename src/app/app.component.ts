import { Component } from '@angular/core';
import { Apps } from './app.apps';
import { RouterModule, Routes, Router, NavigationStart, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  App;
  constructor(public Apps: Apps){
    this.App = Apps;
    this.App.getLogin();
  }

  ngOnInit(): void {
    this.App.router.events.pipe(
      filter(event => event instanceof NavigationStart)
    ).subscribe(event => {
      });

      const navigated$ = this.App.router.events.map(e => e instanceof NavigationEnd);

    navigated$.subscribe(res => {
      
      if(res === true){
        this.App.islogin.then((resp)=>{
          if(typeof(resp['status'] !== 'undefined')){
            if(resp['status'] === true || resp['status']=== '1'){
                //this.App.navigate(["/dashboard"]);
              }
            }
        });

      }
    });
  }

}
