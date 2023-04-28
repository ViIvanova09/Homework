var sum = 0;
for ( var x = 1; x <= 10 ; x++ ){
	sum += x;
};
console.log("sum = " + sum);

let numbers = [-2, 3, 7, 8, -1, 4, 2];
var sum1 = 0;
for (var y = 0; y < numbers.length; y++ ){
    if(numbers[y] > 0 && numbers[y] % 2 == 0) {
        sum1 += numbers[y];
    }
}
console.log(sum1);