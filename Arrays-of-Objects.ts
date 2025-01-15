type Person = {
    name: string;
    age: number;
  };
  
  let people: Person[] = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
  ];
  
  // Accessing object properties inside an array
  people.forEach(person => {
    console.log(`${person.name} is ${person.age} years old.`);
  });
  