// the never type represents values that never occur.
//  It's often used in cases where a function does not return a value (e.g., it throws an exception or enters an infinite loop) 
//  or when a value is guaranteed to be impossible.


// Example 1: Function that throws an exception
// A function that throws an error, never returning a value, is a classic use case for never.


function throwError(message: string): never {
  throw new Error(message);
}

function processValue(value: number): number {
  if (value < 0) {
    throwError("Value cannot be negative");
  }
  return value * 2;
}

processValue(-1); 

// The function throwError has a return type of never because it will never return—control is transferred to the exception handler instead.
// processValue calls throwError when a negative number is provided, indicating that execution won't continue after the error.