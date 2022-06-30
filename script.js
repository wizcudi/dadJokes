
const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

// this function allows jokeBtn to communicate with Joke APi to fetch new jokes
jokeBtn.addEventListener('click', gerenrateJoke)


gerenrateJoke()

// using .then()
// to make code cleaner, we put headers in seperate variable
// remember this will give a promise back
// make sure to set to .then()
// .then((data) => console.log(data)) is a Good way to test what data you get back
// function gerenrateJoke(){
//     const config = {
//         headers: {
//             'Accept': 'application/json'
//         }
//     }
//     fetch('https://icanhazdadjoke.com', config)
//       .then((res) => res.json())
    
//     .then((data) => {
//         jokeEl.innerHTML = data.joke
//     })
// }


// using ASYNC/AWAIT
// whenever you use await inside of a function you have to label that function 'async'
// any promise you want to put in variable needs await infront of it
async function gerenrateJoke(){
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    }
    const res = await fetch('https://icanhazdadjoke.com', config)

    const data = await res.json()

    jokeEl.innerHTML = data.joke
}























