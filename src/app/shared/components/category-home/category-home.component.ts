import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-home',
  templateUrl: './category-home.component.html',
  styleUrls: ['./category-home.component.scss']
})
export class CategoryHomeComponent implements OnInit {
  @Input() title: any
  @Input() listProducts: any
  @Input() loading: any
  @Input() link: any
  @Input() addToCart: any
  constructor() { }

  ngOnInit(): void {
  }

}
