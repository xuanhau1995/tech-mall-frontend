import { Component, OnInit, Input } from '@angular/core';
import { CategoriesService } from '../../../service/categories.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() routerLink: string | any[]
  categories: any
  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.categoriesService.categories().subscribe((data: any) => {
      this.categories = data['data']
      // console.log(this.categories)

    })
  }
}
