import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

listProducts : any
  constructor(private productService: ProductService) { }

  ngOnInit() {
   this.productService.ListProducts().subscribe(data => {
     this.listProducts = data
   })
  }

}
