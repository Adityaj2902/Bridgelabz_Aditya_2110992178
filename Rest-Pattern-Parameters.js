// That we used the spread operator to build new arrays or to pass multiple values into a function.

// So those are the two use cases of the spread operator and in both cases, we use the spread operator to expand an array into individual elements.

// Now, the rest pattern uses the exact same syntax however, to collect multiple elements and condense them into an array.

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
    },

    orderPizza:function(mainIngredients,...otherIngredients){
        console.log(mainIngredients);
        console.log(otherIngredients);
    }
  };

  // REST OPERATOR USED TO COLLECT MULTIPLE ELEMENT CONDENSE THEM INTO AN ARRAY 

  // SPREAD OPERATOR BECAUSE ON THE RIGHT SIDE OF THE ASSIGNMENT OPERATOR =

  // const arr=[1,2,...[3,4]];

  // console.log(arr);

  // REST , BECAUSE ON THE LEFT SIDE OF =
  
//   const [a,b,...others]=[1,2,3,4,5];

//   console.log(a,b,others);

//   Now combine the both the use of spread opertaor and rest operator 

// const [Pizza, , Risotto,...otherFoods]=[...restaurant.mainMenu,restaurant.starterMenu];

// console.log('\n');

// console.log(Pizza,Risotto,otherFoods);

// REST OPERATOR ALWAYS MUST BE THE LAST IN DESTRUCTRING ASSIGNMENT BECAUSE OTHERWISE HOW WOULD JAVASCRIPT WOULD KNOW UNTIL WHEN IT SHOULD COLLECT THE REST OF THE ARRAY 

// THERE CAN ONLY EVER BE ONE REST OPERATOR IN ANY DESTRUCTURING ASSIGNMENT 


// IT ALSO WORKS IN INDEED ON OBJECTS 

// const {sat,...weekdays}=restaurant.openingHours;

// console.log(weekdays);


// const add = function (...numbers){   //Here it is being collected by rest operator

//     const sum=numbers.reduce((accu,curr)=>accu+curr,0);
//     console.log(sum);

// }

// let numbers=[2,4,6,8,10];

// add(5,2);
// add(4,6,7,8,9);
// add(2,3,5,7,9,8);

// console.log(add(...numbers));

// Then Why we Are Not simple creating the function why we are using this for spread and rest operator
// Answer: With the help of this by passing one argument only we are able tp pass single value as well as array 


// const number=[1,2,3,4,5,6];

// console.log(...number);// Here we are Spreading the number with the help of spread operator

// when same thing is passing into function then it will be immediatley be colleted by rest operator  Refernce will be line no 
 

restaurant.orderPizza('Mushrooms','Onion','Olives','Spinach');