function dateDecorator(f) {
	return function(...args){
		const now = new Date();
		console.log(now);
		return f(...args)
	}
}

function starDecorator(...args) {
	return ()=>{
		console.log(`*`.repeat(20));
		const res = f(...args)
        console.log(`*`.repeat(20));
        return res
	}
}


// Фунцкцията, която ще декорираме
function greet() {
	console.log(`Hello`);
}

function add(x,y) {
	return x+y
}

// // Ще декорираме greet и add с dateDecorator
greet = dateDecorator(greet)
greet = starDecorator(greet)
add = dateDecorator(add)
add = starDecorator(add)


greet()
console.log( add(3,4) );


// EXPECTED OUTPUT:
// ********************
// 2023-11-25T15:34:19.730Z
// Hello
// ********************
// ********************
// 2023-11-25T15:34:19.730Z
// ********************
// 7
