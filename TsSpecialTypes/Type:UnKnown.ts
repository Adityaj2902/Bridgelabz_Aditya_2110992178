// 1. The Problem with any

// function handleInput(input: any) {
//     console.log(input.toUpperCase());  // No check, could lead to runtime error
//   }
  
//   handleInput(42);  // Error! `toUpperCase` doesn't exist on a number, but this code compiles.


// 2. Using unknown for Safety
  

function handleInput(input: unknown) {
    if (typeof input === 'string') {
      console.log(input.toUpperCase());  // Safe, because we checked it's a string
    } else {
      console.log("Input is not a string.");
    }
  }
  
  handleInput(42);  // Output: Input is not a string.
  handleInput("hello");  // Output: HELLO
  