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
  accessoriesSlug: string = 'accessories'
  smartWatchSlug: string = 'smart-watches'
  accessoriesId: any
  smartWatchId: any
  loading: Boolean = false
  listSmartWatch: any
  constructor(private productService: ProductService, private categoryService: CategoriesService) { }

  ngOnInit() {


    this.categoryService.getIdCategoryBySlug(this.accessoriesSlug).subscribe((data: any) => {
      this.accessoriesId = data['data']._id
      // console.log(this.accessoriesId)

      this.productService.getProductsByCategoryId(this.accessoriesId).subscribe((data: any) => {
        this.listProductsFilter = data['data']
        if (data['kq'] === 1) {
          this.loading = true
        }
      })
    })



    // filter Laptop product
    this.categoryService.getIdCategoryBySlug(this.smartWatchSlug).subscribe((data: any) => {
      this.smartWatchId = data['data']._id
      console.log(this.smartWatchId)

      this.productService.getProductsByCategoryId(this.smartWatchId).subscribe((data: any) => {
        this.listSmartWatch = data['data']
        if (data['kq'] === 1) {
          this.loading = true
        }
        console.log(this.listSmartWatch)
      })
    })

    this.productService.ListProducts().subscribe((data: any) => {
      this.listProducts = data['data'].filter((item: any) => {
        return item.best_seller == true
      })
    })


  }
}
