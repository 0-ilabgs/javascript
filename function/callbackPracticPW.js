// Build a calculator function that uses a callback to perform operations
function calculate(num1, num2, operation){
    return operation(num1, num2);
}
try {
  const sum = calculate(5, 3, (a, b) => a + b);
  const multiply = calculate(5, 3, (a, b) => a * b);
  const subtract = calculate(5, 3, (a, b) => a - b);
  console.log("Sum:", sum);
  console.log("Product:", multiply);
  console.log("Difference:", subtract);
} catch {
  console.error("Please read the instructions carefully and try again");
}
