
'use strict'
// with the help of "throw" keyword we can able to throw the error and with the help of "catch" method we are able to catch the error 
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


const renderError=function(msg){
    countriesContainer.insertAdjacentText('beforeend',msg);
    countriesContainer.style.opacity=1;

}



const getCountryData=(countryname)=>{
    fetch(`https://restcountries.com/v2/name/${countryname}`)
    .then(response=>{

        console.log(response);
        
        if(!response.ok){
            throw new Error (`Country Not Found (${response.status})`);
        }
        return response.json();

    })

    .then((data)=>{
        renderCountry(data[0]);
        const neighbour=data[0].borders[0];
        // const neighbour=data[0].borders?.[0]; (Optional Chaining)
        if(!neighbour){
            return;
        }
        return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
    })
    .then(response=>
    response.json())
    .then((data)=>renderCountry(data,'neighbour'))
    .catch(err=>{
        console.error(`${err}  ❌ ❌ ❌ `);
        renderError(`Something Went Wrong ❌ ${err.message} . Try Again`);
    })
    .finally(()=>{
        countriesContainer.style.opacity=1;
    })
};


btn.addEventListener('click',function(){
    getCountryData('portugal');
})


