// Create and declare arrays
const emptyArray = [];
const fruitBasket = ["apple", "banana", "cherry", "date", "elderberry"];
const temperatureReadings = [22.3, 21.4, 23.5, 24.6, 25.7];
const userData = ["John Doe", 25, "john.doe@example.com"];
const nestedFruitBaskets = [["apple", "banana", "cherry"], ["date", "elderberry"], ["fig", "graps"]];
try {
  console.log("An empty array:", emptyArray);
  console.log("A fruit basket:", fruitBasket);
  console.log("Temperature readings:", temperatureReadings);
  console.log("User data:", userData);
  console.log("Nested Fruit Baskets:", nestedFruitBaskets);
} catch {
  console.error("Please read the instructions carefully and try again");
}
