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
  addScript(src){
    let script = this.renderer.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    this.renderer.appendChild(this.document.body, script);
  }
  ngOnInit(): void {
    this.titleService.boot();
    this.renderer.setAttribute(this.document.body,'id','page-top');
    this.addScript('https://code.jquery.com/jquery-3.3.1.slim.min.js');
    this.addScript('https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js');
    this.addScript('https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js');
    this.App.router.events.pipe(
      filter(event => event instanceof NavigationStart)
    ).subscribe(event => {
      });

      const navigated$ = this.App.router.events.map(e => e instanceof NavigationEnd);

    navigated$.subscribe(res => {
      
    });
  }

}
