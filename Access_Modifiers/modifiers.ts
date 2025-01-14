// JavaScript: JavaScript classes do not support access modifiers (like public, private, or protected). All properties and methods are public by default.
// TypeScript: TypeScript introduces access modifiers, allowing you to control the visibility and accessibility of class members.
// These modifiers are public, private, and protected.


class Car {
    private engine: string;
    public make: string;
  
    constructor(make: string, engine: string) {
      this.make = make;
      this.engine = engine;
    }
  
    public startEngine() {
      console.log("Engine started!");
    }
  }
  
  const car = new Car("Toyota", "V6");
  console.log(car.make); // Public
  console.log(car.engine);
  // car.engine; // Error: Property 'engine' is private
  
//   In JavaScript, all properties and methods are effectively public, unless you use closures or other techniques to simulate privacy.