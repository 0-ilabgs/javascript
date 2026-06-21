const basePrice = 545.5;
const discount = 5;
const tax = 18;
const quantity = 12;

// Equal to (==) - compares values with type coercion. It basically forces the values to be the same type before comparing.
const isBasePriceString = basePrice == "545.5";
// Strict equal to (===) - compares values without type coercion. It checks if the values are the same type and value.
const isBasePriceExact = basePrice === 545.5;
// Not equal to (!=) - compares inequality with type coercion. It basically forces the values to be the same type before comparing.
const isDiscountDifferent = discount != "5";
// Strict not equal to (!==) - compares inequality without type coercion
const isTaxDifferentType = tax !== "18";
// Greater than (>) - compares the values.
const isBasePriceGreaterThanTax = basePrice > tax;
// Less than (<) - compares the values.
const isDiscountLessThanTax = discount < tax;
// Greater than or equal to (>=) - compares the values.
const isQuantityAtLeastTen = quantity >= 10;
// Less than or equal to (<=)
const isDiscountAtMostTen = discount <= 10;
// DO NOT MODIFY THE CODE BELOW THIS LINE
try {
  console.log("basePrice == '545.5':", isBasePriceString);
  console.log("basePrice === 545.5:", isBasePriceExact);
  console.log("discount != '5':", isDiscountDifferent);
  console.log("tax !== '18':", isTaxDifferentType);
  console.log("basePrice > tax:", isBasePriceGreaterThanTax);
  console.log("discount < tax:", isDiscountLessThanTax);
  console.log("quantity >= 10:", isQuantityAtLeastTen);
  console.log("discount <= 10:", isDiscountAtMostTen);
} catch {
  console.error("Please read the instructions carefully and try again.");
}
