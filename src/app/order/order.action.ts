import { createAction, props } from '@ngrx/store';
import { Order, OrderCreateDto } from './order.model';

export const loadAll = createAction(
  '[Order Page] Load All',
  props<{ query: string }>()
);

export const loadAllSuccess = createAction(
  '[Order API] Load All Success',
  props<{ orders: Order[] }>()
);

export const loadAllFailure = createAction(
  '[Order API] Load All Failure',
  props<{ error: unknown }>()
);

export const create = createAction(
  '[Order Page] Create',
  props<{ order: OrderCreateDto }>()
);

export const createSuccess = createAction(
  '[Order API] Create Success',
  props<{ order: Order }>()
);

export const createFailure = createAction(
  '[Order API] Create Failure',
  props<{ error: unknown }>()
);
