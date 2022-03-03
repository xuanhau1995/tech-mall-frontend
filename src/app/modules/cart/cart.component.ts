import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { CartService } from '../../service/cart.service';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  listCart: any
  isLogined: Boolean = false
  id_cart: any = ''
  subtotal: Number = 0
  totalPrice: any = 0
  priceArray: any
  constructor(private cartService: CartService, private toast: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.getCartList()
    this.checkLogin()
  }

  getCartList() {
    const userId = localStorage.getItem('user_id')
    this.cartService.getCartProduct(userId).subscribe((response: any) => {
      this.listCart = response['data']
      if (response['kq'] === 1) {
        this.subtotal = response['data'].length
      }

      // get total price
      this.priceArray = response['data'].map((res: any) => {
        return res.price
      })

      let num = this.priceArray
      let sum = 0
      num.forEach(function (element: any) {
        sum += element
      });
      this.totalPrice = sum
    })
  }

  removeCart(id: any) {
    this.cartService.removeProductCart(id).subscribe((data: any) => {
      // console.log(data)
      window.location.reload();
      this.toast.success('Removed!')
    })
  }

  goToCheckOut() {
    this.router.navigate(["/check-out"])
  }

  checkLogin() {
    const userId = localStorage.getItem("user_id")
    if (userId) {
      this.isLogined = true
    }
  }
}
