'use strict';

// const message=document.querySelector('.message').textContent;
// it helps us to know text content of the above query selector 
// console.log(message);

// let message=document.querySelector('.message').textContent;

// message="You have Guess the Correct Number ";

// console.log(message);


// document.querySelector('.message').textContent="Correct Number 🎉";

// document.querySelector('.score').textContent="100";
// document.querySelector('.number').textContent="13";

// // if we want to take inputfield value then we can use .value operation 


// console.log(document.querySelector('.guess').value);

const systemNumber = Math.trunc(Math.random()*20);
console.log(systemNumber);

document.querySelector('.number').textContent=systemNumber;


let score=20;



document.querySelector('.check').addEventListener('click',function(){

    // console.log(document.querySelector('.guess').value);

    const guessNumber=Number(document.querySelector('.guess').value);


    if(!guessNumber){
        document.querySelector('.message').textContent="No Number ❌";
    }

    const highscore= Number(document.querySelector('.highscore').textContent);

    if(guessNumber == systemNumber){
        document.querySelector('.won').textContent="Congrulation You Have Won the Game"
        document.querySelector('.message').textContent=" 🎉 🎉 Correct Number 🎉 🎉";
        document.querySelector('body').style.backgroundColor='#60b347'

        if(guessNumber>highscore){
            (document.querySelector('.highscore').textContent)=guessNumber;
        }
    }

    else if(guessNumber >systemNumber){
        document.querySelector('.message').textContent=" Too High ";
        score--;

    }

    else if(guessNumber<systemNumber){
        document.querySelector('.message').textContent="Too Low";
        score--;
    }
   
    else{
        document.querySelector('.message').textContent= " ❌ ❌ Wrong Number ❌ ❌";
    }
    
});


document.querySelector('.again').addEventListener('click',function(){

    document.querySelector('body').style.backgroundColor='black';
    document.querySelector('.highscore')=highscore;
    document.querySelector('score')=50;

})



