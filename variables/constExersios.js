// Declare your constants here
const userName = "JohnDoe";
const userAge = 30;
const isActiveUser = true;
const userProfile = {
    country: "USA",
    score: 1500
};


// Modify the userProfile object here
userProfile.score = 1600;
// Declare block scoped constant here
{
    const userStatus = "Active";
    console.log(userStatus);
}
// DO NOT MODIFY THE CODE BELOW THIS LINE
try {
  console.log("User Name:", userName);
  console.log("User Age:", userAge);
  console.log("Is Active User:", isActiveUser);

  console.log("User Profile Country:", userProfile.country);
  console.log("User Profile Score (modified):", userProfile.score);
} catch (e) {
  console.log("Please read the instructions carefully.");
}
