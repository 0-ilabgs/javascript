let person = {
    name: "John",
    age: 30,
    city: "New York"
};

for (let value in person) {
    console.log(value);
}


console.log(person.key); // This will print 'undefined' because 'key' is a variable, not a property of the object