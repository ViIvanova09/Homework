let students = ["Ivan", "Pesho", "Maria"];
let scores = [5, 4, 6];

function getHighestScoreIndex(arr){
    let max = arr[0];
    let maxIndex = 0;
    for(let i = 0; i < arr.length; i++){
        if(max < arr[i]){
            max = arr[i];
            maxIndex = i;
        }
    }
    return maxIndex;

}
console.log(`${students[getHighestScoreIndex(scores)]} has the higest score: ${scores[getHighestScoreIndex(scores)]}`);
// TASK: дефинирайте функция 'getHighestScoreIndex()', която да връща индекса на най-големият елемент от масива scores.

// ---> YOUR CODE HERE <---

// TASK: като използвате функцията getHighestScoreIndex() изпишета в конзолата името на студента с най-висока оценка:

// ---> YOUR CODE HERE <---

// expected output
// Maria has the higest score: 6


