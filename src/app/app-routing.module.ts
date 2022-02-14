import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { HomeComponent } from './modules/home/home.component';
import { PostsComponent } from './modules/posts/posts.component';
import { FullwidthComponent } from './layouts/fullwidth/fullwidth.component';
import { LoginComponent } from './modules/login/login.component';
import { ProductComponent } from './modules/product/product.component';

const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    component: HomeComponent
  }, {
    path: 'posts',
    component: PostsComponent
  }, 
 
]
}, {
  path: '',
  component: FullwidthComponent,
  children: [
    {
      path: 'login',
      component: LoginComponent,
    },
    {
      path: 'product',
      component: ProductComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
