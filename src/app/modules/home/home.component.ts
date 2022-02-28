import { Component, Input, OnInit } from '@angular/core';
import { data } from 'autoprefixer';
import { CategoriesService } from 'src/app/service/categories.service';
import { ProductService } from '../../service/product.service';

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
  constructor(private productService: ProductService, private categoryService: CategoriesService) { }

  ngOnInit() {


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
}
