// d. Interface Segregation Principle (ISP)
// Clients should not be forced to depend on interfaces they do not use.÷

// Violating ISP
// class Animal {
//     eat() {}
//     sleep() {}
//     fly() {}  // Some animals don't fly!
//   }
  
//   // Fixing ISP
//   class Animal {
//     eat() {}
//     sleep() {}
//   }
  
//   class Flyable {
//     fly() {}
//   }
  
//   class Bird extends Animal {
//     constructor() {
//       super();
//     }
//   }
  
//   class Duck extends Bird {
//     fly() {
//       console.log("Duck flying");
//     }
//   }
  

// Violation: If you force all animals to implement fly(), it doesn't make sense for animals like cats or cows.
// Fix: Split the flying behavior into a separate Flyable interface, and only make flying animals implement it.