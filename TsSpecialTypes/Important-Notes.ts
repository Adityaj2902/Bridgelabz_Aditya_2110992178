// the typeof operator works for checking primitive types, but it doesn't help when working with any.
//  The key difference between unknown and any lies in how TypeScript handles type checking and type safety.

// Let’s dive into both any and unknown, explaining why typeof works differently for each.

// Primitive Types (also called basic types)
// Primitive types are the most basic data types that are immutable and are not objects.
//  They represent single values and are stored directly in memory (in a stack).
//   When you assign a primitive value to a variable, 
//   the variable holds the actual value.
//    These types are passed by value.

// Examples	number, string, boolean, undefined, null, symbol, BigInt

// Non-Primitive Types (also called Reference Types)
// Non-primitive types are more complex data structures, which include objects, arrays, and functions.
//  These types are mutable and are stored as references in memory (in a heap).
//   When you assign a non-primitive value to a variable, the variable holds a reference to the value, not the actual value. 
//   This means changes made to one variable can affect other variables referencing the same object or array. They are passed by reference.

//Examples object, array, function, class