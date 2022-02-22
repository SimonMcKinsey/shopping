import { ShoppingListResolverService } from './shopping-list-resolver.service';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShoppingListComponent } from './shopping-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ShoppingListComponent,
    children: [
      {
        path: '',
        component: ShoppingCartComponent,
        resolve: {
          products: ShoppingListResolverService,
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppinglistRoutingModule {}
