import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../../service/categories.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
categories: any
  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.categoriesService.categories().subscribe(data => {
      this.categories = data
    })
  }
}
