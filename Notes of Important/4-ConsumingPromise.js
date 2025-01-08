'use strict'

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry=function(data,className=' '){
    const html=`
  <article class="country ${className}">
  <img class="country__img" src="${data.flag}" />
  <div class="country__data">
    <h3 class="country__name">${data.name}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${data.population}</p>
    <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
    <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
  </div>
</article>
`;
countriesContainer.insertAdjacentHTML('beforeend',html);
}





// const request=fetch('https://restcountries.com/v2/name/portugal');

// console.log(request);

// On All the Promise we can use then method 

// const getCountryData=function(countryname){
//     fetch(`https://restcountries.com/v2/name/${countryname}`)
//     // Here We have use "then" method to read the data from the response in the json format otherwise it is raw (Readable stream in terms of body)
//     .then(function(response){
//     //   console.log(response);
//       return response.json();
//     //   .json() function itself is asynchromous function 
//     })
//     // here we have use "then" method to log the data than have been already be converted in the form of JSON 
//     .then(function(data){
//         // console.log(data);
//         renderCountry(data[0]);
//     });
// };


// getCountryData('portugal');

// PROMISE IS EITHER FULFILLED OR REJECTED BUT IT IS IMPOSSIBEL TO CHANGE THE STATE AFTER THAT 


// WHEN WE ALREADY HAVE PROMISE THEN ONLY CAN WE CAN BA ABLE TO CONSUME PROMISES


// Now its time to clean the code by using arrow functions

const getCountryData=(countryname)=>{
    fetch(`https://restcountries.com/v2/name/${countryname}`)
    .then((response)=>response.json())
    .then((data)=>renderCountry(data[0]));
};

getCountryData('portugal');