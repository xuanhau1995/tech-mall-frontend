import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  baseUrl = 'https://tech-mall-api-ver2.herokuapp.com/api/category'
  // baseUrl = 'http://localhost:3000/api/category'


  constructor(private http: HttpClient) { }
  getAllCategories() {
    return this.http.get(this.baseUrl + '/list')
  }
  categories() {
    return this.http.get(this.baseUrl + '/aside')
  }

  getIdCategoryBySlug(slug: any) {
    return this.http.get(this.baseUrl + "/getid/" + slug)
  }

  showDetailCategory(parent: any) {
    return this.http.get(this.baseUrl + "/show-category/" + parent)
  }
}
