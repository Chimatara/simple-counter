

// A SIMPLE COUNTER

// FUNCTIONALITIES

/*
- the increment button increases the count
- the decrement button decreases the count
- the reset button resets the count to zero
- make sure that the decrement button stops at zero and not a negative value

*/

// the initial count

let count = 0;

// calling the html elements

let displayElement = document.getElementById('display');
let incrementButton = document.getElementById('increment');
let decrementButton = document.getElementById('decrement');
let resetButton = document.getElementById('reset');

// create a function for each functionality 

function increaseCount () {
  count++;
  displayElement.innerText = count;
}
function decreaseCount () {
  if (count !== 0) { // this prevents it from getting a negative value
    count--;
  }
  displayElement.innerText = count;
}
function resetCount () {
  count = 0;
  displayElement.innerText = count;
}

// adding event listeners for te buttons to function

incrementButton.addEventListener('click', increaseCount);
decrementButton.addEventListener('click', decreaseCount);
resetButton.addEventListener('click', resetCount);



// Just trying out something unrelated

// let firstQuestion = prompt('a = ?');
// let secondQuestion = prompt('b = ?');
// firstQuestion = Number(firstQuestion);
// secondQuestion = Number(secondQuestion);
// let sum =firstQuestion + secondQuestion1;
// document.write('the sum is ' + sum )
   






