import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
baseUrl: string = 'https://tech-mall-api.herokuapp.com/api/user/'
  constructor(private http: HttpClient) { 
    
  }
  ListProducts(){
   return this.http.get(this.baseUrl + 'list-products')
  }
}
