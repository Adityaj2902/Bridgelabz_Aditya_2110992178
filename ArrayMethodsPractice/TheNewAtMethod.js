const arr=[23,11,64];

console.log(arr[0]);

// it does the same above thing 
console.log(arr.at(0));


// Getting last element of the array 
console.log(arr[arr.length-1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

// Now Question is Should we use Array Methods

// Secnario 1:: 
// if you want to get the last element of the array or
//  start counting from the end of the array then you should 
// probably using at Method 
// if you want to do somthing called Method chaing then AtMethod is also perfect for there 

// Scenario 2 :
// if you want qucikly get the value from the array then bracket method is perfect for there 



// At Method also work on strings 

console.log('jonas'.at(0));
console.log('Jonas'.at(-1));
