let movements = "aditya jaiswal is a good boy";

// Capitalizing the first letter of each word
// let ans = movements.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

let ans=movements.split(' ').map((curr,i)=>curr.charAt(0).toUpperCase()+curr.slice(1)).join(' ');

console.log(ans);



let newArr=[1,2,3,4,5,6,6,7,7,7,8];


let UniqueElements= new Set();


for(let i=0;i<movements.length;i++){

    UniqueElements.add(newArr[i]);
}

console.log(UniqueElements);