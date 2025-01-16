// n TypeScript, an enum (short for "enumeration") is a way of defining a set of named constants. 
// Enums allow you to define a collection of related values that can be treated as a type. 
// They are useful when you have a fixed set of values, like days of the week, directions, 
// or status codes, and want to use meaningful names instead of numeric or string values directly.


enum Direction {
    North = 1,
    East = 2,
    South = 3,
    West = 4
  }
  
  let myDirection: Direction = Direction.North;
  console.log(myDirection);  // Output: 1
  