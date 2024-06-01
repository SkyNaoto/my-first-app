import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';
import { DetailListComponent } from './detail-list/detail-list.component';
import { DetailMemoComponent } from './detail-memo/detail-memo.component';
import { ProductDetailComponent } from '../product-detail.component';

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
    path: 'products/detail', // 親ルートのパスを 'products' に設定する
    component: ProductDetailComponent, // 親ルートで ProductComponent を表示する
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' }, // 子ルートのパスを空に設定し、ProductListComponent を表示する        
      { path: 'list', component: DetailListComponent }, // 子ルートのパスを空に設定し、ProductListComponent を表示する
      { path: 'memo', component: DetailMemoComponent } // 'detail' パスに対して ProductDetailComponent を表示する
    ]
  }
];

@NgModule({
  declarations: [
    DetailComponent,
    DetailMemoComponent,
    DetailListComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  providers: [],
  bootstrap: []
})
export class ProductModule { }
