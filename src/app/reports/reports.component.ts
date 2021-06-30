import { Component, OnInit } from '@angular/core';
import { SignupService } from '../services/signup.service'

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  userlist: any;
  role: string = '';

  constructor(private ss: SignupService) { }

  ngOnInit(): void {
    this.getuser();
    this.role = localStorage.getItem('role') ?? ''

  }

  getuser() {
    this.ss.dashboradget().subscribe((res) => {
      this.userlist = res;
    })
  }

  delete(id: string) {
    this.ss.deleteuser(id).subscribe((res) => {
      this.getuser();
      alert('deleted successfuly');
    }, (err) => {
      alert('something went wrong');
    })

  }
}
