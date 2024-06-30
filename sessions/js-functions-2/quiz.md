# JS Functions 2

## Which is the correct statement about return statements ?

* [ ] A function can only have one return statement.
* [x] A function can return only one return value.
* [ ] The return statement has to be at the end of the function body.


Points: 1

Feedback_correct: Exactly!
Feedback_incorrect: That's incorrect. A function can have multiple return statements, often combined with if else statements, but can only return once per function call.
type: multiple_choice

---

## How could you rewrite the function `function concat(string1, string2) { ... }` as an arrow function ?

* [ ] `function concat(string1, string2) => { ... }`
* [x] `const concat = (string1, string2) => { ... }`
* [ ] `const concat => (string1, string2) { ... }`
* [ ] `function concat = (string1, string2) => { ... }`


Points: 1

Feedback_correct: Exactly!
Feedback_incorrect: That's incorrect. You could rewrite it as `const concat = (string1, string2) => { ... }`.

---

## What is the shortest way to rewrite the function `function repeat3(string) {return string.repeat(3)}` without changing the function / parameter names ?

* [ ] `const repeat3 = (string) => {return string.repeat(3)}`
* [ ] `const repeat3 = string => {return string.repeat(3)}`
* [x] `const repeat3 = string => string.repeat(3)`
* [ ] `repeat3 = string => string.repeat(3)`


Points: 1

Feedback_correct: Exactly!
Feedback_incorrect: That's incorrect. The shorted version would be `const repeat3 = string => string.repeat(3)`.

---
