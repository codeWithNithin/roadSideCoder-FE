// functions in JS
// function declaration / function definition
// function square(hum) {
//   return num * num
// }

// what is function expression?
// when we store function to a variable, by storing in variables, we can pass it as callback function

const square = function (num) {
  return num * num
}

// what is anonymous function
// a function that doesnt have any name associated with it.
// function (num) {
//   return num * num
// }

// calling a function
square(4)

// first class function
//  in Js, functions can be treated as a variable, here functions are called first class.
// a first class function, can be passed as argument to another function, we can also use, manipulate and return a function

// usually whatever the things variables do. also the functions do the same

function displaySquare(cb) {
  console.log('square is', cb())
}

console.log(displaySquare(square(4)))(
  // What is IIFE?
  // immidiately invoked function expression, this is the only function, that executes only once.

  function square(num) {
    console.log(num)
  }
)(num)

// closure
//  a inner function has access to the outer function, even after the inner function has been returned, inner function wll have access to the variables and arguments of the outer functions.

for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i) // output: 0,1,2,3,4
  }, i * 1000)
}

// hoisting in JS.
function functionName() {
  console.log('workattech')
}

functionName()
