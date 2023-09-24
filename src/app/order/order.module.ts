import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { OrderLoaderComponent } from './components/order-loader/order-loader.component';
import { OrderPaginatorComponent } from './components/order-paginator/order-paginator.component';
import { OrderSearchComponent } from './components/order-search/order-search.component';
import { OrderRoutingModule } from './order-routing.module';
import { OrderStoreModule } from './order-store.module';
import { OrderService } from './order.service';
import { OrderCreateEditComponent } from './pages/order-create-edit/order-create-edit.component';
import { OrderDetailsComponent } from './pages/order-details/order-details.component';
import { OrdersComponent } from './pages/orders/orders.component';

@NgModule({
  declarations: [
    OrderPaginatorComponent,
    OrderSearchComponent,
    OrderLoaderComponent,
    OrdersComponent,
    OrderDetailsComponent,
    OrderCreateEditComponent,
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    HttpClientModule,
    OrderStoreModule,
    ReactiveFormsModule,
  ],
  providers: [OrderService],
})
export class OrderModule {}
