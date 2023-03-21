import { Component } from '@angular/core';
import { Iproduct } from './interfaces/iproduct';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
products:Iproduct[];

  constructor(private ProductsService:ProductsService){
    this.products = ProductsService.products;
  }
}
