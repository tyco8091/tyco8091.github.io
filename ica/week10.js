const button = document.querySelector("button");
button.addEventListener("click", changeText);
const heading = document.querySelector("h1");

function changeText(){
    const head = prompt("tell me a secret")
    heading.textContent = head;
}

document.getElementById('myButton').addEventListener('click', function(){
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    this.style.backgroundColor = randomColor;
})
// const x = 'hello';
// console.log(x);

// const button = document.querySelector("button");
// button.addEventListener("click", runFunction);

// function runFunction(){
//     //console.log("test");
//     const name = prompt("Please enter a name");
//     button.textContent = `Player 1: ${name}`; // not '' or ""

// }