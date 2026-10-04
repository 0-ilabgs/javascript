// Use every() to check if all numbers in an array are positive
const numbers = [];
const allPositive = numbers.every((num) => num>0);
try {
  console.log(
    "Checking if all numbers are positive:",
    allPositive,
    "in array:",
    numbers
  );
} catch (error) {
  console.error("Please read the instructions carefully and try again");
}
