import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'https://tech-mall-api-ver2.herokuapp.com/api/user'
  constructor(private http: HttpClient) { }
  login(data: any): Observable<any> {
    return this.http.post(this.baseUrl + '/login', data)
  }

  signUp(data: any): Observable<any> {
    return this.http.post(this.baseUrl + '/sign-up', data)
  }

  logout() { }

  me(id: any) {
    return this.http.get(this.baseUrl + "/info-user/" + id)
  }
}
