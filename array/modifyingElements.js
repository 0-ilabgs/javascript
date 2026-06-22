const shoppingCart = ["Pencils", "Erasers", "Pens", "Notepad"];

// Add Ballpoint Pens
shoppingCart[2] = "Ballpoint Pens";
// Add Stapler
shoppingCart[4] = "Stapler";
// Add Typewriter
shoppingCart[5] = "Typewriter";
// Remove Typewriter and store it in itemRemoved
const itemRemoved = shoppingCart.pop();
// DO NOT MODIFY CODE BELOW THIS LINE
try {
  console.log("Shopping Cart");
  console.table(shoppingCart);
  console.log("Item Removed: ", itemRemoved);
} catch {
  console.error("Please read the instructions carefully and try again.");
}


let arr = [1, 2, 3];
arr.shift();
console.log(arr[0]===2);
console.log(arr.length);



let arr1 = [10, 20, 30, 40];
arr1.splice(1, 2);
console.log(arr1);
console.log(arr1.length);