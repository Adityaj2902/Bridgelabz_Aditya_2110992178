// To Get Rid of Callback Hell we Are Learning Promises 

// const request=new XMLHttpRequest();
// request.open('GET',`https://restcountries.com/v2/name/${country}`);
// request.send();

// Now All the above line get by simple fetch simple keywords

const request=fetch('https://restcountries.com/v2/name/portugal');

console.log(request);

// What is Promise ?

// Promise is an object that is used as a placeholder for the future result of 
// an asynchronous option 

// Benfits Of Promoises

// 1)We no longer need to rely on events and callbacks passed into asynchronous 
// function to handle asynchronous results 

// Insted of Nesting Callbacks We can chain promises for a sequence of 
// Asynchronous Opertsaion : Escaping CallBacks Hell 

// Promises are an ES6 feature 

