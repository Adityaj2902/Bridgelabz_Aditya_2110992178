// JavaScript: JavaScript doesn't support abstract classes. You can simulate abstract behavior by throwing errors in methods of a base class.
// TypeScript: TypeScript supports abstract classes. An abstract class can have methods that are not implemented and must be implemented by subclasses.


// We use an abstract class in OOP to define a blueprint for other classes. 
// It allows us to declare methods that must be implemented by subclasses, 
// while also providing common functionality that can be shared. 
// Abstract classes enable code reuse, enforce a structure, and 
// ensure that subclasses follow a certain design while allowing 
// flexibility in their implementation.

abstract class Animal {
    abstract sound(): void;
    
    move(): void {
      console.log("Moving...");
    }
  }
  
  class Dog extends Animal {
    sound() {
      console.log("Bark");
    }
    move(){
        console.log("Moving The Dog Rotweiiler");
    }
  }

  const Rotweiller= new Dog();
  Rotweiller.sound();
  Rotweiller.move();

  