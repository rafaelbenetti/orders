import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Order } from '../../order.model';
import { OrderService } from '../../order.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss'],
})
export class OrderDetailsComponent {
  order$: Observable<Order | undefined>;

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService
  ) {
    this.order$ = this.route.params.pipe(
      switchMap((params) => {
        const customerName = params['customerName'];
        const orderId = params['id'];
        return this.orderService.getByNameAndId(customerName, orderId);
      })
    );
  }
}
