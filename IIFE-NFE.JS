
// IIFE FUNCTION (IMMEDIATELY INVOKED FUNCTION EXPRESSION )  ARE USUALLY USE TO CREATE A ISOLATED SCOPES PREVENTING VARIABLES FROM FROM LEAKING INTO GLOBAL SCOPE 

// WHENEVER WE WANT TO CREATE OR EXECUTE SOME CODE WITHOUT CREATING A GLOVAL FUNCTION  


(function(){
    let a=5;
    let b=5;
    let sum=a+b;
    console.log(sum);
})();


(()=>{
    console.log("Come to the Powerful world of arrow function ");
})();


function displayName(){
    console.log('Hello to the world');
}

displayName(); 

// THE NAME IS AVAILABLE ONLE INSIDE THE FUNCTION SO ITS USEFUL WHEN FUNCTION IS REFERENCE INTERNALLY 

