import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  baseUrl = 'https://tech-mall-api-ver2.herokuapp.com/api/brand'
  // baseUrl = 'http://localhost:3000/api/brand'

  constructor(private http: HttpClient) { }
  brand(parent: any) {
    return this.http.get(this.baseUrl + '/list-brand/' + parent)
  }
}


