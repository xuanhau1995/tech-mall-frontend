import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { Cart } from '@src/Models/cart';
// Gọi ActivatedRoute, ParamMap
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CartService } from '../../service/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  detailProduct: any
  relatedProduct: any
  categoryId: any
  msg: any = ''
  isMsg: Boolean = false
  isAddToCart: Boolean = false
  isMsgQty: Boolean = false
  isDecrement: Boolean = false
  // data from to submit add to cart
  priceDemo: any = 200
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
  constructor(private router: ActivatedRoute, private routerPush: Router, private productService: ProductService, private cartService: CartService, private toastr: ToastrService, private routerGo: Router) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe((params: ParamMap) => {
      this.slug = params.get('id');

      // get info product
      this.productService.DetailProduct(this.slug.split('.')[0])
        .subscribe((item: any) => {
          this.detailProduct = item['data'][0]
          // Get some info product
          this.name = item['data'][0].name
          this.slug = item['data'][0].slug
          this.id_product = item['data'][0]._id
          this.img = item['data'][0].img
          if (item['data'][0].price_deals === null || item['data'][0].price_deals === 0) {
            this.price = item['data'][0].price_origin
          } else {
            this.price = item['data'][0].price_deals
          }
          this.status = item['data'][0].status
          this.style = item['data'][0].style
          this.color = item['data'][0].color
          this.size = item['data'][0].size
          this.categoryId = item['data'][0].parent

          // get Related Product
          this.productService.getRelatedProduct(this.id_product, this.categoryId).subscribe((data: any) => {
            this.relatedProduct = data['data']
          })
        })
    })

  }
  goToOrder() {
    this.routerPush.navigate([`/order/${this.id_product}`])
  }

  addToCart() {
    if (!this.id_user) {
      this.isMsg = true
      this.msg = ''
    }

    if (this.qty === 0) {
      this.isMsgQty = true
      this.msg = 'Please choose at least 1 item'
    }
    else {
      var cart = new Cart(this.id_user, this.name, this.id_product, parseInt(this.price), parseInt(this.qty), this.img, this.status, this.style, this.color, this.size)
      this.cartService.addProductToCart(cart).subscribe((data: any) => {
        // window.location.reload();
        console.log(data)
        if (data['kq'] === 1) {
          this.isAddToCart = true
          window.location.reload();
          this.toastr.success('Added product to cart')
        }
        if (this.id_user) {
          if (data['kq'] === 0) {
            this.toastr.warning('This product has been added to cart')
          }
        }
      })
    }
  }
  closeMsg() {
    this.isMsg = false
  }

  goToLogin() {
    this.routerGo.navigate(['/login'])
  }

  increment() {
    this.isMsgQty = false
    this.qty += 1;
    this.price = this.qty * this.price
  }

  decrement() {
    if (this.qty <= 1) {
      this.isMsgQty = true
      this.msg = 'Please choose at least 1 item'
    } else {
      this.qty -= 1;
      console.log(this.qty)
    }
  }
}
