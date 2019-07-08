import { Component, OnInit } from '@angular/core';
import { Apps } from './../../app.apps';
@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  transactionlist = [];
  transtype = ['','C','G'];
  constructor(public app: Apps) {this.getlistOfTransaction();}

  ngOnInit() {
  }
  getlistOfTransaction(){
    let resp = new Promise((resolve)=>{
      this.app.getResponse('master::get::transactions').subscribe((res)=>{
        resolve(res);
      });
    });
    resp.then((res)=>{
      let restype = this.app.
      this.transactionlist = res;
      console.log(res);
    });
  }

}