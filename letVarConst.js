// var, let and const
// what is scope? -> a certain region of the program, where a certain variable can be recognized. and beyond which it cannot be recognized
// global, block, or function

//  global scope
var age = 20
// function scope
function scope() {}

// block scope
{
  let a = 5
  const b = 6
}

// var is function scoped, let and const is block scoped

// shadowing, let and const along with es6, allows shadowing

// function test() {
//   let greet = 'Hi'

//   if (true) {
//     let greet = 'Hello'
//     console.log(greet)
//   }
//   console.log(greet)
// }

// test()

// let variable shadowing with var variable, its illegal shadowing

function test() {
  let greet = 'Hi'
  var age = 'hell'

  if (true) {
    let greet = 'Hello'
    let age = 'hell'
    console.log(greet)
  }
  console.log(greet)
}

// throws an err, identifer b has already been declared
test()

// redclare at same scope
// var -> we can redclare at a same scope
// var bay;
// var bay;

// let and const -> its not possible

// Declaration, without initialization
// var and let, can be declared without initialization
// const must be initialized

// reinitialize / reasigning value
// let and var, can be reasigned later
// const, cannot be reassigned

// Hoisting
// all keyword -> gets hoisted, but let and const are hoisted in temporal dead zone
// console.log(age) -> undefined, because in creation phase all the variables are initialized with undefined
var age = 29

// let and const -> temporal dead zone -> distance between variable declared and its been accessed
