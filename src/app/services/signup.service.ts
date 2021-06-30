import { Injectable } from '@angular/core';

import { from, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { signup } from '../model.ts/signup';
import { login } from '../model.ts/login';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  constructor(private http: HttpClient) { }

  signupPost(signupObj: signup): Observable<any> {
    return this.http.post('http://localhost:3400/post', JSON.stringify(signupObj), this.httpOptions)
  }


  getroles(): Observable<any> {
    return this.http.get('http://localhost:3400/getroles', this.httpOptions)
  }



  loginpost(loginObj: login): Observable<any> {
    return this.http.post('http://localhost:3400/loginpost', JSON.stringify(loginObj), this.httpOptions)
  }
  dashboradget(): Observable<any> {
    var path = localStorage.getItem('role') == '1' ? 'getreguser' : 'get-staff'
    return this.http.get(`http://localhost:3400/${path}`, this.httpOptions)

  }

  deleteuser(id: string): Observable<any> {
    return this.http.delete(`http://localhost:3400/delete/${id}`, this.httpOptions)
  }

}