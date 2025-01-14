// We use polymorphism in OOP to allow objects of different classes to be 
// treated as instances of a common superclass. It enables one interface to
//  represent different underlying forms (methods), making the code more 
//  flexible, reusable, and easier to extend. Polymorphism supports method 
//  overriding (runtime) and method overloading (compile-time), enhancing 
//  adaptability and scalability in software design.

class Animal {
    makeSound() {
        console.log("Some generic animal sound");
    }
}

class Dog extends Animal {
    makeSound() {
        console.log("Bark!");
    }
}

class Cat extends Animal {
    makeSound() {
        console.log("Meow!");
    }
}

const dog = new Dog();
dog.makeSound(); // Output: Bark!

const cat = new Cat();
cat.makeSound(); // Output: Meow!
