import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, switchMap } from 'rxjs';
import { Order } from '../../order.model';
import { selectOrderById } from '../../order.reducer';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss'],
})
export class OrderDetailsComponent {
  order$: Observable<Order | undefined>;

  constructor(private store: Store, private route: ActivatedRoute) {
    this.order$ = this.route.params.pipe(
      switchMap((params) => {
        return this.store.select(selectOrderById(params['id']));
      })
    );
  }
}
