
let cardNum = "XXXX589";
let amount = 50000;

let otp = "";
for(let i = 1; i<=6; i++){
    otp = otp + Math.floor(Math.random()*10);   
}

let mgs = `Dear Customer,

Your card ending with ${cardNum} has been used for a transaction of ₹${amount}.

Your OTP is ${otp}.

⚠️ Please do not share this OTP with anyone.

Thank you.`


console.log(mgs);