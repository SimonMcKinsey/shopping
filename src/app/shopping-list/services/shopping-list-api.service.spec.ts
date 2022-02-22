import { Product } from '../models/product.model';

import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ShoppingListApiService } from './shopping-list-api.service';

describe('PlaylistApiService', () => {
  let shoppingListApiService: ShoppingListApiService,
    httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ShoppingListApiService],
    });

    (shoppingListApiService = TestBed.get(ShoppingListApiService)),
      (httpTestingController = TestBed.get(HttpTestingController));
  });

  it('should retrieve all products', () => {
    ShoppingListApiService.fetchProducts().subscribe((products: Product[]) => {
      expect(products.length).toBe(2, 'incorrect number of products');

      const product = products.find((product) => product.id == 1);

      expect(product?.name).toBe('IPhone');
    });

    const req = httpTestingController.expectOne('/users');

    expect(req.request.method).toEqual('GET');
  });

  it('should give an error if fetch products fails', () => {});
  afterEach(() => {
    httpTestingController.verify();
  });
});
