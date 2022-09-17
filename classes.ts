// public -> This method can be called any where, any time

// private -> This method can only be called bt other methods in this class

// protected -> This method can be called by other methods in this class, or
//              by other methods in child classes

class Vehicle {
  protected honk(): void {
    console.log("beep");
  }
}

class Car extends Vehicle {
  private drive(): void {
    console.log("vroom");
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car();
car.startDrivingProcess();
