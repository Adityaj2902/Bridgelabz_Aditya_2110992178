// ARRAY MAP METHOD

// Map return a new array containing the result of 
// appplying an operation on all original array elements 


// For exammple 

// let arr=[3,1,4,3,2];

// operation = arr[i]*2;

// newarr=[6,2,8,6,4];

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const euroToUsd=1.1;

// By Normal Function 
// const Nowtodollar=movements.map(function(mov,i){     
//     return  Math.trunc(mov*euroToUsd);
// })


//By Arrow function
// const Nowtodollar=movements.map((mov,i)=>  
//        Math.trunc(mov*euroToUsd)
//  )
    

// console.log(Nowtodollar);

// const movementDescriptions=movements.map((mov,i,arr)=>{
//     if(mov>0){
//         return `Movement ${i+1}: You Deposited ${mov}`;
//     }
//     else {
//         return `Movement ${i+1} : You Withdraw ${Math.abs(mov)}`;
//     }
// });
// console.log(movementDescriptions);

// const movementDescriptions=movements.map((mov,i,arr)=>
// `Movement ${i+1}: ${mov > 0 ? 'You Deposited':'You Withdraw'} ${mov}`
// );
// console.log(movementDescriptions);

// Now Write the same thing into more a cleaner way 


 
// Here’s a more concise version explaining the difference between forEach and map, with a focus on side effects:

// forEach vs Map: Side Effects
// forEach:
// Loops through an array and performs an action for each element.
// Creates side effects, such as logging to the console or changing variables outside the loop.
// Does not return anything—its purpose is to execute a function on each item.


// map:
// Loops through an array, returns a new array with transformed values.
// No side effects—it only returns the results of the transformation.
// Typically used for creating a new array based on existing data.

