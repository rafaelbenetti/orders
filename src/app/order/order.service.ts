import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Order, OrderCreateDto } from './order.model';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor() {}

  get(query: string): Observable<Order[]> {
    return of([
      {
        id: '1',
        title: 'testing',
        body: 'one two treee',
      },
      {
        id: '2',
        title: 'testing 2',
        body: 'one two treee 3',
      },
    ]);
  }

  create(order: OrderCreateDto): Observable<Order> {
    return of();
  }
}
