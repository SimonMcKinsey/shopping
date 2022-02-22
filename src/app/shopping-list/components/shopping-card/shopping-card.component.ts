import { Product } from './../../models/product.model';
import { Component, Input, OnInit } from '@angular/core';
import { ShoppingListStore } from '../../store/shopping-list.store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-shopping-card',
  templateUrl: './shopping-card.component.html',
  styleUrls: ['./shopping-card.component.scss'],
})
export class ShoppingCardComponent implements OnInit {
  @Input() product!: Product;
  shoppingForm!: FormGroup;

  constructor(
    private shoppingListStore: ShoppingListStore,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.shoppingForm = this.fb.group({
      quantity: [
        '',
        {
          validators: [Validators.required],
        },
      ],
    });
  }

  onInputChanged() {
    console.log('hello');
    console.log(this.product);
    const { quantity } = this.shoppingForm.value;
    const product = this.product;
    product.quantity = quantity;
    this.shoppingListStore.addToProductSummary({ ...product });
  }
}
