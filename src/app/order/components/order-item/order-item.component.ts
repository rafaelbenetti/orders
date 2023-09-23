import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../../order.model';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss'],
})
export class OrderItemComponent {
  @Output() delete = new EventEmitter<string>();
  @Input() order: Order;

  constructor(private router: Router) {}

  onEdit(id: string): void {
    this.router.navigateByUrl(`orders/edit/${id}`);
  }
}
