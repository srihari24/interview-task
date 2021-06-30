import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterStateSnapshot } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Input() public IsLog: boolean = false
  role: string = "";
  currentRoute: string = "/dashboard"
  constructor(public Router: Router,private App:AppComponent,private activatedRoute: ActivatedRoute) {
    this.currentRoute=location.href

    if (location.href.indexOf("login") > -1 || location.href.indexOf("sessionexpire") > -1) {
      this.role = "";
    }
    else {
      this.role = localStorage.getItem("role") ?? "1";
    }
  }

  ngOnInit(): void {
  }
  navigate(route: string) {
    this.currentRoute = route;
    this.Router.navigate([route])
  }
  isActive(currentRoute: string) {
    if (this.currentRoute.indexOf(currentRoute)>-1) {
      return "active"
    }
    else {
      return "inActive"
    }
  }
  logOut() {
    this.App.IsLog=false;
    localStorage.clear();

  }
}
