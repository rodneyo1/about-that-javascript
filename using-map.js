// Cities Only
const citiesOnly = (arr) => arr.map(obj => obj.city);

// Upper Casing States
const upperCasingStates = (arr) => arr.map(state => 
  state.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
);

// Fahrenheit to Celsius
const fahrenheitToCelsius = (arr) => arr.map(temp => {
  const fahrenheit = parseInt(temp);
  const celsius = Math.floor((fahrenheit - 32) * 5 / 9);
  return `${celsius}°C`;
});

// Trim Temp
const trimTemp = (arr) => arr.map(obj => ({
  ...obj,
  temperature: obj.temperature.replace(/\s/g, '')
}));

// Temp Forecasts
const tempForecasts = (arr) => arr.map(obj => {
  const celsius = Math.floor((parseInt(obj.temperature) - 32) * 5 / 9);
  const cityState = `${obj.city}, ${obj.state.charAt(0).toUpperCase() + obj.state.slice(1)}`;
  return `${celsius}°Celsius in ${cityState}`;
});