// Create a temperature converter utility using IIFE
const tempConverter = (function (){
// Helper function to round number to 2 decimal places
function round(num){
    return Math.round(num * 100) / 100;
}
// Return an object with our conversion functions
return{
    celsiusToFahrenheit: function (celsius){
        const fahrenhite = (celsius * 9) / 5 + 32;
        console.log(`${celsius}C is ${round(fahrenhite)}F`);
        return round(fahrenhite);
    },
    fahrenheitToCelsius: function (fahrenhite) {
        const celsius = ((fahrenhite - 32) * 5) / 9;
        console.log(`${fahrenhite}F is ${round(celsius)}C`);
        return round(celsius);
    },
};
})();
// Use the converter like this!
try {
  tempConverter.celsiusToFahrenheit(25);
  tempConverter.fahrenheitToCelsius(98.6);
} catch {
  console.error("Please read instructions carefully and try again");
}
