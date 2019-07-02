import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Apps } from './../../app.apps';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  navigator;
  constructor(public app: Apps) { }

  ngOnInit() {
   this.navigator = [
     {"id":"dashboard","name":"Dashboard","link":[''],"icon":"fas fa-fw fa-tachometer-alt"},
     {"id":"rooms","name":"Rooms","link":[],"icon":"fa fa-square",
        "sub":{"name":"Rooms & Quota Setup","items":[
          {"name":"Daily Quota","link":['/dailyquota']},
          {"name":"Rooms Type","link":['/roomstype']},
          {"name":"Rooms Quota","link":['/roomsquota']},
        ]
      }
     },
     {"id":"bookings","name":"Bookings","link":[],"icon":"fa fa-book",
        "sub":{"name":"User Bookings","items":[
          {"name":"Individual","link":['/bookings'],"icon":"fa fa-user"},
          {"name":"Group","link":['/groupbookings'],"icon":"fa fa-users"},
        ]
      }
     },
     {"id":"transactions","name":"Transactions","link":['/transactions'],"icon":"fa fa-list-ol"},
     {"id":"users","name":"Users","link":[],"icon":"fa fa-users",
        "sub":{"name":"Users","items":[
          {"name":"Admins","link":['/admins'],"icon":"fa fa-user-secret"},
          {"name":"Universal","link":['/users'],"icon":"fa fa-universal-access"},
        ]}
     },
     {"id":"settings","name":"Settings","link":['/globals'],"icon":"fa fa-cog"},
   ]
  }

}