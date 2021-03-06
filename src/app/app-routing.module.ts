import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { HomeComponent } from './modules/home/home.component';
import { FullwidthComponent } from './layouts/fullwidth/fullwidth.component';
import { ProductComponent } from './modules/product/product.component';
import { CategoryComponent } from './modules/category/category.component';
import { CartComponent } from './modules/cart/cart.component';
import { LoginComponent } from './modules/login/login.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { OrderComponent } from './modules/order/order.component';
import { SignUpComponent } from './modules/sign-up/sign-up.component';

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
  },
  {
    path: 'check-out',
    component: OrderComponent
  },
  {
    path: 'order/:id',
    component: OrderComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  }

  ]
}, {
  path: '',
  component: FullwidthComponent,
  children: [
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'sign-up',
      component: SignUpComponent
    }
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
  imports: [RouterModule.forRoot(routes,
    {
      scrollPositionRestoration: 'enabled', // Add options right here
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
