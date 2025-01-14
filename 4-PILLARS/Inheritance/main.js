// Why do We Use Inheritance 
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
// Inheritance in OOP allows one class (the child or subclass) to inherit properties and behaviors (methods) 
// from another class (the parent or superclass). This promotes code reuse, reduces redundancy, and helps create 
// a hierarchical structure for better organization and maintainability.
var Person = /** @class */ (function () {
    // Constructor
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        console.log("Hello, my name is ".concat(this.name, " and I am ").concat(this.age, " years old."));
    };
    return Person;
}());
// const person1 = new Person("Alice", 25);
// person1.greet(); // Output: Hello, my name is Alice and I am 25 years old.
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age, role) {
        var _this = _super.call(this, name, age) || this; // Call the parent class constructor
        _this.role = role;
        return _this;
    }
    Employee.prototype.introduce = function () {
        console.log("".concat(this.name, " works as a ").concat(this.role));
    };
    return Employee;
}(Person));
var employee = new Employee("Bob", 30, "Developer");
employee.greet(); // Output: Hello, my name is Bob and I am 30 years old.
employee.introduce(); // Output: Bob works as a Developer.
