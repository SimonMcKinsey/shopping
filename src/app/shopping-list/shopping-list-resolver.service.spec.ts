import { TestBed } from '@angular/core/testing';

import { ShoppingListResolverService } from './shopping-list-resolver.service';

describe('ShoppingListResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShoppingListResolverService = TestBed.get(
      ShoppingListResolverService
    );
    expect(service).toBeTruthy();
  });
});
