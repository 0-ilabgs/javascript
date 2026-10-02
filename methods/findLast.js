const cartItems = [
  { id: 1, name: "Laptop", price: 45999.0, quantity: 1 },
  { id: 2, name: "Headphones", price: 2499.0, quantity: 2 },
  { id: 3, name: "Mouse", price: 899.0, quantity: 1 },
  { id: 4, name: "Keyboard", price: 1499.0, quantity: 1 },
  { id: 5, name: "USB Drive", price: 499.0, quantity: 3 },
];

// Use findLast() to locate the last item that costs less than ₹1000 in a constant named findLastAffordableItem
const findLastAffordableItem = cartItems.findLast((item) => item.price < 1000);

// Use findLast() to locate the last item with quantity 1 in a constant named findLastSingleQuantityItem
const findLastSingleQuantityItem = cartItems.findLast((item) => item.quantity === 1);
try {
  console.log("Last affordable item (under ₹1000):", findLastAffordableItem);
  console.log("Last item with quantity 1:", findLastSingleQuantityItem);
} catch {
  console.error("Please read the instructions carefully and try again");
}
