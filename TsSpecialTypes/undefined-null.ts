// he undefined type represents a value that hasn't been assigned or is explicitly set to undefined. 
// Unlike null (which is used to represent the intentional absence of any value),
//  undefined is used to indicate that a variable has been declared but not yet assigned a value.

// Here are some examples showing how undefined is used in TypeScript:




// In TypeScript, the undefined type represents a value that hasn't been assigned or is explicitly set to undefined. Unlike null (which is used to represent the intentional absence of any value), undefined is used to indicate that a variable has been declared but not yet assigned a value.

// Here are some examples showing how undefined is used in TypeScript:

// Example 1: Function that Returns undefined
// A function can explicitly return undefined or omit a return value, which TypeScript will infer as undefined.


function logMessage(message: string): undefined {

  console.log(message);

  return undefined; // Explicitly returning undefined
  
}

const result = logMessage("Hello, TypeScript!");

console.log(result); // undefined

// The function logMessage explicitly returns undefined.
// The return type is defined as undefined, so the result is assigned the value undefined.

