import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  login(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/user/login`, data)
  }

  signUp(data: any): Observable<any> {
    return this.http.post(`${baseUrl}` + '/user/sign-up', data)
  }

  logout() { }

  me(id: any) {
    return this.http.get(`${baseUrl}/user/info-user/` + id)
  }
}
