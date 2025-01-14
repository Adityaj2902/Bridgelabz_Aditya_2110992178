// An interface in TypeScript is a way to define the shape or structure of an object. 
// It is used to specify what properties or methods an object should have, without actually implementing them. 
// Think of it as a blueprint for an object.
var Employee = /** @class */ (function () {
    function Employee(name, age) {
        this.name = name;
        this.age = age;
    }
    Employee.prototype.greet = function () {
        console.log("Hello, my name is ".concat(this.name));
    };
    return Employee;
}());
var Aditya = new Employee('Aditya', 18);
Aditya.greet();
// interfaces are used to define the structure of an object. 
// They act as a blueprint that specifies the shape of an object,
//  including its properties and method signatures. However, 
//  interfaces do not provide implementations—they only enforce the presence of certain properties 
//  and methods in any class that implements them.
