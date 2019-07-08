import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  bookings = [];
  constructor() { }

  ngOnInit() {
  }
  getBookings(){
    let resp = new Promise((resolve)=>{
      this.app.getResponse('master::get::bookings').subscribe((res)=>{
        resolve(res);
      });
    });
    resp.then((res)=>{
      let restype = this.app.resptype(res);
      let reserr = this.app.respERR(res);
      let response = this.app.resp(res);
      if(!reserr){
          this.bookings = response[0];
      }else{
          console.log(res);
      }
      
    });
  }
}