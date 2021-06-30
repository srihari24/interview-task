import { Component, OnInit } from '@angular/core';
import { SignupService } from '../services/signup.service';
import { login } from '../model.ts/login';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginObj !: login;

  constructor(private ss: SignupService, private router: Router, private App: AppComponent) { }

  ngOnInit(): void {
    this.loginObj = new login;

  }


  loginsubmit() {

    this.ss.loginpost(this.loginObj).subscribe(
      (res) => {

        localStorage.setItem('role', res[0].designation)
        localStorage.setItem('name', res[0].name)
        this.App.IsLog = true;
        this.router.navigate(['/dashboard'])
      }, (err) => {
        console.log(err);
        alert(err.error.error)
      })

  }

}
