function hasCity(country, cities) {
    return function(city) {
        if (cities.includes(city)) {
            return `${city} is a city from ${country}`;
        } else {
            return `${city} is not a city from ${country}`;
        }
    };
}

// Example usage:

// const citiesOfFrance = hasCity("France", ["Paris", "Lyon", "Marseille"]);

// console.log(citiesOfFrance("Paris")); // "Paris is a city from France"
// console.log(citiesOfFrance("Berlin")); // "Berlin is not a city from France"
