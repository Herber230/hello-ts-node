import { Courier } from "./Courier";
import { Order } from "./types";
import {getRandomTime, printOrder} from './utils';

class Restaurant {
  
  prepareOrder(orderNumber: number): Promise<Order> {
    const task = new Promise<Order>((resolve, reject) => {
      console.log(`[>] New order requested ${orderNumber}`);

      const newOrder: Order = {
        number: orderNumber,
        cookStart: new Date(),
      };

      setTimeout(() => {
        newOrder.cookFinish = new Date();
        resolve(newOrder);
      }, getRandomTime(1500, 2500));
    });

    return task;
  }

  start(limit: number) {
    let count = 1;
    while (count <= limit) {
      this.prepareOrder(count)
        .then(order => {
          const courier = new Courier();
          return courier.deliver(order);
        })
        .then(order => {
          printOrder(order);
        })

      count++;
    }
  }

  getCourier(): Courier {
    return new Courier();
  }
}

export { Restaurant };
