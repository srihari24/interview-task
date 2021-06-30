import { Component, OnInit } from '@angular/core';

import { SignupService } from '../services/signup.service';
import { signup } from '../model.ts/signup'
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {
  signupObj!: signup;
  roleslist: any;
  constructor(private ss: SignupService, private router: Router) { }

  ngOnInit(): void {

    this.signupObj = new signup;
    this.getroes();
    this.signupObj.gender = 'male'
  }
  Register() {
    this.ss.signupPost(this.signupObj).subscribe((res) => {
      alert('user added successfuly')
      this.router.navigate(['login'])
    }, (err) => {
      alert('something went wrong');
    })
  }


  getroes() {
    this.ss.getroles().subscribe((res) => {
      console.log(res);
      this.roleslist = res;
    })
  }
}
