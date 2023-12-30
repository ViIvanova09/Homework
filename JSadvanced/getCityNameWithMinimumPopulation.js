// TASK: getCityNameWithMinimalPopulation
// Implement findMinPopulationCityName function, so that it will return the
// name of the city with minimum population

const cities = [
	{name: 'Sofia', population: 1_236_000},
	{name: 'Plovdiv', population: 343_424 },
	{name: 'Burgas', population: 202_766},
	{name: 'Varna', population: 335_177},
];

function findMinPopulationCityName(cities) {
 let filtered = Math.min(...cities.map(city=>city.population));
 let minCityName = cities.filter(city => city.population === filtered).map(city => city.name);
 return minCityName[0];
}

// TEST:
const minCityName = findMinPopulationCityName(cities);
console.log( minCityName );

// EXPECTED OUTPUT:
// 'Burgas'