import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
baseUrl: string = 'https://tech-mall-api.herokuapp.com/api/user/'


  constructor(private http: HttpClient) { }
  categories(){
   return this.http.get(this.baseUrl + 'list-category')
  }
}
