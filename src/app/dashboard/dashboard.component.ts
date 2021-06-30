import { Component, OnInit } from '@angular/core';
import { SignupService } from '../services/signup.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  name: string = '';

  constructor() { }

  ngOnInit(): void {
    this.name = localStorage.getItem('name') ?? ''
  }

}
