import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

// Gọi ActivatedRoute, ParamMap
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  detailProduct: any
  slug: any
  constructor(private router: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe((params: ParamMap) => {
      this.slug = params.get('id');

      // get info product
      this.productService.DetailProduct(this.slug.split('.')[0])
        .subscribe((item: any) => {
          this.detailProduct = item['data'][0]
          console.log(this.detailProduct)
        })
    })
  }
}
