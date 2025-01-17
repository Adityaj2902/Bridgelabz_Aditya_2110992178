// 7. Hoisting
// Arrow Functions:

// Not hoisted. The arrow function is treated like a variable declaration and only accessible after its definition.
// console.log(foo);  // undefined
// const foo = () => {};  // Cannot be called before declaration

// Regular Functions:

// Are hoisted. Function declarations are hoisted, meaning you can call them before they are defined in the code.
foo();  // Works fine
function foo() {}