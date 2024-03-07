/**
 * Tech test for target trainee position.
 */

// Question 1: I made a function to be a bit more dynamic.

function firstQuestionCalc(index, k) {
  let sum = 0;

  while (k < index) {
    k += 1;
    sum += k;
  }

  return sum;
}

console.log(firstQuestionCalc(13, 0));

// Question 2: Fibonnaci function.

function checkIfNumIsFibonnaci(num) {
  let x = 0;
  let y = 1;
  let currentValue = 0;
  while (currentValue <= num) {
    currentValue = x + y;
    x = y;
    y = currentValue;
    if (currentValue === num) {
      return true;
    }
  }
  return false;
}

console.log(checkIfNumIsFibonnaci(34));

// Question 3: Discover the logic and find the next number.

let a = "add 2 to the previous number -> response = 9";
let b = "double the previous number -> response = 128";
let c = "square of its position in the sequence -> response = 49";
let d = "square of consecutive odd numbers -> response = 64";
let e =
  "Fibonacci sequence. Each number is the sum of the two previous numbers -> response = 13";
let f =
  "each number is the sum of the digits of the previous number -> response = 10";

// Question 4: Lightbulb problem

let questionFourRes =
  "\
    I would turn on a light bulb and wait for a while, then turn it off.\
    Then I would turn on another one and go to one of the rooms. One would be hot and off,\
    another one lit and cold, and finally, the third one would be cold and off.\
    ";

// Question 5: Invert string without built-in functions

function invertString(str) {
  let invertedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    invertedStr += str[i];
  }
  return invertedStr;
}

console.log(invertString("Invertido"));
