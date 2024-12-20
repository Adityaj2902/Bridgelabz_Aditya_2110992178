



function dance(name1,name2,name3){
    console.log(`There are three friends who is dancing on dj night first person is ${name1} and second Person is ${name2} and third person is ${name3}`);
}



const names=[prompt("Name of the first Person"),prompt("Name of the Second Person"),prompt("Name of the third Person")];


dance(...names);