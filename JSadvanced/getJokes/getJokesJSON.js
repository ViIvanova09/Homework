const button = document.querySelector('.container button');
const jokeText = document.querySelector('.container p');
document.addEventListener('DOMContentLoaded', getJoke)

button.addEventListener('click', getJoke);

// async function getJoke(){
//     const jokeData = await fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=political,racist&type=single',{
//         headers: {
//             'Accept': 'application/json'
//         }
//     });
//     const jokeObj = await jokeData.json();
//     jokeText.innerHTML = jokeObj.joke;
// }

function getJoke(){
    fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=political,racist&type=single',{
    headers:{
        'Accept': 'application/json'
   }
}).then(data=> data.json())
 .then(obj => jokeText.innerHTML = obj.joke)
}


