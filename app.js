// console.log("Ee sala cup namduu");

// creating a variable
// var username = "Virat";
// let age = 20;
// const city = "bengaluru";

// console.log(username);
// console.log(age);
// console.log(city);

// console.log(username, age, city);

// console.log(
//   ` The name is ${username} and age is ${age} lives in a city ${city}`
// );

// var username = "Dhoni";
// username = "D K";
// username = "jitesh";
// console.log(username);

// let namee = "Virat";
// namee = "Gill";
// console.log(namee);

// const pi = 3.14;
// pi = 2.14;
// console.log(pi);

// functions

// 1. by using Function declaration.

// function display() {
//   console.log("hello");
//   console.log("hiii");
//   console.log("broo");
// }
// display();

// 2. by using function expression

// const display = function () {
//   console.log("hii sir");
//   console.log("hello");
// };
// display();
//////////////////////////

// wish();
// function wish() {
//   console.log("good evening");
// }

// Hoisting

// Its a mechanism where all the function created using function
//declaration is automatically moved to top of the file.

///////////////////////////
// wish();
// const wish = function () {
//   console.log("good evening");
// };

// hoisting not supported for function expression.

// function add1() {
//   let num1 = 10;
//   let num2 = 20;
//   console.log(num1 + num2);
// }
// add1();
// function add2() {
//   let num1 = 30;
//   let num2 = 40;
//   console.log(num1 + num2);
// }
// add2();

//10 20,30 40, 50 60, 70 80

//default value in variable is undefined.
//NaN == not a number ==> invalid number
// function add(num1, num2, num3 = 0) {
//variables passed called parameters
//   console.log(num1 + num2 + num3);
// }
// add(10, 20, 50);
// add(30, 40);
// add(50, 60); // arguments

////////////////////

// I want a single parameter to store many arguments.
// rest operator. ==> ...
// function collect(a, ...b) {
//   console.log(a);
//   console.log(b);
// }
// collect(10, 20, 30, 40, 50);

/////////////////////////
//return keyword to access result of the function outside in
// function declaration

// function add1() {
//   let num1 = 10;
//   let num2 = 20;
//   let result = num1 + num2;
//   console.log(result);
//   return result;
// }
// const output = add1();
// console.log(output);

//return keyword to access result of the function outside in
// function expression

// const add = function (num1, num2) {
//   return num1 + num2;
// };
// const result = add(100, 200);
// console.log(result);

// but in arrow function, return is optional

// similar to function expresiion
// const add = (num1, num2) => {
//   return num1 + num2;
// };
// const result = add(100, 200);
// console.log(result);

// arrays --> [ ]

// STORE THE names of 4 students.

// will hve position number.
// const names = ["Raju ", "ramu", "bolu", "perry"];
// console.log(names);
// console.log(names[3]);

//wap to create an array that stores 5 numbers and
// also multiply each and every number by 10

//==============

// let numbers = [1000, 2000, 3000, 4000, 5000];

// console.log(numbers[0] * 10);

// console.log(numbers[1] * 10);
// console.log(numbers[2] * 10);
// console.log(numbers[3] * 10);
// console.log(numbers[4] * 10);

///=================

// let numbers = [1000, 2000, 3000, 4000, 5000];
// numbers.forEach((a, b, c) => {
//   console.log(a * 10, b, c);
// });

//=====================
// map ==> input array element count == output array  element count

// stores output in a variable in array format.
// let numbers = [1000, 2000, 3000, 4000, 5000];

// const result = numbers.map((a, b, c) => {
//   return a * 10;
// });
// console.log(result);

////////////////////
// let numbers = [1000, 2000, 3000, 4000, 5000];
// const result = numbers.map((a, b, c) => {
//   if (a > 3000) {
//     return a;
//   }
// });
// console.log(result);
// output == undef undef undef 4000 5000

/////////////////////////////

// filter()

// let numbers = [1000, 2000, 3000, 4000, 5000, 6000, 7000];
// const result = numbers.filter((a, b, c) => {
//   if (a > 3000) {
//     return a;
//   }
// });
// console.log(result);
//////////////////////////////////////////

//reduce()

// let numbers = [1000, 2000, 3000, 4000, 5000, 6000, 7000];

// wap to add all elements presents in an array.

// const result = numbers.reduce((a, b) => {
//   return a + b;
// });
// console.log(result);
////////////////////////////////////////

// Arrays
//   []
// const names = ["chandan", "virat", "rohit", "abd"];
// console.log(names);
// console.log(names[2]);

// salries *1000
// const salary = [1000, 2000, 3000, 4000];
// function forEach

// salary.forEach((a, b, c) => {
//   console.log(a * 10, b, c);
// });

// const salary = [1000, 2000, 3000, 4000, 5000, 6000];
// const op = salary.map((a, b, c) => {
//   return a * 100;
// });

// console.log(op);

//filter

// const salaries = [1000, 2000, 3000, 4000, 5000, 6000, 7000];
// const increment = salaries.filter((a, b, c) => {
//   if (a > 3000) {
//     return a;
//   }
// });
// console.log(increment);

//reduce
// const salaries = [1000, 2000, 3000, 4000, 5000, 6000, 7000];
// const op = salaries.reduce((a, b) => {
//   return a + b;
// });

// console.log(op);

//every function
// const salaries = [1000, 2000, 3000, 4000, 5000, 6000, 7000];

// const op = salaries.every((a, b, c) => {
//   if (a > 3000) {
//     return a;
//   }
// });
// console.log(op);

//some

// const salaries = [1000, 2000, 3000, 4000, 5000, 6000, 7000];
// const result = salaries.some((a, b, c) => {
//   if (a > 30000) {
//     return a;
//   }
// });
// console.log(result);

// objects

// const cricketGame = {
//   runsscored: 10000,
//   wickets: 50,
//   fifties: 58,
//   century: 50,
// };
// console.log(cricketGame);
// console.log(cricketGame.century);

// Array of objects.

// const questions = [
//     {
//       title: "What is the sum of 10+20",
//       A: 20,
//       B: 30,
//       C: 50,
//       D: 80,
//     },
//     {
//       title: "Highest score in IPL is ",
//       A: 250,
//       B: 280,
//       C: 287,
//       D: 301,
//     },
//   ];

const questions = [
  {
    title: "What is the capital of France?",
    A: "Paris",
    B: "London",
    C: "Berlin",
    D: "Rome",
    correctAnswer: "A", // Paris
  },
  {
    title: "Who wrote 'Romeo and Juliet'?",
    A: "William Shakespeare",
    B: "Charles Dickens",
    C: "Jane Austen",
    D: "Mark Twain",
    correctAnswer: "A", // William Shakespeare
  },
  {
    title: "What is the chemical symbol for water?",
    A: "W",
    B: "WA",
    C: "H2O",
    D: "H",
    correctAnswer: "C", // H2O
  },
  {
    title: "Which planet is known as the Red Planet?",
    A: "Mars",
    B: "Venus",
    C: "Jupiter",
    D: "Saturn",
    correctAnswer: "A", // Mars
  },
  {
    title: "Who painted the Mona Lisa?",
    A: "Leonardo da Vinci",
    B: "Pablo Picasso",
    C: "Vincent van Gogh",
    D: "Michelangelo",
    correctAnswer: "A", // Leonardo da Vinci
  },
];
const myh1 = document.querySelector("h1");
const firstButton = document.querySelector("#first");
const secondButton = document.querySelector("#second");
const thirdButton = document.querySelector("#third");
const fourthButton = document.querySelector("#fourth");
const continueButton = document.querySelector("#continue");
const submitButton = document.querySelector("#submit");

function loadQuestions(info) {
  myh1.textContent = info.title;
  firstButton.textContent = info.A;
  secondButton.textContent = info.B;
  thirdButton.textContent = info.C;
  fourthButton.textContent = info.D;
}
loadQuestions(questions[0]);

let questionIndex = 1;
continueButton.addEventListener("click", function () {
  loadQuestions(questions[questionIndex]);
  questionIndex++;

  if (questionIndex > 4) {
    // logic to display submit (remove that hidden)
    continueButton.hidden = true;
    submitButton.hidden = false;
  }
});
