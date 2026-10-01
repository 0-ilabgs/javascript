// cart contains arrays of items with [item, price, quantity]. amount is in INR.
const cart = [
  ["iPhone 15 Pro Max", 125000, 2],
  ["MacBook Pro", 250000, 1],
  ["Apple Watch Series 9", 50000, 3],
  ["AirPods Pro", 20000, 4],
  ["iPad Pro", 65000, 1],
];

function convertToUSD(amount) {
  return amount / 80;
}

// Use .map() to convert the card to USD rates and return a new array

const usdCart = cart.map((item)=>{
    return [item[0], convertToUSD(item[1]), item[2]];
});
let totalPayable = 0;
cart.forEach((item, idx) => {
  const totalPrice = item[1] * item[2];
  totalPayable += totalPrice;
  console.log(`${idx + 1}. ${item[0]} - USD: ${totalPrice}`);
});
console.log("--------------------------------");
console.log(`Total Payable: INR ${totalPayable}`);