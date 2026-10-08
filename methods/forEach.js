// // cart contains arrays of items with [item, price, quantity]
// const cart = [
//   ["iPhone 15 Pro Max", 125000, 2],
//   ["MacBook Pro", 250000, 1],
//   ["Apple Watch Series 9", 50000, 3],
//   ["AirPods Pro", 20000, 4],
//   ["iPad Pro", 65000, 1],
// ];

// let totalPayable = 0;
// // Use forEach to iterate over the cart and calculate the total payable amount
// // Use console.log to print the item number, item name and total price based on the quantity in the cart
// cart.forEach((item, idx) => {
//     const totalPrice = item[1] * item[2];
//     totalPayable += totalPrice;
//     console.log(`${idx + 1}.${item[0]} - INR: ${totalPrice}`);
// });
// console.log("--------------------------------");
// console.log(`Total Payable: INR ${totalPayable}`);


const arr = [10, 20,30];

const result = arr.forEach(x =>{ 
    console.log(x*2);
    
}
);