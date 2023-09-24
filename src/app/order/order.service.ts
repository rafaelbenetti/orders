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
    return of({
      customerName: 'TestCustomer1',
      returnOrderId: '03828932-2bd0-4985-b9f9-11251e100545',
      status: 'NF_ENVIADA',
      notaFiscal: 'nf123456',
      productName: 'Produto1',
      serialNumber: 'sn123456',
      description:
        'Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Interagi no mé, cursus quis, vehicula ac nisi. Nulla id gravida magna, ut semper sapien. Sapien in monti palavris qui num significa nadis i pareci latim.',
      name: 'Mussum Ipsum, cacilds vidis litro abertis',
      createdOn: '2023-09-23T12:57:29',
      updatedOn: '2023-09-23T12:57:29',
    }).pipe(
      map((order) => {
        return {
          ...order,
          id: order.returnOrderId,
          createdOn: new Date(order.createdOn),
          updatedOn: new Date(order.updatedOn),
        };
      })
    );
    return this.http
      .get<Order>(`${this.url}/${customerName}/order/${orderId}`)
      .pipe(
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
