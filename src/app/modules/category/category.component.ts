import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BrandService } from 'src/app/service/brand.service';
import { CategoriesService } from 'src/app/service/categories.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  parent: any
  child: any
  categoryParentId: any
  categoryChildId: any
  parentName: any
  listProduct: any
  brands: any
  categories: any
  listProductChild: any
  check: any
  loading: Boolean = true
  isEmpty: Boolean = false
  constructor(private router: ActivatedRoute, private categoryService: CategoriesService, private productService: ProductService, private brandService: BrandService) { }

  ngOnInit(): void {
    this.router.queryParamMap.subscribe((query) => {
    })

    this.router.paramMap.subscribe((params: ParamMap) => {
      this.parent = params.get('parent')
      this.child = params.get('slug')
      this.check = params


      // get id category by parent 
      this.categoryService.getIdCategoryBySlug(this.parent)
        .subscribe((item: any) => {
          this.categoryParentId = item['data']._id
          this.parentName = item['data'].name

          // get product by categoryId
          if (this.check.params.parent !== this.check.params.slug) {
            this.productService.getProductsByCategoryId(this.categoryParentId)
              .subscribe((list: any) => {
                this.loading = true
                this.listProduct = list['data']
                this.loading = false

                if (this.listProduct === undefined) {
                  this.isEmpty = true
                }
              })
          }

          // get brand 
          this.brandService.brand(this.categoryParentId).subscribe((data: any) => {
            this.brands = data['data']
          })

          // show Category
          this.categoryService.showDetailCategory(this.categoryParentId).subscribe((data: any) => {
            this.categories = data['data']
          })
        })

      // get id category by child 
      if (this.check.params.slug) {
        this.categoryService.getIdCategoryBySlug(this.child)
          .subscribe((item: any) => {
            this.categoryChildId = item['data']._id

            // get product by categoryId
            this.productService.getProductsByCategoryId(this.categoryChildId)
              .subscribe((list: any) => {
                this.loading = true
                this.listProductChild = list['data']
                this.loading = false
                // console.log(this.listProductChild)
                if (this.listProduct === undefined) {
                  this.isEmpty = true
                }
              })
          })
      }
    })

  }
}
