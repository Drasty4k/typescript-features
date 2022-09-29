class Boat {
  @testDecorator           // When a Decorator is wrapped around a property definition within a class, 
  color: string = "red";   // we don't have direct access to that property since it's in the Constructor rather than the Prototype, as methods are.

  get formattedColor(): string {
    return `This boats color is ${this.color}`;
  }

  @logError("Oops, boat was sunk")
  pilot(
    @parameterDecorator speed: string,
    @parameterDecorator generateWake: boolean
  ): void {
    if (speed === "fast") {
      console.log("swish");
    } else {
      console.log("nothing");
    }
  }
}

function parameterDecorator(target: any, key: string, index: number) {
  console.log(key, index);
}

function testDecorator(target: any, key: string) {
  console.log(target.color); // undefined
}

function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function () {
      try {
        method();
      } catch (e) {
        console.log(errorMessage);
      }
    };
  };
}
