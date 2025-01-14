// JavaScript: JavaScript doesn't support abstract classes. You can simulate abstract behavior by throwing errors in methods of a base class.
// TypeScript: TypeScript supports abstract classes. An abstract class can have methods that are not implemented and must be implemented by subclasses.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// We use an abstract class in OOP to define a blueprint for other classes. 
// It allows us to declare methods that must be implemented by subclasses, 
// while also providing common functionality that can be shared. 
// Abstract classes enable code reuse, enforce a structure, and 
// ensure that subclasses follow a certain design while allowing 
// flexibility in their implementation.
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.move = function () {
        console.log("Moving...");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // sound() {
    //   console.log("Bark");
    // }
    Dog.prototype.move = function () {
        console.log("Moving The Dog Rotweiiler");
    };
    return Dog;
}(Animal));
var Rotweiller = new Dog();
Rotweiller.sound();
Rotweiller.move();
