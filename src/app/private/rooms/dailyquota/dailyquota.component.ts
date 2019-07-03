import { Component, OnInit } from '@angular/core';
import { Apps } from './../../../app.apps';
declare var $;
@Component({
  selector: 'app-dailyquota',
  templateUrl: './dailyquota.component.html',
  styleUrls: ['./dailyquota.component.css']
})
export class DailyquotaComponent implements OnInit {
  dailyquota;
  quotatype;
  today: Date = new Date();
  selectedquota = 0;
  fromdate;
  todate;
  serverresp = false;
  constructor(public app: Apps) { }

  ngOnInit() {
    //this.app.options = {headers: this.app.headers, responseType:'text'};
    
    let httpResp = new Promise((resolve)=>{
      this.app.getResponse("master::check::dailyquota").subscribe((res)=>{
        
        resolve(res);
      });
    });
    httpResp.then(res=>{
      this.quotatype = res;
      
    });
  }

  getQuota(){
    let qid = this.selectedquota;
    let fromdate = this.fromdate;
    let todate = this.todate;
    console.log(qid);
    console.log(fromdate);
    console.log(todate);
    /*let selected = qid.target['options'];
    let quota = {'value':selected.selectedIndex,'text':selected[selected.selectedIndex].text};
    this.fromdate = (fdate == null) ? this.today : fdate;
    if(todate == null){
      todate = new Date();
      this.todate = todate.setDate(this.today.getDate() + 30);
      this.todate = new Date(this.todate);
    }else{
      todate = new Date(todate);
      this.todate = todate;
    }
    let dates = {'from':this.fromdate,'to':this.todate};
    console.log(dates);*/
  }

}