# JS Functions

## Which of the following statements is WRONG?

* [ ] A function declaration consists of the function keyword, the function name and the function body.
* [x] When a function is defined the JavaScript code in the function body is executed.
* [ ] When a function is defined it can be called an arbitrary number of times.
* [ ] Functions can accept parameters. Parameters can be used like predefined variables inside the function body.

Points: 1

Feedback_correct: Exactly!
Feedback_incorrect: Nope. Defining a function does not cause the JavaScript code in the function body to be executed. You have to call the function for the code to be executed.

type: multiple_choice

---

## How do you declare a function with the name "myFunction"?

* [ ] `function: myFunction() { //some code }`
* [x] `function myFunction() { //some code }`
* [ ] `function = myFunction { //some code }`
* [ ] `function myFunction { //some code }`

Points: 1

Feedback_correct: Exactly!
Feedback_incorrect: Nope. With `function myFunction() { //some code }` you can create a function.

type: multiple_choice

---

## How do you call a function with the name "myFunction"?

* [ ] `function myFunction() { //some code }`
* [ ] `myFunction`
* [ ] `function myFunction()`
* [x] `myFunction()`

Points: 1

Feedback_correct: Exactly!
Feedback_incorrect: That's incorrect. The first statement is the function declaration, where the function is defined. The second statement is the function reference, which can be used to refer to the respective function in your code. The third statement is an unfinished function declaration which would result in an error. When functions are defined you can call them by writing their name, followed by parentheses ("rounded brackets").

type: multiple_choice

---

## How many parameters can you add to a function?

* [ ] 1
* [ ] 2
* [ ] 3
* [x] as many as you want

Points: 1

Feedback_correct: Exactly!
Feedback_incorrect: That's incorrect. You can add as many parameters to a function as you want.

type: multiple_choice

---

## Which would be the correct call of the function `function getPizza(type, amount) {...}` ?

* [ ] `function getPizza(3,'Hawaii')`
* [ ] `getPizza('Hawaii'; 3)`
* [x] `getPizza('Hawaii', 3)`
* [ ] `getPizza(3, 'Hawaii')`
* [ ] None of the above, you do not order a pizza Hawaii.

Points: 1

Feedback_correct: Exactly!
Feedback_incorrect: Nope. The correct answer is: `getPizza('Hawaii', 3)`. Make sure to pass the arguments in the correct order separated by a comma.

type: multiple_choice

---

## Given is: `function printLetter(name) { console.log("Hi " + name + ", hope you are fine. Love, Johnny");}` What does the function log to the console, when you call the function with `printLetter();`?


* [ ] `'Hi name, hope you are fine. Love, Johnny'`
* [x] `'Hi undefined, hope you are fine. Love, Johnny'`
* [ ] `'Hi, hope you are fine. Love, Johnny'`
* [ ] `'Hi null, hope you are fine. Love, Johnny'`


Points: 1

Feedback_correct: Exactly!
Feedback_incorrect: Nope. The function logs `'Hi undefined, hope you are fine. Love, Johnny'` to the console. If a function is called with missing arguments (less than declared), the missing values are set to undefined.

type: multiple_choice

---

## Given is: `function printPersonalData(name, age) { console.log(name + " is " + age + " years old");}` What does the function log to the console, when you call the function with `printPersonalData(24, 'Alex');`?

* [x] `'24 is Alex years old'`
* [ ] `'Alex is 24 years old'`
* [ ] Nothing. The age (24) needs to be a string in order for the function to work properly.


Points: 1

Feedback_correct: Exactly!
Feedback_incorrect: Nope. The correct answer is `'24 is Alex years old'`. When calling a function the arguments need to be passed to the function in the same order as defined in the function declaration.  

type: multiple_choice

---

## Which of the following statements is WRONG?

* [ ] The scope defines where variables are visible and where they can be referenced.
* [ ] Variables defined inside a function are not accessible from outside.
* [ ] A variable is in the global scope when it is declared outside of any function, in a JavaScript file.
* [x] Global variables cannot be accessed from inside a function. They need to be passed as arguments to a function in order to access them inside the function body. 

Points: 1

Feedback_correct: Exactly!
Feedback_incorrect: Nope. Global variables are visible and can be accessed from anywhere in that JavaScript file after declaration. 

type: multiple_choice

---
