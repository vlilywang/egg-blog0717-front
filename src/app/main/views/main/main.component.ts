import { Component, HostBinding, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { WebSocketSubject, WebSocketSubjectConfig } from 'rxjs/webSocket';
import { Subscription } from 'rxjs';
export class Message {
  constructor(
      public sender: string,
      public content: string,
      public isBroadcast = false,
  ) { }
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
})
export class MainComponent implements OnInit, AfterViewInit , OnDestroy {

  ngOnDestroy(): void {
    if (this.sockersubcribe) {
       this.socket$.unsubscribe();
       this.sockersubcribe.unsubscribe();
    }
  }
  ngAfterViewInit() {


  }

  // tslint:disable-next-line:member-ordering
  private socket$: WebSocketSubject<any>;
  // tslint:disable-next-line:member-ordering
  private wsSubjectConfig: WebSocketSubjectConfig<any> = {
    url: 'ws://localhost:8999'
  };
  // tslint:disable-next-line:member-ordering
  sockersubcribe: Subscription;
  constructor(
    private router: Router) {
  }

  ngOnInit() {

  }

}
