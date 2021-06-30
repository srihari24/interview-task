import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  roleAccessPages: any = {};
  loggedIn= new BehaviorSubject<boolean>(false);;
  constructor(private router: Router) {
    this.roleAccessPages = {
      "1": ["/dashboard", "/report"],
      "2": ["/dashboard", "/report"],
      "3": ["/dashboard"],
      "0":["","/login"]
    }
  }
  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot): boolean {
    console.log("State");
    console.log(state);
    if(localStorage.getItem('role')){
      var router_1=state.url
      var role: string = localStorage.getItem('role')||"0"
      var rolepages:string[]=[]
      rolepages=this.roleAccessPages[role]
      if (rolepages.indexOf(router_1)>-1) {
        return true;
      }
      this.router.navigate(['login'])
      return false;
    }
    else{
      this.router.navigate(['login'])
      return false
    }
  }
  get isLoggedIn() {
    
    if (localStorage.getItem("role"))
      this.loggedIn = new BehaviorSubject<boolean>(true);
    return this.loggedIn.asObservable();
  }
}
