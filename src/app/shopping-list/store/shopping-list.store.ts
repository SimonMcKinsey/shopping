import { Product } from './../models/product.model';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

// Better to put inside a module provider and not 'root'
// I'm in a hurry...
@Injectable({ providedIn: 'root' })
export class ShoppingListStore {
  private product$ = new Subject<Product>();

  selectedProductsSummary(): Observable<Product> {
    return this.product$.asObservable();
  }

  addToProductSummary(product: Product) {
    this.product$.next(product);
  }
}
