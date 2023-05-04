// масив от обекти представящи данни за различни марки бири:
const beers = [
	{name: "Ариана", color: "светло", prices:[1.3, 2, 2.4], town: "София"},
	{name: "Ариана", color: "тъмно", prices:[1.4, 2.2, 2.8], town: "София"},
	{name: "Каменица", color: "светло", prices:[1.5, 2.5, 3], town: "Пловдив"},
	{name: "Загорка", color: "светло", prices:[2, 3, 3.6], town: "Стара Загора"},
];
console.log("The beers array: ", beers);


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ПРИМЕР: изписване на имената и цвета на всички бири:
for (let i = 0, len = beers.length; i < len; i++) {
	const beer = beers[i];

	console.log(`${beer.name} - ${beer.color}`);
}
 let min = beers[0];
 for(let i = 0; i < beers.length; i++) {
    if(min.prices[2] > beers[i].prices[2]){
		min = beers[i];
	}
 }
 console.log(`"${min.name}, ${min.color}" - ${min.prices[2]}`);

 let max = beers[0];
 for(let i = 0; i < beers.length; i++) {
    if(max.prices[1] < beers[i].prices[1]){
		max = beers[i];
	}
 }
 console.log(`"${max.name}, ${max.color}" - ${max.prices[1]}`);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
// ЗАДАЧА: намиране на най-евтината бира по 3-та цена:
// да се изпише в конзолата името, цвета и цената на най-евтината бира, като използваме за сравнението 3-тата цена в масива prices:


// очакван изход:
// "Ариана, светло" - 2.4