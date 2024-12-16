// FILTER ARRAY METHOD 


// Return an new array containing the array 
// elements that passed a specific condition 


// For example :: 

// let arr=[3,1,4,3,2];

// filter : arr[i]>2;

// newarr=[3,4,3];

let movements=[200,400,-500,800,-555,1000];

// const onlyDeposits=movements.filter(function(mov){
//     return mov>0;
// });

// console.log(onlyDeposits);

// Now write it in a more cleaner way 

const onlyDeposits=movements.filter((mov)=>mov>0);
console.log(onlyDeposits);



