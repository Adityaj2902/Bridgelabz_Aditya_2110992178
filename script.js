/////////////////----------API LINKS ----------///////////////

// https://countries-api-836d.onrender.com/countries/
// https://restcountries.com/v3.1/all

// https://restcountries.com/v2/name/portugal

'use strict'

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////
const getCountreryData=function(country){
// old school way of creating httpxml request 
const request=new XMLHttpRequest();

request.open('GET',`https://restcountries.com/v2/name/${country}`);

request.send();


request.addEventListener('load',function(){
  console.log(this.responseText);
  // if i wanted to display it in good format that i have to use this json format one 

  // here we have write [data] like this to destructure 

  const [data]=JSON.parse(this.responseText);
  console.log(data);


const html=`
  <article class="country">
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


});

};


getCountreryData('portugal');
getCountreryData('usa');



