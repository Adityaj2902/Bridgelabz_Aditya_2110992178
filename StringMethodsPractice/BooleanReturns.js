// Booleans Returns 


const airplane='Airbus A320neo';

console.log(airplane.includes('A320'));
console.log(airplane.includes('Boeing'));
console.log(airplane.startsWith('Airb'));


if(airplane.startsWith('Airbus') && airplane.endsWith('neo')){
    console.log("Part Of the Air-Bus Only");

}


const checkBaggages=function(items){

    const baggage=items.toLowerCase();

    if(baggage.includes('knife') || baggage.includes('gun')){
        console.log('You Are Not Allowed On Board');
    }
    else{
        console.log('Welcome to the Board');
    }

}

checkBaggages('I have some Food , Laptop and a Pocket KNife');