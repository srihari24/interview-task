import { Component, OnInit } from '@angular/core';
import { AuthGuard } from './guard/auth.guard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'interview-task';
  IsLog: boolean = false
  constructor(public auth: AuthGuard) {

    if (location.href.indexOf("login") > -1 || location.href.indexOf("sessionexpire") > -1) {
      this.IsLog = false;
    }
    else {
      this.IsLog = true;
    }
    this.auth.isLoggedIn.subscribe((val: boolean) => {
      this.IsLog = val;
    });
  }
  ngOnInit() {
  }
}
