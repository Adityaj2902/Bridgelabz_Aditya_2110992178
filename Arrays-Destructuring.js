const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order:function (starterIndex,mainIndex){
        return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
    }
};

// We use "[]" Square Bracket For Destructuring the Arrays  

// Resturant is an object and there is array inside it

// way of unpacking the values from the array into separate varaibels 

const arr=[2,3,4];

// here We have to the destructing of the array one by one 

const a=arr[0];
const b=arr[1];
const c=arr[2];

// console.log(a,b,c);

// Now we are going to destructure the array in one go  

const[x,y,z]=arr;  /// Always remember that whenever you are destructuring just try to start the variable with const 

// it likes an array but its actually destructring assignment 

// console.log(x,y,z);

// In destructuring we are not mutating the original array 


// const [first,,second]=restaurant.categories;
// During Desturcting if you dont want to take any from the particular place then leave those place empty 

// console.log(first,second);


let [main,,secondary]=restaurant.categories;

console.log(main,secondary);


// if the owner of the restaurant want to switch interchange the place of main and secondary then how we are able to do it ;


// Switching Variables 


// const temp=main;
// main=secondary;
// secondary=temp;

// console.log(main,secondary);

// Now we want to eliminate the temp variavle in the middle 

[main,secondary]=[secondary,main];

console.log(main,secondary);

// Now same thing we have done without the use of temp variable 


// console.log(restaurant.order(1,2));

const [starterMenuItem,mainMenuItem]=restaurant.order(1,2);

console.log(starterMenuItem,mainMenuItem);



// This is How we are able to destructure the array even after getting the value from object based on our input Index ;


// --------------------Nested Destucturing -----------------

//  how to nest array one into other 

const nested=[2,4,[5,6]];
console.log(nested);

const [element1,,element2]=nested;
console.log(element1," ",element2);


// but if we want to get every single element from this array destructuring inside destructuring;

const [elementone,,[elementtwo,elementthree]]=nested;
console.log(elementone,elementtwo,elementthree);

// Default Values

const [p=1,q=1,r=1]=[8,9];

console.log(p,q,r);