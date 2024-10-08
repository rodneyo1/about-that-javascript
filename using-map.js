// const ages2013=[34,92,20,40,56,10]
// const ages2022=ages2013.map(age=>age+9)
// console.log(ages2022)
//cities only
function citiesOnly(cities){
let result=cities.map(city=>city.city)
return result
}
console.log(citiesOnly([
    {
      city: 'Los Angeles',
      temperature: '  101 °F   ',
    },
    {
      city: 'San Francisco',
      temperature: ' 84 ° F   ',
    },
  ]))

//Upper Casing States
const capitalizeEachWord=(str)=> {
    return str.split(' ')
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ');
}

function upperCasingStates(strings){
    let result=strings.map(str=>capitalizeEachWord(str))
    return result
}
//alternatively
// function upperCasingStates(strings){
//     let result=strings.map(str=>function capitalizeEachWord(str) {
//         return str.split(' ')
//                   .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//                   .join(' ');
//     }(str))
//     return result
// }

console.log(upperCasingStates(['alabama', 'new jersey']))
//Farenheight to celcius
function fahrenheitToCelsius(fahrenheitArray) {
    return fahrenheitArray.map(temp => {
    
        const fahrenheit = parseFloat(temp.replace('°F', ''));
        const celsius = Math.floor((fahrenheit - 32) * 5 / 9);
        return `${celsius}°C`;
    });
}
console.log(fahrenheitToCelsius(['32°F', '59°F', '25°F']))

//trimtemp
function trimTemp(cities) {
    return cities.map(cit => {
        let { city, temperature } = cit;
        
        let trimmedTemp = temperature.trim().replace(/\s*°F\s*/, '°F'); // Remove spaces around °F
        
        return {
            city,
            temperature: trimmedTemp
        };
    });
}

// Example usage
console.log(trimTemp([
    { city: 'Los Angeles', temperature: '  101 °F   ' },
    { city: 'San Francisco', temperature: ' 84 ° F   ' },
]));

//Temp Forecasts
function tempForecasts(objarr){
    return objarr.map(obj=>{
        (city,temperature,state,region)=obj
        // temperature=gf
        // state=
        return `${temperature} in ${city}, ${state}`
    })

}
console.log(tempForecasts([
    {
      city: 'Pasadena',
      temperature: ' 101 °F',
      state: 'california',
      region: 'West',
    },
  ]))