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
  quotatype = [];
  today: Date = new Date();
  selectedquota = '';
  selectedroom = 0;
  selectedquotaid = 0;
  fromdate;
  todate;
  serverresp = false;
  find;
  valid;
  found = -1;
  loading = false;
  deleteConfirm = false;
  _new = [];
  rooms:any = [];
  constructor(public app: Apps) { 
    this.roomlist();
  }

  ngOnInit() {
    this.dailyquotalist = [];
    this.quotatype = [];
    //
    this._new['from'] = 0;
    this._new['to'] = 0;
    this._new['roomid'] = 0;
    this._new['quota'] = 0;
    this._new['available'] = 0;
    this.quotalist();
    
  }
  quotalist(){
    
    let httpResp = new Promise((resolve)=>{
      this.app.getResponse("master::get::quota").subscribe((res)=>{
        resolve(res);
      });
    });
    httpResp.then((res: any)=>{
      res = this.app.toJSON(res);
      this.quotatype = res;
    });
  }
  roomlist(){
    let httpResp = new Promise((resolve)=>{
      this.app.getResponse("master::get::roomlist").subscribe((res)=>{
        resolve(res);
      });
    });
    httpResp.then((res: any)=>{
      res = this.app.toJSON(res);
      this.rooms = res;
    });
  }
  resetQuota(){
    this.fromdate = this.app.dt2ngbdt(this.today);
    let todate;
    todate = new Date();
    this.selectedroom = 0;
    this.todate = todate.setDate(this.today.getDate() + 30);
    this.todate = this.app.dt2ngbdt(new Date(this.todate));
    this.getQuota();
  }
  newQuota(){
    console.log(this._new);
  }
  getQuota(ctrl = null){
    
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
    if(this.serverresp){this.found = -1;}
    this.find = {'quota':qid,'from':fromdate.toString(),'to':todate.toString(),'room':this.selectedroom};
      
  }

  getResult(){
    this.loading = true;
    this.dailyquotalist = [];
    //this.app.options = {headers: this.app.headers, responseType:'text'};
    if(this.serverresp){
        let httpResp = new Promise((resolve)=>{
          this.app.getResponse("master::get::dailyquota",this.find).subscribe((res)=>{
            
            resolve(res);
          });
        });
        httpResp.then(res=>{
          
          if(Array.isArray(res)){
            this.dailyquotalist = res;
            this.found = this.find.quota;
            this.loading = false;
          }else{
            if(res['ERR']=='USER_NOT_LOGGEDIN'){this.app.doLogout();}
            this.found = 0;
            this.loading = false;
          }
          
        });
      }else{
        this.dailyquotalist = false;
        this.found = 0;
      }
  }
  validate(){
    let validate = [];
    Object.entries(this._new).forEach((param)=>{
      
      validate[param[0]] = this.app.isEmpty(param[1]);
      
    });
    console.log(validate);
  }
  setupQuota(){
    console.log(this._new);
  }
  delete(i,item){
    this.dailyquotalist[i]['delete'] = item;
  }
  deleteItem(i,item){
    if(item  == this.dailyquotalist[i]['id']){
      this.dailyquotalist.splice(i, 1);
    }
  }
  deleteCancel(i,item){
    delete this.dailyquotalist[i]['delete'];
  }
}