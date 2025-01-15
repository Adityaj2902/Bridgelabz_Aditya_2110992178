var people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
];
// Accessing object properties inside an array
people.forEach(function (person) {
    console.log("".concat(person.name, " is ").concat(person.age, " years old."));
});
