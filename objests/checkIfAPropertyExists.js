let person = {
    firstNeme: "John",
    lastName: "Doe",
    age: 30,
    city: "New York"
};

console.log(person);

delete person.age;  // Deleting the 'age' property from the 'person' object

console.log(person);

console.log("age" in person);  // Checking if the 'age' property exists in the 'person' object
console.log("city" in person);
