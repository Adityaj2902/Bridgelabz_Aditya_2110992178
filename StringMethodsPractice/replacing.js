const priceGB='288.97E';

const priceUS=priceGB.replace('E','INR').replace('.',',');

console.log(priceUS);


const announcement='All Passengers Come to Boarding Door 23 . Boarding Door 23 ! ';

console.log(announcement.replace('Door','Gate'));
console.log(announcement.replaceAll('Door','Gate'));