# JS Functions

## Learning Objectives

- writing functions in JavaScript
- calling functions
- using function parameters
- learning what 'scope' is

---

## Functions

Functions are a fundamental concept in JavaScript. They contain a set of statements - in other
words: They contain JavaScript code. Functions have to be defined. When a function is defined it can
be called an arbitrary number of times.

---

## Function Declarations

You can define a function using a **function declaration** which consists of:

- the function keyword
- the function name
- the function body (JavaScript statements / JavaScript code)

```js
function greet() {
  console.log("Hi Friends!");
  console.log("Nice to be here.");
}
```

> ❗️ Defining a function does not cause the JavaScript code in the function body to be executed.
> You have to call the function for the code to be executed.

### Parameters

Functions can accept parameters. Parameters can be used like predefined variables inside the
function body. When declaring a function we are free to choose a name for the parameters, but
descriptive, short names should be chosen.

```js
function printLetter(name) {
  console.log("Hi " + name + ", hope you are fine. Love, Johnny");
}

function printSum(first, second, third) {
  const sum = first + second + third;
  console.log("The sum of your numbers is: " + sum);
}
```

---

## Function Calls

When functions are defined you can call them by writing their name, followed by parentheses
("round brackets"). If the functions consume parameters you can pass them as arguments in the
brackets.

```js
greet();
/*
This will cause the following to be logged into the console:
Hi Friends!
Nice to be here.
*/

printLetter("Max");
printLetter("Jordan");
/*
This will cause the following to be logged into the console:
Hi Max, hope you are fine. Love, Johnny
Hi Jordan, hope you are fine. Love, Johnny
*/

printSum(1, 2, 3);
printSum(3, 4, 5);
/*
This will cause the following to be logged into the console:
The sum of your numbers is: 6
The sum of your numbers is: 12
*/
```

---

## Scope

The scope defines where variables are visible and where they can be referenced. In JavaScript there
are different kinds of scope, for example:

- global scope
- function scope

### Function scope

Variables defined **inside a function** are not accessible from outside. But all variables **outside
of the function** can be accessed from inside the function body:

```js
const globalVariable = "some Text";

function myFunction() {
  const localVariable = true;

  console.log(globalVariable);
  console.log(localVariable);
}

myFunction();
// logs:
// some Text
// true

console.log(localVariable); // Error! Variable not available outside of function
```

### Global scope

A variable is in the **global scope** when it is declared outside of any function, in a JavaScript
file. Global variables are visible and can be accessed from anywhere in that JavaScript file after
declaration.

---

## Resources

[MDN docs: Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
[MDN docs: Scope](https://developer.mozilla.org/en-US/docs/Glossary/Scope)
