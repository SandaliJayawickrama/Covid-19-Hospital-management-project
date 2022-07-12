import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

import { Order } from './order.model';

@Injectable()

export class OrderService {
    selectedOrder: Order;
    orders: Order[];
    readonly baseURL = 'http://localhost:3000/orders';

  constructor(private http : HttpClient) { }

  postOrder(ord : Order){
    return this.http.post(this.baseURL, ord);

  }
}
