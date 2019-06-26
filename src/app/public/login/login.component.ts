import { Component, Inject } from '@angular/core';
import { Apps } from './../../app.apps';

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 loginForm: FormGroup;
 valid: boolean = false;
 loginResp;
 constructor(private Apps: Apps, private fb: FormBuilder) {
        
        this.loginForm = this.fb.group({
          'user': [null,  [Validators.minLength(4), Validators.required ]],
          'pass': [null,  [Validators.minLength(4), Validators.required ] ]
        });

    //this.rForm = fb.group({'user' : [null, Validators.required], 'pass' : [null, Validators.required]});
    
  }
  get user() { return this.loginForm.get('user'); }
  get pass() { return this.loginForm.get('pass'); }
  submitForm() {
    let credentials = this.loginForm.value;
    this.Apps.doLogin(credentials).then(res => {
      const keys = Object.keys(res);
        console.log(res);
          this.loginResp = {
              "type":keys[0],
              "text":res
          };
          if ( keys[0] === 'RES' || keys[0] === 'INF') {
            
          }
    });
  }
  flipcard(cardview: String){
    this.Apps.view = cardview;
  }

}