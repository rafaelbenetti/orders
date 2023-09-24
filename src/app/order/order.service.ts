import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Order, OrderCreateDto, OrderDetails } from './order.model';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  url: string = `${environment.apiUrl}/return-orders`;

  constructor(private http: HttpClient) {}

  get(query: string): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.url}/orders`).pipe(
      map((orders) => {
        return orders.map((order) => {
          return {
            ...order,
            id: order.returnOrderId,
            createdOn: new Date(order.createdOn),
            updatedOn: new Date(order.updatedOn),
          };
        });
      })
    );
  }

  getByNameAndId(
    customerName: string,
    orderId: string
  ): Observable<OrderDetails> {
    return this.http.get<Order>(`${this.url}/order/${orderId}`).pipe(
      map((order) => {
        return {
          ...order,
          id: order.returnOrderId,
          createdOn: new Date(order.createdOn),
          updatedOn: new Date(order.updatedOn),
        };
      })
    );
  }

  create(order: OrderCreateDto): Observable<Order> {
    return of();
  }
}
