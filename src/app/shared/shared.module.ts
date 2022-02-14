import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BannerComponent } from './components/banner/banner.component';
import { CategoryHomeComponent } from './components/category-home/category-home.component';
import { CategorySliderComponent } from './components/category-slider/category-slider.component';
import { CardProductComponent } from './components/card-product/card-product.component';
import { CategoryHomeShowMoreComponent } from './components/category-home-show-more/category-home-show-more.component';
@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    BannerComponent,
    CategoryHomeComponent,
    CategorySliderComponent,
    CardProductComponent,
    CategoryHomeShowMoreComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    BannerComponent,
    CategoryHomeComponent,
    CardProductComponent,
    CategoryHomeShowMoreComponent,
    CategorySliderComponent,

  ]
})
export class SharedModule { }
