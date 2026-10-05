let number = [1, 2, 3, 4,5];

//1. Add 6 to the end.
number.push(6);

//2. Remove the first element.
number.shift();

//3. Find the index of 4.
const fourthIndex = number.indexOf(4);

//4. Check if all numbers are greater than 0.
function checkGreater(number){
    return number > 0;
}
console.log(number.every(checkGreater));
