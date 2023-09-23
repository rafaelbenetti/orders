import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createFeature, createReducer, createSelector, on } from '@ngrx/store';

import * as OrderActions from './order.action';
import { Order } from './order.model';

export interface State extends EntityState<Order> {
  error: unknown | null;
  loading: boolean;
}

export const adapter = createEntityAdapter<Order>();

export const initialState: State = adapter.getInitialState({
  error: null,
  loading: false,
});

export const { name, reducer, selectOrderState, selectLoading, selectError } =
  createFeature({
    name: 'order',
    reducer: createReducer(
      initialState,
      on(OrderActions.loadAll, (state) => ({ ...state, loading: true })),
      on(OrderActions.loadAllSuccess, (state, { orders }) =>
        adapter.setAll(orders, { ...state, loading: false })
      ),
      on(OrderActions.loadAllFailure, (state, { error }) => ({
        ...state,
        loading: false,
        error,
      })),
      on(OrderActions.create, (state) => ({ ...state, loading: true })),
      on(OrderActions.createSuccess, (state, { order }) => {
        return adapter.addOne({ ...order }, { ...state, loading: false });
      }),
      on(OrderActions.createFailure, (state, { error }) => ({
        ...state,
        loading: false,
        error,
      }))
    ),
  });

export const { selectAll: selectOrders } =
  adapter.getSelectors(selectOrderState);

export const selectOrderById = (orderId: string) =>
  createSelector(selectOrders, (orders: Order[]) =>
    orders.find((o) => o.id === orderId)
  );
