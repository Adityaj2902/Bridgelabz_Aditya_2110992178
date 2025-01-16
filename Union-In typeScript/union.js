// a union type allows a variable to hold multiple types, meaning the variable can be one of several types. 
// You define a union type by using the pipe (|) symbol between the types.
// let value: string | number;
// value = "Hello";  // valid
// value = 42;       // valid
// value = true;     // Error: 'true' is not assignable to type 'string | number'
function display(a) {
    console.log(a);
}
display(42);
