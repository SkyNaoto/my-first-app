import { Component } from '@angular/core';

@Component({
  selector: 'app-product-listings',
  templateUrl: './product-listings.component.html',
  styleUrls: ['./product-listings.component.scss']
})
export class ProductListComponent {

  products: number[] = [1,2,3,4]

}
