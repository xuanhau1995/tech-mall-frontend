import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '@src/app/service/cart.service';
import { Cart } from '@src/Models/cart';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']
})
export class CardProductComponent implements OnInit {
  @Input() product: any

  //
  // data from to submit add to cart
  slug: any = ''
  name: any = ''
  price: any = 0
  id_product: any = ''
  qty: any = 1
  id_user: any = localStorage.getItem('user_id')
  img: any = ''
  status: Boolean = true
  gallery: any = []
  style: any = '2'
  color: any = '1'
  size: any = '3'
  constructor(private cartService: CartService, private toast: ToastrService) { }

  ngOnInit(): void {
  }

  addToCart(data: any) {
    this.id_user = localStorage.getItem('user_id')
    this.id_product = data._id
    this.name = data.name
    this.price = data.price
    this.qty = data.qty
    this.img = data.img
    this.status = data.status
    this.style = data.style
    this.color = data.color
    this.size = data.size
    if (!this.id_user) {
      this.toast.warning('Please Login to add to cart')
    } else {
      var cart = new Cart(this.id_user, this.name, this.id_product, this.price, this.qty, this.img, this.status, this.style, this.color, this.size)
      this.cartService.addProductToCart(cart).subscribe((item: any) => {
        if (item['kq'] === 1) {
          window.location.reload()
          this.toast.success('Added Product to cart')
        } if (item['kq'] === 0) {
          this.toast.warning('This product has been added to cart')
        }
      })
    }
  }
}
