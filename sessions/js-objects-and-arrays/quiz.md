# JS Objects and Arrays

## Which of the following code snippets stores an array in a variable?

* [ ] `const fruits = <'apple', 'banana', 'orange'>;`
* [ ] `const fruits = {'apple', 'banana', 'orange'};`
* [x] `const fruits = ['apple', 'banana', 'orange'];`
* [ ] `const fruits = ('apple', 'banana', 'orange');`

Points: 1

Feedback_correct: That's right.
Feedback_incorrect: Nope! `const fruits = ['apple', 'banana', 'orange'];` stores an array in a variable.

type: multiple_choice

---

## Given is: `const array = ["Foo", true, 1, 7];` and `const value = array[1];`. What would `console.log(value);` display?

* [ ] 7
* [x] true
* [ ] 1
* [ ] "Foo"

Points: 1

Feedback_correct: That's right.
Feedback_incorrect: Nope! `console.log(value);` prints the element with the `index 1`, in this case `true`, to the console.

type: multiple_choice

---

## How can you find out the number of elements in the following array: `const fruits = ['apple', 'banana', 'orange'];`

* [x] `console.log(fruits.length);`
* [ ] `console.log(length(fruits));`
* [ ] `console.log(count(fruits));`
* [ ] `console.log(sizeof(fruits));`

Points: 1

Feedback_correct: That's right.
Feedback_incorrect: Nope! `console.log(fruits.length);` will print the total number of elements in the array (e.g. the length) to the console.

type: multiple_choice

---

## Given is: `const numbers = [ 1, 2, 3];` How do you replace the second element in the array with the value `4`?

* [ ] `numbers[2] = 4;`
* [ ] `numbers.1 = 4;`
* [ ] `numbers.2 = 4;`
* [x] `numbers[1] = 4;`

Points: 1

Feedback_correct: That's right.
Feedback_incorrect: Nope! With `numbers[1] = 4;` you can replace the second element in the array with the value `4`.

type: multiple_choice

---

## Which method can you use to add one or more elements to the end of an array?

* [x] `.push()`
* [ ] `.append()`
* [ ] `.add()`
* [ ] `.unshift()`

Points: 1

Feedback_correct: That's right.
Feedback_incorrect: Nope! With the method `.push()` you can add one or more elements to the end of an array.

type: multiple_choice

---

## Which method removes the last element from an array and returns that element?

* [ ] `.remove()`
* [x] `.pop()`
* [ ] `.get()`
* [ ] `.delete()`

Points: 1

Feedback_correct: That's right.
Feedback_incorrect: Nope! `.pop()` removes the last element from an array and returns that element.

type: multiple_choice

---

## Given is the following object: `const person = { firstName: 'John', lastName: 'Doe' };`. What are `firstName` and `lastName` called?

* [ ] values
* [ ] operators
* [ ] methods
* [x] keys

Points: 1

Feedback_correct: That's right.
Feedback_incorrect: Nope! `firstName` and `lastName` are called keys.

type: multiple_choice

---

## How can you access the property `e-mail` of an object `person`?

* [ ] `person.e-mail`
* [x] `person['e-mail']`
* [ ] `person.accessProperty('e-mail')`
* [ ] `person.email`

Points: 1

Feedback_correct: That's right.
Feedback_incorrect: Nope! With `person['e-mail']` you can access the property `e-mail` of an object `person`, since we can not use hyphens in variable names in JavaScript.

type: multiple_choice

---

## How do you update the property `firstName` of the following object: `const person = { firstName: 'John', lastName: 'Doe' };`

* [x] `person.firstName = 'Jane';`
* [ ] `firstName = 'Jane';`
* [ ] `person[0] = 'Jane';`
* [ ] `person.updateProperty('firstName') = 'Jane';`


Points: 1

Feedback_correct: That's right.
Feedback_incorrect: Nope! `person.firstName = 'Jane';` will update the property `firstName`.

type: multiple_choice

---

## How do you add a new property called `age` to an object `person`?

* [ ] `person.addProperty('age') = 30;`
* [ ] `person(age) = 30;`
* [x] `person.age = 30;`
* [ ] It is not possible to add a new property to an object.


Points: 1

Feedback_correct: That's right.
Feedback_incorrect: Nope! With `person.age = 30;` you can add a new property called `age` to the object `person`.

type: multiple_choice

---

## Given is: `const user = { userId: "1234", userName: "Remi", shoppingCart: ["tomato", "banana", "chocolate"],};` How can you log the first item of the shopping cart to the console?

* [ ] `console.log(shoppingCart[0]);`
* [ ] `console.log(user[shoppingCart].0);`
* [x] `console.log(user.shoppingCart[0]);`
* [ ] `console.log(user.shoppingCart[1]);`


Points: 1

Feedback_correct: That's right.
Feedback_incorrect: Nope! With `console.log(user.shoppingCart[0]);` you can log the first item of the shopping cart to the console.

type: multiple_choice

---
