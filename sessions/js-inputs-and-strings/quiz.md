# Inputs and Strings

## Which of the below is NOT a valid string in JavaScript?

* [ ] `"hello world"`
* [ ] `'hello world'`
* [x] `_hello world_`
* [ ] ``hello world``

Points: 1

Feedback_correct: That's right.
Feedback_incorrect: Nope! `_hello world_` is not a valid string in JavaScript.

type: multiple_choice

---

## Given is `const greeting = 'hello world';`. What is the return value of `greeting.length`?

* [ ] `10`
* [x] `11`
* [ ] `length: 10`
* [ ] `length: 11`

Points: 1

Feedback_correct: That's right.
Feedback_incorrect: Nope. Whitespaces are included, therefore the correct answer is `11`.

type: multiple_choice

---

## Which of the below statements about template literals (template strings) is correct?

* [ ] Template literals are enclosed by backticks.
* [ ] Template literals allow variables in strings.
* [ ] Template literals allow multiline strings.
* [x] All of the above.

Points: 1

Feedback_correct: That's right.
Feedback_incorrect: Nope. All of the answers are correct.

type: multiple_choice

---

## Given is `const name = 'Max'; const greeting = "Hello " + name + ", good to see you!";`. Instead of concatenating multiple strings, we want to use a template literal for the value of `greeting`:

* [ ] `'Hello ${name}, good to see you!'`
* [ ] ``` `Hello` + name + `, good to see you!` ```
* [x] ``` `Hello ${name}, good to see you!` ```
* [ ] ``` `Hello {name}, good to see you!` ```

Points: 1

Feedback_correct: That's right.
Feedback_incorrect: Nope. The correct answer is ``` `Hello ${name}, good to see you!` ```.

type: multiple_choice

---

## Which method do you need to convert a string to uppercase?

* [ ] `upperCase()`
* [ ] `ToUpperCase()`
* [ ] `touppercase()`
* [x] `toUpperCase()`

Points: 1

Feedback_correct: That's right.  
Feedback_incorrect: Nope! The method `toUpperCase()` converts a string to uppercase.

type: multiple_choice

---

## Given is `const name = '  spiced   ';`. What is the return value of `name.trim()`?

* [ ] `'spiced  '`
* [ ] `' spiced '`
* [x] `'spiced'`
* [ ] `'  spiced'`

Points: 1

Feedback_correct: That's right.
Feedback_incorrect: Nope, `trim()` only removes whitespaces at the beginning and end of a string.

type: multiple_choice

---

## How do you get the value of the input field, declared via `const input = document.querySelector('[data-js="name-input"]');`?

* [ ] `name-input.value`
* [x] `input.value`
* [ ] `inputValue`
* [ ] `value.input`

Points: 1

Feedback_correct: That's right.
Feedback_incorrect: Nope! You can get the value of the input field with `input.value`. 

type: multiple_choice

---

## Given is `const name = 'Web Development Bootcamp';`. What is the return value of `name.replaceAll(' ', '_')`?

* [ ] `'Web_Development Bootcamp'`
* [x] `'Web_Development_Bootcamp'`
* [ ] `'Web Development_Bootcamp'`
* [ ] `'Web Development Bootcamp'`

Points: 1

Feedback_correct: That's right.
Feedback_incorrect: Nope! The method `replaceAll(oldString, newString)` replaces all occurrences of `oldString` with the `newString`, so the return value is `'Web_Development_Bootcamp'`.

type: multiple_choice

---

## Given is `const name = 'spiced';`. What is the return value of `name.includes('spice')`?

* [ ] `false`
* [ ] `spice`
* [ ] `'spiced'`
* [x] `true`

Points: 1

Feedback_correct: That's right.
Feedback_incorrect: Nope! The method `includes` searches for a string inside another string and returns a boolean value, in this case `true`.

type: multiple_choice

---
