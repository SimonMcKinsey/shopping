import { from, Observable, switchMap } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {
  // products$: Observable<any>;
  products!: Product[];

  constructor(private route: ActivatedRoute) {
    // this.products$ = this.route.data.pipe(
    //   switchMap(({ products }) => from(products))
    // );

    this.route.data.subscribe(({ products }) => {
      this.products = products;
    });
  }

  ngOnInit(): void {}
}
