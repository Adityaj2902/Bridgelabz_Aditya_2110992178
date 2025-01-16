// n TypeScript, an enum (short for "enumeration") is a way of defining a set of named constants. 
// Enums allow you to define a collection of related values that can be treated as a type. 
// They are useful when you have a fixed set of values, like days of the week, directions, 
// or status codes, and want to use meaningful names instead of numeric or string values directly.
var Direction;
(function (Direction) {
    Direction[Direction["North"] = 1] = "North";
    Direction[Direction["East"] = 2] = "East";
    Direction[Direction["South"] = 3] = "South";
    Direction[Direction["West"] = 4] = "West";
})(Direction || (Direction = {}));
var myDirection = Direction.North;
console.log(myDirection); // Output: 1
