const temperatureReadings = [-2, -3.5, 12, 18, 22, 11.2, 34, 38, 30, 43];
const selectedTemperature = temperatureReadings[3];

// Implement the logic to check the temperature and print the appropriate message
// Use the selectedTemperature variable to check the temperature
// Use the console.log() function to print the message
// Use the if, else if, and else statements to check the temperature
// Use the >= and > operators to check the temperature
// Use the console.log() function to print the message
if(selectedTemperature >= 35){
    console.log("it's extremely hot outside! Stay hydrated!");
}
else if(selectedTemperature >= 25){
    console.log("it's quite warm today!");
}
else if(selectedTemperature >= 15){
    console.log("the temperature is pleasant!");
}
else if(selectedTemperature > 0){
    console.log("it's cool outside, consider wearing a jacket!");
}
else{
    console.log("it's freezing outside! bundle up warmly!");
}










let value = 0;

if(value){
    console.log("True");
}
else{
    console.log("False");
}