import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import * as OrderActions from '../../order.action';
import { selectOrderById } from '../../order.reducer';

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
  ) {
    this.route.params
      .pipe(
        switchMap((params) => {
          this.orderId = params['id'];
          return this.store.select(selectOrderById(this.orderId));
        })
      )
      .subscribe((post) => {
        if (post) {
          this.orderForm.controls['title'].disable();
          this.orderForm.patchValue(post);
        }
      });
  }

  onSave(): void {
    const order = this.orderForm.value;
    this.store.dispatch(OrderActions.create({ order }));
    this.router.navigateByUrl('orders');
  }
}
