// Shopping cart items with their prices
const cart = [
  { item: "Laptop", price: 999 },
  { item: "Headphones", price: 99 },
  { item: "Mouse", price: 29 },
];

// Build an arrow function that calculates the total price of the items in the cart
const calculateTotal = (items) => {
    let total = 0;
    for(let item of items){
        total += item.price;
    }
    return total;
};

// Build a function that logs the item and price to the console
const log = (item, price) => {
console.log(`${item}: INR ${price}`);
};
// Build a function that prints the items in the cart
const printCartItems = (items) => {
    for(let item of items){
        log(item.item, item.price);
    }
};
// DO NOT MODIFY THE CODE BELOW THIS LINE.
try {
  printCartItems(cart);
  console.log("Total: INR " + calculateTotal(cart));
} catch {
  console.error("Please read the instructions carefully and try again");
}
