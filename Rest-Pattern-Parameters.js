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
    }
  };


  // SPREAD OPERATOR BECAUSE ON THE RIGHT SIDE OF THE ASSIGNMENT OPERATOR 

  const arr=[1,2,...[3,4]];

  console.log(arr);