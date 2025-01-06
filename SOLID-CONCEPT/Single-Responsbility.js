//  Single Responsibility Principle (SRP)
// A class or function should only have one responsibility, meaning it should only do one thing.

// Violating SRP
// class UserManager {
//     createUser(name) {
//       // Creating a user
//     }
    
//     sendEmail(user) {
//       // Sending email to the user
//     }
//   }
  
//   // Correcting SRP
//   class UserManager {
//     createUser(name) {
//       // Creating a user
//     }
//   }
  
//   class EmailService {
//     sendEmail(user) {
//       // Sending email to the user
//     }
//   }
  
// Violation: The UserManager class is doing two things: creating a user and sending an email.
// Fix: We separate the responsibilities into different classes: UserManager handles user-related tasks, and EmailService handles email-related tasks.