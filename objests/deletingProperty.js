const person = {
    name: "john",
    age: 30,
    city: "New York"
};

console.log(person);  // Output: { name: 'john', age: 30, city: 'New York' }

delete person.age;  // Deleting the 'age' property from the 'person' object

console.log(person.age);  // Output: undefined