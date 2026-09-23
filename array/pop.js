let arr = [1, 3, 4, 5, false, "hello"];

arr.pop();
console.log(`this is affter first pop ${arr}`);

let returnValue = arr.pop();
console.log(`this is the return value of pop ${returnValue}`);

console.log(`And this is final array ${arr}`);

//Here Im tring to pop in empty array.
let arr1 = [];
let value = arr1.pop();
console.log(value, arr1);

