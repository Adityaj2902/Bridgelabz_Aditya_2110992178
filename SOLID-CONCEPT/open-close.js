// Open/Closed Principle (OCP)
// Software entities (like classes, functions, etc.) should be open for extension, but closed for modification.

// Violating OCP
// class Discount {
//     calculateDiscount(price, type) {
//       if (type === 'student') {
//         return price * 0.1; // 10% discount for students
//       } else if (type === 'senior') {
//         return price * 0.2; // 20% discount for seniors
//       }
//     }
//   }
  
//   // Fixing OCP: Using classes that extend behavior
//   class Discount {
//     calculateDiscount(price) {
//       return price; // No discount applied by default
//     }
//   }
  
//   class StudentDiscount extends Discount {
//     calculateDiscount(price) {
//       return price * 0.1;
//     }
//   }
  
//   class SeniorDiscount extends Discount {
//     calculateDiscount(price) {
//       return price * 0.2;
//     }
//   }
  
// Violation: If we need to add a new discount type (e.g., for teachers), we would modify the Discount class.
// Fix: We make Discount class closed for modification and open for extension by creating new classes that extend it.