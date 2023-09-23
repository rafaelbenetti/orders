import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map, switchMap } from 'rxjs/operators';

import * as OrderActions from './order.action';
import { OrderService } from './order.service';

@Injectable()
export class OrderEffects {
  get$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OrderActions.loadAll),
      switchMap(({ query }) =>
        this.orderService.get(query).pipe(
          map((result) => OrderActions.loadAllSuccess({ orders: result })),
          catchError((error) => of(OrderActions.loadAllFailure({ error })))
        )
      )
    )
  );

  create$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OrderActions.create),
      concatMap(({ order }) =>
        this.orderService.create(order).pipe(
          map((result) => OrderActions.createSuccess({ order: result })),
          catchError((error) => of(OrderActions.createFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private orderService: OrderService) {}
}
