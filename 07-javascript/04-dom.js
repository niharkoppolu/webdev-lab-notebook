// Exercise #1:
// when the user clicks the 'copy' button, copy the user input to the output area
// fetch JavaScript objects representing specific elements in the DOM
// add an event listener on the target element
// callback function to handle event

const userInput1 = document.querySelector("#userInput1");
const submit_button = document.querySelector("#copy");
console.log(submit_button);
const output1 = document.querySelector(".output");

submit_button.addEventListener("click", handleClick);

function handleClick(event) {
  console.log("Yo Yo mama");
  console.log(output1);
  output1.textContent = userInput1.value;
}




// Exercise #2:
// when the user enters input text, copy the user input to the output area
// fetch JavaScript objects representing specific elements in the DOM
// add an event listener on the target element
// callback function to handle event
const inputEventExample = document.querySelector("#inputEventExample");
const userInput2 = document.querySelector("#userInput2");

const output2 = document.createElement("div");
output2.className = "output";
inputEventExample.appendChild(output2);

userInput2.addEventListener("input", handleInput);

function handleInput(event) {
  output2.textContent = userInput2.value;
}
