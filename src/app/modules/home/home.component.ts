import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '@src/app/service/cart.service';
import { CategoriesService } from 'src/app/service/categories.service';
import { ProductService } from '../../service/product.service';
import { Cart } from '@src/Models/cart';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  listProducts: any
  listProductsFilter: any
  phonesSlug: string = 'cell-phones'
  phonesId: any
  accessoriesSlug: string = 'accessories'
  accessoriesId: any
  smartWatchSlug: string = 'smart-watches'
  smartWatchId: any
  loading: Boolean = true
  listSmartWatch: any
  linkSW: string = '/category/smart-watches'
  linkCP: string = '/category/cell-phones-accessories/cell-phones'
  listCategoryHome: any

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
  constructor(private productService: ProductService, private categoryService: CategoriesService, private cartService: CartService) { }

  ngOnInit() {
    this.categoryHome()

    this.categoryService.getIdCategoryBySlug(this.accessoriesSlug).subscribe((data: any) => {
      this.accessoriesId = data['data']._id
      // console.log(this.accessoriesId)

      this.productService.getProductsByCategoryId(this.accessoriesId).subscribe((data: any) => {
        this.listProductsFilter = data['data']
        // console.log(this.listProductsFilter)
      })
    })


    // filter Laptop product
    this.categoryService.getIdCategoryBySlug(this.smartWatchSlug).subscribe((data: any) => {
      this.smartWatchId = data['data']._id
      // console.log(this.smartWatchId)

      this.productService.getProductsByCategoryId(this.smartWatchId).subscribe((data: any) => {
        this.loading = true
        this.listSmartWatch = data['data']
        this.loading = false
        // console.log(this.listSmartWatch)
      })
    })

    this.categoryService.getIdCategoryBySlug(this.phonesSlug).subscribe((data: any) => {
      this.phonesId = data['data']._id

      this.productService.getProductsByCategoryId(this.phonesId).subscribe((data: any) => {
        this.loading = true
        this.listProducts = data['data'].filter((item: any) => {
          return item.best_seller == true
        })
        this.loading = false
        // console.log(this.listProducts)
      })
    })
  }

  categoryHome() {
    this.listCategoryHome = [
      {
        name: "Computers & Accessories",
        img: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_2x._SY608_CB431800964_.jpg",
        url: '/category/computers/laptop-accessories'
      },
      {
        name: "For Cell Phones & Accessories",
        img: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_260x260._SY608_CB442725065_.jpg",
        url: '/category/cell-phones-accessories/cell-phones'
      }, {
        name: "Find your ideal TV",
        img: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY304_CB432517900_.jpg",
        url: '/category/electronics/tv'
      }, {
        name: "Shop activity trackers and smartwatches",
        img: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_SmartWatch_2X._SY608_CB639922111_.jpg",
        url: '/category/smart-watches'
      },
    ]
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

    var cart = new Cart(this.id_user, this.name, this.id_product, this.price, this.qty, this.img, this.status, this.style, this.color, this.size)
    this.cartService.addProductToCart(cart).subscribe((item: any) => {
      console.log(item)
    })

  }
}
