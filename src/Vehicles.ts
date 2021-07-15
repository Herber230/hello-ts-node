abstract class Vehicle {
  constructor(protected velicity: number) {}

  drive(time: number): string {
    return `Ride ${time * this.velicity} km`;
  }
}

export class Bike extends Vehicle {}

export class Car extends Vehicle {}
