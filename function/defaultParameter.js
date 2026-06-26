// Sample exchange rates
const exchangeRates = {
  usd: {
    eur: 0.92,
    gbp: 0.79,
    jpy: 148.5,
    inr: 83.12,
  },
  eur: {
    usd: 1.09,
    gbp: 0.86,
    jpy: 161.84,
    inr: 90.45,
  },
  gbp: {
    usd: 1.27,
    eur: 1.17,
    jpy: 188.65,
    inr: 105.22,
  },
  jpy: {
    usd: 0.0067,
    eur: 0.0062,
    gbp: 0.0053,
    inr: 0.56,
  },
  inr: {
    usd: 0.012,
    eur: 0.011,
    gbp: 0.0095,
    jpy: 1.79,
  },
};

// A function declaration to check if currency exists in our rates
function isValidCurrency(currency) {
  return currency in exchangeRates;
}

// Define default parameters for the convertCurrency function
const convertCurrency = function (amount = 1, fromCurrency = "usd", toCurrency = "inr") {
  // Validate currencies
  if (!isValidCurrency(fromCurrency)) {
    return "Invalid source currency";
  }
  if (!isValidCurrency(toCurrency)) {
    return "Invalid target currency";
  }

  // If same currency, return original amount
  if (fromCurrency === toCurrency) {
    return amount;
  }

  // Do the conversion
  const rate = exchangeRates[fromCurrency][toCurrency];
  const result = amount * rate;
  return result;
};

// DO NOT MODIFY THE CODE BELOW THIS LINE
try {
  console.log("Converting 50 eur to inr:", convertCurrency(50, "eur", "inr"));
  console.log("Running the function without arguments:", convertCurrency());
  console.log(
    "Running the function with just the amount:",
    convertCurrency(12)
  );
} catch {
  console.log("Please read the instructions carefully and try again");
}
