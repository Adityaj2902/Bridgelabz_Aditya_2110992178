const airline='TAP Air India';
const plane='A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);


// INDEX OF METHOD - We are able to get the index of particular in the string 

console.log(airline.indexOf('r')); // this will give you the first occurece 
console.log(airline.lastIndexOf('i'));// this will help you to know the last occurence in the string 

console.log(airline.indexOf('India'));

// By knowing we can do slice method to remove the elemets present at particular index 

// they are actually impossible to mutate the strings because they are premitives

console.log(airline.slice(4));
console.log(airline.slice(4,7));
// last one parameter is always exclude in slice method in javascript 

// if we want to get the first word in the particular then we can use the beautiful combination indexof and slice method 

console.log(airline.slice(0,airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ')+1));

const checkMiddleSeat=function(seat){


    const s= seat.slice(-1);
    if(s==='B' || s==='E'){
        console.log("You Got a Middle Seat");
    }
    else{
        console.log('You Got Lucky');
    }

}

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

// Imoportant One : Whenever we call a method on a string . Javascript will automatically Behind the scenes convert the primitive string to a string object with the same content
// and then its that object where methods are called and this process is called Boxing

// All string methods return premitives 













