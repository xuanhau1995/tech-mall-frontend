import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-slider',
  templateUrl: './category-slider.component.html',
  styleUrls: ['./category-slider.component.scss']
})
export class CategorySliderComponent implements OnInit {
  @Input() title: any
  @Input() loading: Boolean
  @Input() listProducts: any
  constructor() { }

  ngOnInit(): void {
  }

}
