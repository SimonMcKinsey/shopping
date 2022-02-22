import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { EMPTY, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Product } from './models/product.model';
import { ShoppingListApiService } from './services/shopping-list-api.service';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListResolverService implements Resolve<Product[]> {
  constructor(private shoppingListApiService: ShoppingListApiService) {}

  resolve() {
    return this.shoppingListApiService.fetchProducts().pipe(
      catchError(() => {
        // Here we can put ERROR logic.
        // Maybe a snackbar.
        return EMPTY;
      })
    );
  }
}
