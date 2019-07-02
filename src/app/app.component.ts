import { Component, Inject, Renderer2  } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { Apps } from './app.apps';
import { TitleService } from './title.service';
import { RouterModule, Routes, Router, NavigationStart, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  App;
  constructor(@Inject(DOCUMENT) private document: Document, private renderer: Renderer2, public Apps: Apps, private titleService: TitleService){
    this.App = Apps;
  }
  ngOnInit(): void {
    this.titleService.boot();
    this.renderer.setAttribute(this.document.body,'id','page-top');

    this.App.router.events.pipe(
      filter(event => event instanceof NavigationStart)
    ).subscribe(event => {
      });

      const navigated$ = this.App.router.events.map(e => e instanceof NavigationEnd);

    navigated$.subscribe(res => {
      
    });
  }

}
