// forEachMethod is fundamentally different from For Loop 

const Movements=[200,-450,-400,3000,-650,-130,70,1300];

// for(let i =0;i<Movements.length;i++){
//     console.log(Movements.at(i)+ " ");
// }


for (const movement of Movements){
    if(movement>0){
        console.log(`You Deposited ${movement}`);
    }
    else{
        console.log(`You Withdraw ${Math.abs(movement)}`);
    }
}


console.log('--------------FOR OF METHOD ----------');

for (const [i,movement] of Movements.entries()){
    if(movement>0){
        console.log(`Movement : ${i+1} : You Deposited ${movement}`);
    }
    else{
        console.log(`Movement : ${i+1} : You Withdraw ${Math.abs(movement)}`);
    }
}





// forEach method is calling a callback function we are not actually call this function 

console.log('---------------FOR EACH ------------');

// Note: Function without name is known as Anonymous Function 

Movements.forEach(function(movement){
    if(movement>0){
        console.log(`You Have Depsited ${movement}`);
    }
    else{
        console.log(`You Withdraw ${Math.abs(movement)}`);
    } 
});

// it will run like to know behind the scenece of forEach method 

// 0:function(200);
// 1:function(450);
// 2:function(400);

// All I want to say that for every iteration it will call the function again and again 



// which one of these do you think easier to write to cleaner -- foreach method it will also personal preference 

// Now Same thing that is done forof Method i wanted to achieve by forEach Method 


Movements.forEach(function(movement,index,array){
    if(movement>0){
        console.log(`Movement : ${index} You Have Depsited ${movement}`);
    }
    else{
        console.log(`Movement : ${index} You Withdraw ${Math.abs(movement)}`);
    } 
});

// movement:element of current iteration;
// index: iteration Node;
// array: On which everything is iterating 

// Now we successfully achieve that thing that we are able to acieve by for of Method 

// Disclaimer : One thing you must have to rememeber function(movement,index,array) order matter a lot in terms on movement,index, array

// when to use foreach Method and Forof Method 

// Notes : You cannot be able to break the iteration in between because continue and break will not be accepted here 

// Notes: 
