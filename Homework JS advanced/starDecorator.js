/* -------------------------------- THE TASK -------------------------------- */
// Implement the starDecorator, which will decorate a function so that before and after each call to it, a row of 30 stars will be printed.

/* -------------------------- YOUR CODE STARTS HERE ------------------------- */
function starDecorator(f) {
	return (...args)=>{
		console.log(`*`.repeat(30));
		const res = f(...args)
        console.log(`*`.repeat(30));
        return res
	}
}

/* --------------------------- YOUR CODE ENDS HERE -------------------------- */


/* -------------------------------- TEST CASE ------------------------------- */
// define some functions to be decorated:
function square(a) {
	console.log(`The square function have been called`);
	return a**2
};
function sum(a,b) {
	console.log(`The sum function have been called`);
	console.log(`a+b=${a}+${b}`);
}

// decorate the functions:
square = starDecorator(square);
sum = starDecorator(sum);

// call the functions:
const res = square(2);
console.log(`res = ${res}`);
sum(1,2);

/* ----------------------------- EXPECTED OUTPUT ---------------------------- */
// ******************************
// The square function have been called
// ******************************
// res = 4
// ******************************
// The sum function have been called
// a+b=1+2
// ******************************
