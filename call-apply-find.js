// 1. call()
// The call() method calls a function with a given this value and arguments provided individually.

// function greet(greeting) {
//     console.log(greeting + ', ' + this.name);
// }

// const person = { name: 'Alice' };

// greet.call(person, 'Hello'); // Output: Hello, Alice


// 2. apply()
// The apply() method is similar to call(), but it takes an array of arguments instead of individual arguments.

// function greet(greeting1, greeting2) {
//     console.log(greeting1 + ' and ' + greeting2 + ', ' + this.name);
// }

// const person = { name: 'Bob' };

// greet.apply(person, ['Hi', 'Hey']); // Output: Hi and Hey, Bob


// 3. bind()
// The bind() method creates a new function that, when called,
//  has its this keyword set to the provided value, with a given sequence 
//  of arguments preceding any provided when the new function is called.

// function greet() {
//     console.log('Hello, ' + this.name);
// }

// const person = { name: 'Charlie' };

// const greetCharlie = greet.bind(person);
// greetCharlie(); // Output: Hello, Charlie

// Summary
// call(): Invokes the function immediately with a specified this value and arguments.
// apply(): Invokes the function immediately with a specified this value and an array of arguments.
// bind(): Returns a new function with a specified this value, which can be called later.
// These methods are essential for controlling the context in which functions are executed in JavaScript.




