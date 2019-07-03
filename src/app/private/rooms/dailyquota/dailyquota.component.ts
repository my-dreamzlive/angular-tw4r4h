import { Component, OnInit } from '@angular/core';
import { Apps } from './../../../app.apps';
@Component({
  selector: 'app-dailyquota',
  templateUrl: './dailyquota.component.html',
  styleUrls: ['./dailyquota.component.css']
})
export class DailyquotaComponent implements OnInit {
  dailyquota;
  constructor(public app: Apps) { }

  ngOnInit() {
    //this.app.options = {headers: this.app.headers, responseType:'text'};
    let httpResp = new Promise((resolve)=>{
      this.app.getResponse("master::check::dailyquota").subscribe((res)=>{
        resolve(res);
      });
    });
    httpResp.then(res=>{
      console.log(res);
    });
  }

}