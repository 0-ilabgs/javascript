const userProfileData = {
  name: "John Smith",
  email: "john.smith@email.com",
  role: "Software Engineer",
  location: "San Francisco",
  timezone: "GMT-7",
};

// Use object destructuring to assign values to variables
const{user_name,email,role,location,timezone}=userProfileData;
try {
  console.log(`User Profile Details:
Name: ${user_name}
Email: ${email}
Role: ${role}
Location: ${location}
Time Zone: ${timezone}
  `);
} catch (error) {
  console.error("Please read the instructions carefully and try again");
}
