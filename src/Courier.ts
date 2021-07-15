import { Order } from "./types";
import { getRandomTime } from "./utils";

export class Courier {

  deliver(order: Order): Promise<Order> {

    return new Promise<Order>((resolve, reject) => {
      order.pick = new Date();
      setTimeout(() => {
        order.deliver = new Date();
        resolve(order);
      }, getRandomTime(1000, 2500));
    });
  
  }
}
