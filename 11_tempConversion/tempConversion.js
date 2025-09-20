const convertToCelsius = function(a) {
  let x = (a - 32) * (5/9);
  return Math.round(x*10)/10;
};

const convertToFahrenheit = function(a) {
  let x = (a * (9/5)) + 32;
  return Math.round(x*10)/10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

