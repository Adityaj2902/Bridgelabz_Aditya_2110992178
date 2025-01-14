// Why do We Use Inheritance 

// Inheritance in OOP allows one class (the child or subclass) to inherit properties and behaviors (methods) 
// from another class (the parent or superclass). This promotes code reuse, reduces redundancy, and helps create 
// a hierarchical structure for better organization and maintainability.

class Person {
    name: string;
    age: number;

    // Constructor
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// const person1 = new Person("Alice", 25);
// person1.greet(); // Output: Hello, my name is Alice and I am 25 years old.


class Employee extends Person {
    role: string;

    constructor(name: string, age: number, role: string) {
        super(name, age);  // Call the parent class constructor
        this.role = role;
    }

    introduce() {
        console.log(`${this.name} works as a ${this.role}`);
    }
}

const employee = new Employee("Bob", 30, "Developer");
employee.greet();    // Output: Hello, my name is Bob and I am 30 years old.
employee.introduce(); // Output: Bob works as a Developer.
