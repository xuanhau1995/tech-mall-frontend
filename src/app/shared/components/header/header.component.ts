import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '@src/app/service/auth.service';
import { CategoriesService } from '../../../service/categories.service';
import { CartService } from '../../../service/cart.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() routerLink: string | any[]
  categories: any
  currentValue: Number = 0;
  isLogined: Boolean = false
  me: any


  constructor(private categoriesService: CategoriesService, private auth: AuthService, private cart: CartService) {
  }

  ngOnInit() {
    this.categoriesService.categories().subscribe((data: any) => {
      this.categories = data['data']
    })
    this.checkLogin()
    this.getProfile()
    this.getCartNumber()

  }
  checkLogin() {
    const token = localStorage.getItem("token_tech_mall")
    if (token) {
      this.isLogined = true
    }
  }

  getProfile() {
    const userId = localStorage.getItem('user_id')
    if (userId) {
      this.auth.me(userId).subscribe((data: any) => {
        this.me = data['data'][0]
        // console.log(this.me)
      })
    }
  }
  getCartNumber() {
    const userId = localStorage.getItem('user_id')
    if (userId) {
      this.cart.getCartProduct(userId).subscribe((data: any) => {
        this.currentValue = data['data'].length
        console.log(this.currentValue)
      })
    }
  }

}
