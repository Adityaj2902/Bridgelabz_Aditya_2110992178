const airline='TAP Air India';
const plane='A320';


console.log(airline.toLowerCase());
console.log(airline.toUpperCase());


//FixCapitalization in Name 

const passenger='jONas';
const passengerLower=passenger.toLowerCase();
const correctName=passengerLower[0].toUpperCase()+passengerLower.slice(1);

console.log(correctName);


//Comparing Emails

const email='hello@jonas.io';
const loginEmail='  Hello@Jonas.io \n';

const lowerEmail=loginEmail.toLowerCase();
const trimmedEmail=lowerEmail.trim();
console.log(trimmedEmail);

// i can do the same thing in one line 
const normalizedEmail=loginEmail.toLowerCase().trim();

console.log(normalizedEmail);

console.log(email == normalizedEmail);

//replacing

const priceGB='288,97&'
const priceUS=priceGB.replace('&','$').replace(',','.');

console.log(priceUS);

//Replace All Method

const announcement='All Passengers come to boarding door 23 . Boarding door 23 !';

const correctAnnouncement=announcement.replaceAll('door','Gate');

console.log(correctAnnouncement);