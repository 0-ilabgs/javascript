const password1 = "thisisastrongpassword";
const password2 = "THisISastrongerPAsSwORd";

// Write a function named validatePassword that takes a password as an argument and returns a string.
// The function should return "Password needs both uppercase and lowercase characters" if the password does not contain both uppercase and lowercase characters.
// The function should return "Password has mixed case (good!)" if the password contains both uppercase and lowercase characters.
// The function should return "Password has mixed case (good!)" if the password contains both uppercase and lowercase characters.
function validatePassword(password){
    const upperVersion = password.toUpperCase();
    const lowerVersion = password.toLowerCase();
    if(password === upperVersion || password === lowerVersion){
        return "Password needs both uppercase and lowercase characters";
    }
    return "Password has mixed case (good!)";
}

try {
  console.log("Checking Password 1: ", validatePassword(password1));
  console.log("Checking Password 2: ", validatePassword(password2));
} catch {
  console.error("Please read the instructions carefully and try again");
}
