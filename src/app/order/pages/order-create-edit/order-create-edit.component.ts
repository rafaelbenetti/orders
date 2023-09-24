import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { ActivatedRoute, Router } from '@angular/router';
import * as OrderActions from '../../order.action';

@Component({
  selector: 'app-order-create-edit',
  templateUrl: './order-create-edit.component.html',
  styleUrls: ['./order-create-edit.component.scss'],
})
export class OrderCreateEditComponent {
  orderId: string;
  orderForm: FormGroup = new FormGroup({
    title: new FormControl(null, Validators.required),
    body: new FormControl(null, Validators.required),
  });

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  onSave(): void {
    const order = this.orderForm.value;
    this.store.dispatch(OrderActions.create({ order }));
    this.router.navigateByUrl('orders');
  }
}
