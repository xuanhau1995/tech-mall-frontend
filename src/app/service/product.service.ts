import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl = 'https://tech-mall-api-ver2.herokuapp.com/api/product'
  // baseUrl = 'http://localhost:3000/api/product'
  constructor(private http: HttpClient) {

  }

  ListProducts() {
    return this.http.get(this.baseUrl + '/list')
  }

  DetailProduct(slug: any) {
    return this.http.get(this.baseUrl + '/info/' + slug)
  }

  getProductsByCategoryId(parent: any) {
    return this.http.get(this.baseUrl + '/listProduct/' + parent)
  }

  getRelatedProduct(productId: any, categoryId: any) {
    return this.http.get(this.baseUrl + '/related__products/' + productId + '/' + categoryId)
  }


}
