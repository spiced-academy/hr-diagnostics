# JS Functions 2

> 💡 feel free to create a personal branch of this guide to add your own notes

| duration | content         |
| -------- | --------------- |
| 0:45     | Session         |
| 1:30     | Active Learning |
| 0:15     | Recap           |

## Learning objectives

- What a return statement of a function is and how to use it in your JavaScript functions
- What an `early return` is
- How to write functions with the `fat arrow notation`

---

## Arrival: Motivate students and prepare them for today's topic(s)

> 💡 Breathe and relax :)

### Why is the content of today's block that important for the students?

- You will learn how a function returns a value back to the place where it was called.
- You will know how to early return from a function.
- You will learn how to write functions with the fat arrow syntax.

### Which important problem will we solve today?

- We will learn how to use a value outside of a function by which it has been computed.

---

## Activate prior knowledge of students

### Which previously learned concepts will be utilized in this session?

- We will use our knowledge about JavaScript functions and further deepen our understanding.

---

## Inform: Session Guide

### Recap Functions

Remind the students of their knowledge about functions:

- the function keyword
- the function name
- the function body
- parameters
- console.log()
- calling a function

```js
function add3Numbers(first, second, third) {
  const sum = first + second + third;
  console.log(sum);
}

add3Numbers(1, 2, 3);
```

Point out that `console.log()` immediately uses the computed `sum` inside of the function.

### Return Statement

Explain its use and advantage:

- we don't have to use a value inside of a function as in the case of `console.log()`
- the function can return this value and make it available elsewhere
- we outsource computations and continue using the returned value in the program

```js
function add3Numbers(first, second, third) {
  const sum = first + second + third;
  return sum;
}

const firstSum = add3Numbers(1, 2, 3);
```

Explain that a function can only return one expression value, but can have multiple return
statements:

```js
function checkInputLength(inputString) {
  if (inputString.length > 3) {
    return true;
  } else {
    return false;
  }
}
```

#### Early Return Statement

Point out that the execution of a function ends as soon as a `return` statement is reached:

```js
function checkInputLength(inputString) {
  if (inputString.length > 3) {
    return true;
    console.log("I am never logged in the console.");
  } else {
    return false;
    console.log("Me neither.");
  }
}
```

### Arrow Function Expressions

In contrast to the classic `function declaration`, explain the `arrow function expression`:

- saved like a variable with the keyword `const`
- parameters written normally with round brackets
- the fat arrow `=>` points to the start of the function body in curly braces `{}`

```js
const addNumbers = (first, second) => {
  return first + second;
};
```

Explain the critera for a short notation with arrow syntax:

1. omit round brackets `()` if it is only one parameter

```js
const addOne = (number) => {
  return number + 1;
};
```

2. omit curly braces `{}` and `return` keyword if there is only one return statement

- Note: In this case, the expression after `=>` becomes the implicit return value.
- Note: Use this implicit return only if there really is a value to return, and not for a void
  function.

```js
const addNumbers = (first, second) => first + second;
```

---

## Process: Challenges

- [ ] Provide the [handout](./js-functions-2.md) and the [challenges](challenges-js-functions-2.md)
      to the students
- [ ] Open the handout and walk the students through the tasks
- [ ] Divide the students into groups
- [ ] Remind them of the ground rules:
  - meet again 30 min before lunch break in the class room
  - they can ask the coaches for help at any time
  - always try to help each other
  - take a break within the next 1.5 hrs
  - keep an eye on Slack

---

## Evaluate: Recap of the assignment / Discussion of the MVP / Solution

- Revisit the question that was posed in the beginning of the session and try to answer it with a
  few phrases.

---

## Checkout

> 💡 In case the students seem frustrated try to find some encouraging words (e.g. remind them of
> how far they have come already) :)

- [ ] Summarize the day by repeating all of the topics that were discussed
- [ ] Highlight the progress made that day
- [ ] Encourage the students to repeat what they learned with practical exercises
- [ ] Remind them to rest :)

## Keywords for Recap:

return statement, early return, arrow function, implicit return

> These keywords are for the weekly summary on Fridays. We use the keywords to automatically
> generate excalidraw tags with the help of
> [this amazing tool](https://github.com/F-Kirchhoff/tag-cloud-generator). The students structure
> the cards in a pattern that makes sense for them. Each tag, that is added to the structure needs
> to be explained in a few words by one student. We go in rounds one by one until all tags are
> included in the structure.
