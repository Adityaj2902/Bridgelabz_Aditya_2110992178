// JavaScript: JavaScript classes do not support access modifiers (like public, private, or protected). All properties and methods are public by default.
// TypeScript: TypeScript introduces access modifiers, allowing you to control the visibility and accessibility of class members.
// These modifiers are public, private, and protected.
var Car = /** @class */ (function () {
    function Car(make, engine) {
        this.make = make;
        this.engine = engine;
    }
    Car.prototype.startEngine = function () {
        console.log("Engine started!");
    };
    return Car;
}());
var car = new Car("Toyota", "V6");
console.log(car.make); // Public
// car.engine; // Error: Property 'engine' is private
