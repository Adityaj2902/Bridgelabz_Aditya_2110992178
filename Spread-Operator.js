'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;
//   11:25+_Arrival;bru0943384722;fao93766109;
//   11:45+_Delayed_Arrival;hel7439299980;fao93766109;
//   12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order:function(starterIndex,mainIndex){
    return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
  },


  orderDelivery: function ({
    starterIndex=1,
    mainIndex=0,
    time='20:00',
    address,
  }){
    console.log(`Order Received ! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPasta:function(ingredient1,ingredient2,ingredient3){
  console.log(`Here is Your Delicious Pasta with ${ingredient1}, ${ingredient2} and ${ingredient3}`)
  }
};








// Spread Operatore is used to expand array into all its Elements 

// Or other word i can say unpacking all the elements at once 


// How to add an element into an existing array 

// const arr=[2,4,6,8,7];
// const badNewArr=[1,5,arr[0],arr[1],arr[2],arr[3],arr[4]];

// console.log(badNewArr);

// Same thing we are able to do with the use of spread operator in a very easy way 

// const newArr=[1,2,...arr];

// console.log(newArr);


// Now we want to Create New Menu By adding some New Item using spread operator;

// const newMenu=[...restaurant.mainMenu,'Gobbhi Chur Chur Kulcha']

// console.log(newMenu);


// spread operator also help us in destructuring the array that getting element out of arrays 

// Now it create shallow of copy of arraya and merge two arrays togetehr

// Copy of array 

// const newStarterMenu=[...restaurant.starterMenu];
// const newMainMenu=[...restaurant.mainMenu];

// Merging of two arrays

// const finalMenu=[...newStarterMenu,...newMainMenu];

// console.log(finalMenu);


// spread operators work on array but that not entirely true but this also works on iterables 



// what are iterables ?

// Thera are different type of iterables in javascript are thing like all arrays , strings , map ,or set 

// const firstName='Aditya';

// const secondName='Jaiswal';

// const fullName=[...firstName,...secondName];

// console.log(fullName);

// Now you can see You are Now able to take control over on every element of the string 

// when we combine with any variable with spread operator then it simple combine any two variable with spread operator 

// Disclaimer : we can stiil only use spreadOperator when we building an array when we pass value into an function 


// Mulitple values separated by commas usually only expected when we pass value into an function for spread operator 


// const ingredients=[prompt("Let\s make Pasta ! Ingredient 1 ?"),
//     prompt("Let\s make Pasta ! Ingredient 2 ?"),
//     prompt("Let\s make Pasta ! Ingredient 3?")
// ];



// restaurant.orderPasta(ingredients[0],ingredients[1],ingredients[2]);

// Here we do the same thing as above this is the beauty of spread opertor 

// restaurant.orderPasta(...ingredients);


// orderPasta('Vivek','Arpit','Hanish')


// Additonal Notes : Es 2018 Spread Operator actuallu also works on objets even though objects are not iterables 

// as we are able to do shallow copy of array with the help of spread operator now we are able to tod the same thing with object 

// I M going to show how to do this one 

const newResturant={FoundedIn:2003, ...restaurant,founder:'Vivek Bhatt'};

console.log(newResturant);


// we can also be able copy the whole object

const restaurantCopy={...newResturant};
restaurantCopy.name='Aditya';

console.log(restaurantCopy);


// conclusion :
// 1) we use spread operators to build new Arrays
// 2)To pass multiple value into a function 




