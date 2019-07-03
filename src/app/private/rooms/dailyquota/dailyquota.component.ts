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
  dailyquotalist;
  quotatype;
  today: Date = new Date();
  selectedquota = '';
  selectedquotaid = 0;
  fromdate;
  todate;
  serverresp = false;
  find;
  constructor(public app: Apps) { }

  ngOnInit() {
    //this.app.options = {headers: this.app.headers, responseType:'text'};
    console.log(this.app.dt2ngbdt(this.today));
    let httpResp = new Promise((resolve)=>{
      this.app.getResponse("master::check::quota").subscribe((res)=>{
        
        resolve(res);
      });
    });
    httpResp.then(res=>{
      this.quotatype = res;
      
    });
  }
  resetQuota(){
    this.fromdate = this.app.dt2ngbdt(this.today);
    let todate;
    todate = new Date();
    this.todate = todate.setDate(this.today.getDate() + 30);
    this.todate = this.app.dt2ngbdt(new Date(this.todate));
    this.getQuota();
  }
  getQuota(ctrl = null){
    if(ctrl !== null){
      
    }
    let qid = this.selectedquotaid;
    let qindex = (parseInt(qid) - 1);
    this.selectedquota = this.quotatype[qindex];
    let fromdate = this.fromdate;
    let todate = this.todate;
    
    this.serverresp = (typeof(this.selectedquota) !== 'undefined') ? true : false;
    this.fromdate = (fromdate == null) ? this.app.dt2ngbdt(this.today) : fromdate;
    if(todate == null){
      todate = new Date();
      this.todate = todate.setDate(this.today.getDate() + 30);
      this.todate = this.app.dt2ngbdt(new Date(this.todate));
    }else{
      
      this.todate = todate;
    }
    fromdate = this.app.ngbdt2ymd(this.fromdate);
    todate = this.app.ngbdt2ymd(this.todate);
    this.find = {'quota':qid,'from':fromdate.toString(),'to':todate.toString()};
      
  }

  getResult(){
    if(this.serverresp){
        let httpResp = new Promise((resolve)=>{
          this.app.getResponse("master::check::dailyquota",this.find).subscribe((res)=>{
            
            resolve(res);
          });
        });
        httpResp.then(res=>{
          this.dailyquotalist = res;
          console.log(res);
        });
      }else{
        this.dailyquotalist = false;
      }
  }

}