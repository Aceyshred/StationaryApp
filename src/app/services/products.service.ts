import { Injectable } from '@angular/core';
import { Iproduct } from '../interfaces/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products:Iproduct[] = [
    {id: 1, product: "Stapler"},
    {id: 2, product: "Pencil"},
    {id: 3, product: "Notebook"},
    {id: 4, product: "Binder"}
  ]

  constructor() { }
}
