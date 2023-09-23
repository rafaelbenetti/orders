import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Subject, combineLatest, debounceTime, map, tap } from 'rxjs';
import * as OrderActions from '../../order.action';
import { selectLoading, selectOrders } from '../../order.reducer';

interface SearchParams {
  query: string;
}

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent {
  data$ = combineLatest([
    this.store.pipe(select(selectLoading)),
    this.store.pipe(select(selectOrders)),
  ]).pipe(map(([loading, orders]) => ({ loading, orders })));

  searchParams$: Subject<SearchParams> = new Subject<SearchParams>();
  params: SearchParams = { query: '' };

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.searchParams$
      .pipe(
        debounceTime(500),
        tap((params) => {
          this.store.dispatch(OrderActions.loadAll({ ...params }));
        })
      )
      .subscribe();

    this.searchParams$.next(this.params);
  }

  onPageChange(page: number): void {
    this.searchParams$.next({ ...this.params });
  }

  onSearchChange(query: string): void {
    this.searchParams$.next({ ...this.params, query });
  }
}
