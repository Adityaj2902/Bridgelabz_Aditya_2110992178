// Dependency Inversion Principle (DIP)
// High-level modules should not depend on low-level modules. Both should depend on abstractions.


// Violating DIP
// class FileManager {
//     readFile() {
//       // Reading file directly
//     }
//   }
  
//   class Logger {
//     logMessage(message) {
//       // Writing log message
//     }
//   }
  
//   // Fixing DIP: Using an abstraction for storage
//   class Logger {
//     constructor(storage) {
//       this.storage = storage; // Dependency Injection
//     }
  
//     logMessage(message) {
//       this.storage.write(message); // Use dependency for writing
//     }
//   }
  
//   class FileStorage {
//     write(message) {
//       // Writing to file
//     }
//   }
  
//   class ConsoleStorage {
//     write(message) {
//       console.log(message); // Writing to console
//     }
//   }
  

// Violation: The Logger class directly depends on a specific file-writing implementation.
// Fix: Inject dependencies (like FileStorage or ConsoleStorage) into Logger, so it's more flexible.