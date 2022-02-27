import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { HomeComponent } from './modules/home/home.component';
import { FullwidthComponent } from './layouts/fullwidth/fullwidth.component';
import { ProductComponent } from './modules/product/product.component';
import { CategoryComponent } from './modules/category/category.component';
import { CartComponent } from './modules/cart/cart.component';

const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    component: HomeComponent
  },
  {
    path: 'product/:id',
    component: ProductComponent
  },
  {
    path: 'category/:parent',
    component: CategoryComponent
  },
  {
    path: 'category/:parent/:slug',
    component: CategoryComponent
  },
  {
    path: 'cart',
    component: CartComponent
  }

  ]
}, {
  path: '',
  component: FullwidthComponent,
  children: [
    // {
    //   path: 'product',
    //   component: ProductComponent
    // },
    // {
    //   path: 'category',
    //   component: CategoryComponent
    // }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
