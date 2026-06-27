const phoneNumber = "9175551234";

// Write a function named maskPhoneNumber that masks a phone number such that only the first 2 and last 3 digits are visible
// Example: 9175551234 -> 91XXXX1234
function maskPhoneNumber(phone){
    const firstPart = phone.substr(0, 2);
    const lastFour = phone.substr(-3);
    return `${firstPart}XXXXX${lastFour}`;
}
try {
  console.log("Masked Phone Number: ", maskPhoneNumber(phoneNumber));
} catch {
  console.error("Please read the instructions carefully and try again.");
}


let str = "hello";
console.log(str.substr(10, 5));