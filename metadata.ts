import "reflect-metadata"; // Ads the "Reflect" variable to global scope

// A metadata is some hidden information that does not appear anyplace until the reflect-metadata package is used.
// The information that we associate with an object will become its own object.

const plane = {
  color: "red",
};

Reflect.defineMetadata("note", "hi there", plane); // attach metadata to the "plane" object
Reflect.defineMetadata("height", 10, plane); // attach metadata to the "plane" object

const note = Reflect.getMetadata("note", plane); // retrieve metadata to the "plane" object
const height = Reflect.getMetadata("height", plane); // retrieve metadata to the "plane" object

console.log(note);
console.log(height);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// The metadata can be used to attach information to a property on an object as well

Reflect.defineMetadata("note", "hi there", plane, "color"); // attach metadata to the "color" key from the "plane" object

const note2 = Reflect.getMetadata("note", plane, "color"); // retrieve metadata to the "color" key from the "plane" object

console.log(note2);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

@controller
class Plane {
  color: string = "red";

  @get("/login")
  fly(): void {
    console.log("vrrrrrr");
  }
}

function get(path: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata("path", path, target, key);
  };
}

function controller(target: typeof Plane) {
  for (let key in target.prototype) {
    const path = Reflect.getMetadata("path", target.prototype, key);
    const middleware = Reflect.getMetadata("path", target.prototype, key);

    router.get(path, middleware, target.prototype[key]);
  }
}
