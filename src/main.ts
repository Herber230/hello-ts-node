import {Restaurant} from './Restaurant'

class Application {

  constructor() {
  }

  static start () {
    const myRestaurant = new Restaurant();
    myRestaurant.start(15);
  }
}

Application.start();




