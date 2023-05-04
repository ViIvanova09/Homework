// TASK: Да се дефинира функция, която приема 2 масива и връща масив, чиито елементи са сумата от елементите на двата масива (елемент по елемент).

// YOUR CODE HERE
function sumArrays(x, y){
   let arr = [];
   for (let i = 0; i < y.length; i++) { 
      arr.push(x[i] + y[i]);
    }
    return arr;
}
// TEST:
console.log(sumArrays([1, 2, 3], [4, 5, 6]));
// OUTPUT:
// [ 5, 7, 9 ]
