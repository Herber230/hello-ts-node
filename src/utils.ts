import { Order } from "./types";

export const getRandomTime = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

export const printOrder = (order: Order) => {

  const printTime = (time: Date) => {
    return time ? `${time.getMinutes()}:${time.getSeconds()}:${time.getMilliseconds()}` : '--';
  }

  console.log(
    `[>] Order #${
      order.number
    } - start: ${printTime(order.cookStart)} finish: ${printTime(order.cookFinish)} pick: ${printTime(order.pick)} deliver: ${printTime(order.deliver)}`
  );
};
