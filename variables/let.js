let age = 25;
let name = 'xyz';

console.log(age);
console.log(name);
console.log(age,name);

// This will throw an error because let is block scope variable and cannot be accessed outside the block leavel variable.
{
    let gender = 'female';  
}c
onsole.log(gender); 
