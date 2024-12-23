function greet(greeting){
    console.log(greeting+','+this.name)
}

const person={
    name:'Aditya'
};


greet.call(person,'hello');