const paragraph =
  "Hello, my name is John Doe. I am 25 years old and I live in New York City. My phone number is 9175551234.";

// Write a function that masks a phone number in a paragraph
// The function should take two arguments:
// 1. The paragraph to mask the phone number in
// 2. The phone number to mask
// The function should return the paragraph with the phone number masked
// The phone number should be masked with Xs
// The phone number should be masked from the beginning to the end
function maskPhoneNumber(paragraph, phone_number){
    return paragraph.replace(phone_number, "XXXXXXXXXX");
}

try {
  console.log(maskPhoneNumber(paragraph, "9175551234"));
} catch {
  console.error("Please read the instructions carefully and try again.");
}
