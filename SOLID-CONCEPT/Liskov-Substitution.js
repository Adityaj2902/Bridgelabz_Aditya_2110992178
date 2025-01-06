// Liskov Substitution Principle (LSP)
// Objects of a superclass should be replaceable with objects of a subclass without affecting the correctness of the program.


// class Bird {
//     fly() {
//       console.log("Flying");
//     }
//   }
  
//   class Duck extends Bird {
//     fly() {
//       console.log("Duck flying");
//     }
//   }
  
//   class Ostrich extends Bird {
//     // Violates LSP, because ostriches can't fly
//     fly() {
//       throw new Error("Ostriches can't fly!");
//     }
//   }
  

// Violation: If you try to use an Ostrich where a Bird is expected, it will throw an error.
// Fix: Avoid subclassing Bird for classes like Ostrich, which don't follow the same behavior (flying).