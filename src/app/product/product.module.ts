import { NgModule } from '@angular/core';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-listings/product-listings.component';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';

//const routes: Routes = [
//  {
//   path: 'products', component:ProductComponent,
//    children:[
//      {path: '', component:ProductListComponent},
//      {path: 'detail',component:ProductDetailComponent}
//    ]
//  }
//];

const routes: Routes = [
  {
    path: 'products', // 親ルートのパスを 'products' に設定する
    component: ProductComponent, // 親ルートで ProductComponent を表示する
    children: [
      { path: '', component: ProductListComponent }, // 子ルートのパスを空に設定し、ProductListComponent を表示する
      { path: ':productId', component: ProductDetailComponent } // 'detail' パスに対して ProductDetailComponent を表示する
    ]
  }
];

@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailComponent,
    ProductListComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  providers: [],
  bootstrap: []
})
export class ProductModule { }
