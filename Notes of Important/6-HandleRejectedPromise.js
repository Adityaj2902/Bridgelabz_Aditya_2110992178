
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


const renderError=function(msg){
    countriesContainer.insertAdjacentText('beforeend',msg);
    countriesContainer.style.opacity=1;

}

// WHENEVER WE WORK ON ERROR HANDLE MEANS WE ARE WORKING UPON REJECTED PROMISE 



const getCountryData=(countryname)=>{
    fetch(`https://restcountries.com/v2/name/${countryname}`)
    // .then((response)=>response.json(),err=>alert(err)) This is a one way of handling error 
    .then((response)=>response.json(),err=>alert(err))// IN SECOMD PARAMETER ONLY WE CAN BE ABLE TO WRTITE ERROR HANDLER NOT IN THE FIRST PARAMETER 

    .then((data)=>{
        renderCountry(data[0]);
        const neighbour=data[0].borders[0];
        // const neighbour=data[0].borders?.[0]; (Optional Chaining)
        if(!neighbour){
            return;
        }
        return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
    })
    .then(response=>response.json())
    .then((data)=>renderCountry(data,'neighbour'))
    .catch(err=>{   // CATCH METHOD IS USED TO CATCH THE ERROR GLOBALLY WE DON'T HAVE TO WRITE ALONG WITHE REPONSE.JSON()
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

// CONCLUSION -> WE WE  WILL INSPECT THE EROR THEN IT WILL SHOW THAT FLAG OF THIS COUNTRY NOT FOUND AUR GIVE STATUS CODE 404 THAT MEANS PROMISE IS STILL GET FULFILLED IN FECTECH METHOD 
// BUT WE WANT TO GET THE ERROR SOMETHING LIKE THIS " THAT COUNTRY NOT FOUND " THAT WHAT I HAVE COVERED TNEXT FILE 