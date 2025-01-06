// // Violating DRY
// function calculateTotalPrice(item1, item2) {
//     return item1.price + item2.price;
//   }
  
//   function calculateDiscountedPrice(item1, item2) {
//     return item1.price * 0.9 + item2.price * 0.9;
//   }
  
//   // Fixing DRY: Extracting common code into a function
//   function getTotalPrice(item1, item2) {
//     return item1.price + item2.price;
//   }
  
//   function calculateTotalPrice(item1, item2) {
//     return getTotalPrice(item1, item2);
//   }
  
//   function calculateDiscountedPrice(item1, item2) {
//     return getTotalPrice(item1, item2) * 0.9;
//   }



//   Violation: We repeat the logic for adding prices in multiple places.
// Fix: We create a reusable function getTotalPrice() to avoid repetition.