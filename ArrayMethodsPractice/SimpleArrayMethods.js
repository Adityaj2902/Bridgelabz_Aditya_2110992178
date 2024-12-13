let arr=['a','b','c','d','e'];

// Slice Methods 

console.log(arr.slice(2));
// it return an array from Index 2
// it returns an new array it doesn't mutate the original array 

console.log(arr.slice(2,4));
// it return an array which exclude last parameter that is 4 

console.log(arr.slice(-2));
// It will start copying from the end of the array  means last element will get printed 

console.log(arr.slice(1,-2));

// it will return an which start from index 1 except the last two element

console.log(arr.slice());

// it will help us to create shallow copy of the array

console.log([...arr]);
// same thing we can be able to use with spread operator 

// Nothing is Major Difference in terms of Shallow copy it just a matter of personal preference 


// Splice Methods

// Fundamental Difference :  it does change the original Array where slice don't 

// Everything is same almost some having few changes you check it using mdn references 
arr.splice(1,2);

// it will delete the second element or i can say that it include the second parameter also where in slice method it exclude the second element 


// chatgpt if you have some other differnce like this please list down here important one only 

// Reverse Method 

arr=['a','b','c','d','e'];
const arr2=['j','i','h','g','f'];

console.log(arr2.reverse());

// reverse method  does actually mutate the array 

console.log(arr2);


// Concat Method which doesnt mutate the original Array

const letters=arr.concat(2);
console.log(letters);
console.log([...arr,...arr2]); 
// 
//this is spreadoperatire which also does the same thing but doen't mutate the original array

//Join Method 

console.log(letters.join('-'));


