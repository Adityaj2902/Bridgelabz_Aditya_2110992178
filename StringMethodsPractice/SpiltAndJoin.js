
// SPLIT METHOD CONVERT THE STRING INTO A NEW ARRAY

// console.log('a+very+nice+string'.split('+'));

// JOIN METHOD HELP US TO CONVERT THE ARRAY INTO A NEW STRING

// const [firstName,lastName]='Aditya Jaiswal'.split(' ');

// console.log(firstName,lastName);


const capitalizeName=function(name){
    const names=name.split(' ');
    const namesUpper=[];

    for(const n of names){
       namesUpper.push(n[0].toUpperCase()+n.slice(1));
    }
    console.log(namesUpper.join(' '));
}

capitalizeName('aditya and vivek are good friends');