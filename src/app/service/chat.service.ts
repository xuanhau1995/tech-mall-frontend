import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  baseUrl = 'https://tech-mall-api-ver2.herokuapp.com/api/contact'

  constructor(
    private http: HttpClient
  ) { }
  // cấu hình header
  option = { headers: new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded") };

  submitContact(data: any): Observable<any> {
    return this.http.post(this.baseUrl + '/add', data)
  }
}
