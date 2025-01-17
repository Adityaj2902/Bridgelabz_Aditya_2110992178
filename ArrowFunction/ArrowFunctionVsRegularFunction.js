
// var firstName = 'Vivek';

// const Aditya={
      
//     firstName : 'Aditya',
//     birthYear : 2002,
//     calaAge   : function(){
//         console.log(`Your Current Age is ${2025-this.birthYear}`);
//     },
//     greet     :()=>{
//         console.log(this);
//         console.log(`Hii EveryOne My Name is ${this.firstName}`)
//     }

// }

// Aditya.calaAge();
// Aditya.greet();

// ARROW FUNCTION DOESN'T HAVE ITS OWN THIS KEYWORD AND IT WILL HAVE "THIS" KEWORD FROM GLOBAL SCOPE WHICH IS A WINDOW OBJECT 

// ----------------------------FOR REFERNCE OF WINDOW OBJECT -----------------------

// In JavaScript, the window object represents the global environment in which the script is running, specifically in the context of a web browser.
//  It is the top-level object for all web page-related interactions and provides access to a variety of properties and methods that help manage the browser window,
//   user interface, and browser-related functions.


// IT BECAME BECAME VERY DANGEROUS IN THE CASE OF VARIABLE DECLARED WITH VAR ACTUALLY CREATE PROPERTIES ON THE GLOBAL OBJECT


//------IMPORTANT ---> WE SHOULD NEVER USE AN ARRROW FUCNTION AS AN METHOD 

// IT ALSO TRUE WHEREEVER YOU HAVE TO USE THIS KEYWORD YOU SHOULD NEVER USE ARROW FUNCTION 



var firstName = 'Vivek';

const Aditya={
      
    firstName : 'Aditya',
    birthYear : 2002,
    calaAge   : function(){
        console.log(`Your Current Age is ${2025-this.birthYear}`);
        
        const isMellenial=function(){
            console.log(this);
            console.log(this.birthYear>=1981 && this.birthYear<=1996);
        }
        isMellenial();
    },
    greet:()=>{
        console.log(this);
        console.log(`Hii EveryOne My Name is ${this.firstName}`)
    }

}

Aditya.calaAge();
Aditya.greet();