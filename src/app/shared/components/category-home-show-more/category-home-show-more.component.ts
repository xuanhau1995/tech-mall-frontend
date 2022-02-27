import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-home-show-more',
  templateUrl: './category-home-show-more.component.html',
  styleUrls: ['./category-home-show-more.component.scss']
})
export class CategoryHomeShowMoreComponent implements OnInit {
  @Input() listProducts: any
  constructor() { }

  ngOnInit(): void {
  }

}
