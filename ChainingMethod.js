// CHALLENGE 1 --> Take the transcation of the array and covert all to deposits to usd and add up all the depsoits to show the final deposits

//PIPELINE
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const euroToUsd=1.1;
const totaldeopsits=movements
.filter((mov,i,arr)=>mov>0)
.map((mov)=>mov*euroToUsd)
.reduce((accu,mov)=>accu+mov);


console.log(totaldeopsits);






// Disclaimer : You Have to make sure that You can chain the method as many as you want but you have to remember that all the methods should return an a new array 

// Here are the two main points summarized:

// Optimize Method Chaining: Avoid overusing method chaining, especially with large arrays. Chaining too many methods can cause performance issues. Instead, try to combine operations into fewer method calls where possible to improve efficiency.

// Avoid Mutating Arrays in Chains: Do not chain methods that mutate the original array (e.g., splice, reverse). While it's fine for small applications, it can lead to bugs and performance issues in larger-scale applications. Mutating arrays can cause unintended side effects, so prefer non-mutating methods for safer, more predictable code.
