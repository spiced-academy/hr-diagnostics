# JS Variables and Numbers

## Which of the following statements is correct?

* [x] Variables declared with `const` cannot be reassigned.
* [ ] It is best practice to only use `var` to declare variables.
* [ ] A `let` variable cannot be updated.
* [ ] The `const` keyword is outdated.

Points: 1

Feedback_correct: Nice!
Feedback_incorrect: Nope. The `var` keyword is outdated. In modern JavaScript variables are declared with `const` and `let`. Variables declared with `const` cannot be reassigned whereas a `let` variable can.

type: multiple_choice

---

## What is not a primitive data type in JavaScript?

* [x] function
* [ ] symbol
* [ ] boolean
* [ ] undefined

Points: 1

Feedback_correct: Nice!
Feedback_incorrect: Nope. `symbol`, `boolean` and `undefined` are all primitive data types. Functions on the other hand are `function objects`. See here for more details: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions.

type: multiple_choice

---

## How do you declare a variable in JavaScript that stores the string 'Hello'?

* [ ] `const Hello;`
* [ ] `'Hello';`
* [x] `const greeting = 'Hello';`
* [ ] `const greeting = Hello;`

Points: 1

Feedback_correct: Nice!
Feedback_incorrect: Nope. `const greeting = 'Hello';` is the correct way to declare a variable.

type: multiple_choice

---

## How do you change the contents of `let greeting = 'Good morning!';` to 'Good evening!'? 

* [ ] `let greeting = 'Good evening!';`
* [x] `greeting = 'Good evening!';`
* [ ] `var greeting = 'Good evening!';`
* [ ] The contents of the variable cannot be changed.

Points: 1

Feedback_correct: Nice!
Feedback_incorrect: Nope. `greeting = 'Good evening!';` will change the contents of the variable.

type: multiple_choice

---

## Which example uses camel casing correctly?

* [ ] `const MyfirstVariable = 'Hello world';`
* [ ] `const my_first_variable = 'Hello world';`
* [x] `const myFirstVariable = 'Hello world';`
* [ ] `const MyFirstVariable = 'Hello world';`

Points: 1

Feedback_correct: Correct!
Feedback_incorrect: Nope. Camel casing means the name of the variable starts with a lowercase letter and each new word with an uppercase letter.

type: multiple_choice

---

## What is the value of the following variable? `let hello;`

* [ ] `hello`
* [x] `undefined`
* [ ] `null`
* [ ] `false`

Points: 1

Feedback_correct: Correct!
Feedback_incorrect: Nope. If you declare a `let` variable without assigning a value to it, the default value will be `undefined`.  

type: multiple_choice

---

## Given is: `const oneTimeFee = "5"; const monthlyFee = 12; const amountToBeCharged = oneTimeFee + monthlyFee;` What is the value of `amountToBeCharged`?

* [ ] `17`
* [ ] `512`
* [x] `"512"`
* [ ] `"17"`

Points: 1

Feedback_correct: Correct!
Feedback_incorrect: Nope. The value of `amountToBeCharged` is `"512"`. In JavaScript, the `+` operator is used for numeric addition and string concatenation. When you “add” a number to a string the interpreter converts your number to a string and concatenates both together.

type: multiple_choice

---

## What is the result of this operation: `9 % 2` ? 

* [x] `1`
* [ ] `4,5`
* [ ] `4.5`
* [ ] `false`

Points: 1

Feedback_correct: That's right. 
Feedback_incorrect: No, the result of `9 % 2` is `1`.

type: multiple_choice

---

## Which of the below does NOT increment a variable with the name `counter` by one?

* [ ] `counter = counter + 1;`
* [ ] `counter++;`
* [x] `counter+;`
* [ ] `counter += 1;`

Points: 1

Feedback_correct: That's right.
Feedback_incorrect: Nope! All of the above except `counter+` will increment the variable by one.

type: multiple_choice

---

## How can we shorten `x = x + y;` ?

* [ ] `y *= x;` 
* [x] `x += y;` 
* [ ] `x = y < x;`
* [ ] `x ++ y;`

Points: 1

Feedback_correct: That's right.
Feedback_incorrect: Nope! The right answer is `x += y;`. 

type: multiple_choice

---
