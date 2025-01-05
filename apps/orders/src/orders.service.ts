import { Injectable } from '@nestjs/common';
import { CreateOrderRequest } from './dto/create-order.request';

@Injectable()
export class OrdersService {
  async createOrder(request: CreateOrderRequest) {
    console.log(request);
  }
}
