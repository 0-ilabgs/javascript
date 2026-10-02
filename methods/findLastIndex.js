const cartItems = [
  { id: 1, name: "Laptop", price: 45999.0, quantity: 1 },
  { id: 2, name: "Headphones", price: 2499.0, quantity: 2 },
  { id: 3, name: "Mouse", price: 899.0, quantity: 1 },
  { id: 4, name: "Keyboard", price: 1499.0, quantity: 1 },
  { id: 5, name: "USB Drive", price: 499.0, quantity: 3 },
];

// Use findIndex() to find the index of the first item that costs more than ₹2000
const firstExpensiveItemIndex = cartItems.findIndex((item) => item.price > 2000 );

// Use findLastIndex() to find the index of the last item with quantity more than 1
const lastMultipleQuantityIndex = cartItems.findLastIndex((item) => item.quantity > 1);
try {
  console.log(
    "Index of first expensive item (over ₹2000):",
    firstExpensiveItemIndex
  );

  console.log(
    "Index of last item with quantity > 1:",
    lastMultipleQuantityIndex
  );
} catch {
  console.error("Please read the instructions carefully and try again");
}
