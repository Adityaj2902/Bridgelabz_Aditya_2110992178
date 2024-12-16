// Array Reduce Method

// reduce boils  ('reduces') all array element down to one single value 
// (e.g. adding all elements together )


// let arr=[3,1,4,3,2];

// opeartion : accumulator+ arr[i];

// return accumulator=13;

let movements=[200,400,-500,800,-555,1000];


const doneAdd=movements.reduce(function(accu,mov){
    // console.log(accu);
    return accu+mov;
},0);

console.log(doneAdd);

// one thing you must have to rember that for loop doesn't help us changing but these method help in do big changing that help us to bring final result 


// how to get maximum value of the movements

const maximumValue=movements.reduce(function(acc,mov){

    if(acc>mov){
        return acc;
    }
    else{
        return mov;
    }
},movements[0]);
console.log(maximumValue);



