class Vehicle {
  drive(): void {
    console.log("vrrum vrum");
  }

  honk(): void {
    console.log("beep");
  }
}

const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();
