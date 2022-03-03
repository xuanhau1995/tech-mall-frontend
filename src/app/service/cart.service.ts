import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseUrl } from 'src/environments/environment';
// import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private http: HttpClient) {

  }
  // cấu hình header
  option = { headers: new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded") };

  getCartProduct(userId: any): Observable<any> {
    return this.http.get(`${baseUrl}` + '/cart/get_list/' + userId)
  }
  addProductToCart(data: any): Observable<any> {
    let body = new URLSearchParams();
    body.set('id_user', data.id_user);
    body.set('id_product', data.id_product);
    body.set('name', data.name);
    body.set('img', data.img);
    body.set('price', data.price)
    body.set('qty', data.qty)
    body.set('status', data.status)
    body.set('style', data.style)
    body.set('color', data.color)
    body.set('size', data.size)

    return this.http.post(`${baseUrl}` + '/cart/add', body, this.option)
  }

  removeProductCart(data: any) {
    let body = new URLSearchParams()
    body.set('id', data)
    return this.http.post(`${baseUrl}` + '/cart/delete', body, this.option)
  }
}


