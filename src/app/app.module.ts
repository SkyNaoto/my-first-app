import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { DetailComponent } from './product/product-detail/detail/detail.component';
import { DetailListComponent } from './product/product-detail/detail/detail-list/detail-list.component';
import { DetailMemoComponent } from './product/product-detail/detail/detail-memo/detail-memo.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
