import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderCreateEditComponent } from './pages/order-create-edit/order-create-edit.component';
import { OrderDetailsComponent } from './pages/order-details/order-details.component';
import { OrdersComponent } from './pages/orders/orders.component';

const routes: Routes = [
  {
    path: 'view/:id',
    component: OrderDetailsComponent,
  },
  {
    path: 'create',
    component: OrderCreateEditComponent,
  },
  {
    path: 'edit/:id',
    component: OrderCreateEditComponent,
  },
  {
    path: '',
    component: OrdersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderRoutingModule {}
