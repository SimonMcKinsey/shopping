import { ReactiveFormsModule } from '@angular/forms';
import { CoreViewModule } from './../core-view/core-view.module';
import { ShoppinglistRoutingModule } from './shopping-list-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShoppingFiltersComponent } from './components/shopping-filters/shopping-filters.component';
import { ShoppingCardComponent } from './components/shopping-card/shopping-card.component';
import { MaterialModule } from '../core-view/material.module';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';

@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingCartComponent,
    ShoppingFiltersComponent,
    ShoppingCardComponent,
    CartSummaryComponent,
  ],
  imports: [
    CommonModule,
    CoreViewModule,
    MaterialModule,
    ShoppinglistRoutingModule,
    ReactiveFormsModule,
  ],
})
export class ShoppingListModule {}
