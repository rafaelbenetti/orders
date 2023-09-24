import { Component, Input } from '@angular/core';
import {
  ORDER_STATUSES,
  OrderStatus,
  OrderStatusConfig,
} from './order-status.model';

@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.scss'],
})
export class OrderStatusComponent {
  @Input() status: string;

  orderStatusConfig: OrderStatusConfig;

  ngOnInit(): void {
    this.orderStatusConfig = ORDER_STATUSES[this.status as OrderStatus];
  }
}
