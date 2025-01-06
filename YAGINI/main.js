// 3. YAGNI (You Aren't Gonna Need It)
// This principle tells you not to write code for future use or try to add features you might never need. Write code only for what is needed right now.


// // Violating YAGNI: Writing extra code for future features
// class User {
//     constructor(name, age, email, address) {
//       this.name = name;
//       this.age = age;
//       this.email = email;
//       this.address = address;  // Might not be needed yet
//     }
//   }
  
//   // Fixing YAGNI: Only adding properties needed
//   class User {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }
//   }
  

// Violation: We add an address field in anticipation of needing it later, even though it's not used right now.
// Fix: We keep the class simple with only the fields we need at the moment and add more later if necessary.