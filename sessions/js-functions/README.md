# JS Functions

> 💡 feel free to create a personal branch of this guide to add your own notes

| duration | content         |
| -------- | --------------- |
| 0:45     | Session         |
| 1:30     | Active Learning |
| 0:30     | Recap           |

## Learning objectives

- [ ] writing functions in JavaScript
- [ ] calling functions
- [ ] using function parameters
- [ ] learning what 'scope' is

---

## Arrival: Motivate students and prepare them for today's topic(s)

> 💡 Breathe and relax :)

### Which important problem will we solve today?

- We don't want to write identical or similar code multiple times. => Which leads to more workload,
  more bugs, less maintainability

### Why is the content of today's block that important for the students?

- We will learn one of the most important core concepts of programming languages.

### Pose a question to be answered by the end of the block!

---

## Activate prior knowledge of students

### Which previously learned concepts will be utilized in this session?

- We will use all prior JavaScript knowledge.
- We will talk about variables in the context of functions specifically

---

## Inform: Session Guide

### Functions

- Ask students whether they have an idea what a function is
- Explain functions: They contain a set of statements - in other words: They contain JavaScript code
  to be executed when the function is called.
- Functions have to be defined and called.
- Explain functions as **reusable code packages**. Possible analogy: A function is like a recipe.
  You can write a recipe (define a function), but that does not mean you have a cake that you can
  eat. You have to bake the cake according to the recipe (call the function).

### Function declarations

Function declarations are a way of defining functions. Show this example:

```js
function greet() {
  console.log("Hi Friends!");
  console.log("Nice to be here.");
}
```

Explain that the function declaration consists of:

- the function keyword
- the function name
- the function body (JavaScript statements / JavaScript code)

Explain that you can write any JavaScript statement in a function body (e.g. declaring variables):

```js
function printPersonalData() {
  const name = Alex;
  const age = 24;
  console.log(name + " is " + age + " years old");
}
```

### Calling functions

- Explain that functions have to be called for their code to be executed.
- Call the functions from before and show the console output

```js
greet();
printPersonalData();
```

- Explain that functions can be called an arbitrary number of times

```js
greet();
greet();
```

### Parameters

- Explain that functions can consume parameters, which can be used like predefined variables inside
  the function body.
- Explain that parameters can be named arbitrarily (with exception of reserved words and with
  variable shadowing in mind - no need to say that, but have it in mind if someone asks)
- Explain that variables should be named short and descriptive
- Explain that parameters have to be passed in as arguments when calling the function.
- When defining a function it is called parameters, when calling a function it is called arguments
- Show some examples, such as:

```js
function printLetter(name) {
  console.log("Hi " + name + ", hope you are fine. Love, Johnny");
}

printLetter("Max");
printLetter("Jordan");

function printSum(first, second, third) {
  const sum = first + second + third;
  console.log("The sum of your numbers is: " + sum);
}

printSum(1, 2, 3);
printSum(3, 4, 5);
```

### Scope

- Explain that scope defines where variables are visible and where they can be referenced.
- Explain that there are different kinds of scopes in JavaScript and that there are two scopes which
  are most important for us:

  - Function scope
  - Global scope

- Function scope: Explain that the variables defined inside a function can not be referenced from
  outside the function. Explain that parameters behave in the same way.
- Global scope: Explain that variables defined outside of a function (or Block) are visible (can be
  referenced) from anywhere in the same JavaScript file after the definition.
- Show an example to make the two concepts clear:

```js
let globalAge = 24;

function myFunction() {
  const localAge = 36;
  console.log(globalAge);
  console.log(localAge);
}

myFunction();
globalAge = globalAge + 1;
myFunction();

console.log(localAge); // Error! Variable not available outside of function
```

---

## Process: Challenges

- [ ] Provide the [handout](js-functions.md) and the [challenges](challenges-js-functions.md) to the
      students
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

function declaration, function call, parameter, argument, scope

> These keywords are for the weekly summary on Fridays. We use the keywords to automatically
> generate excalidraw tags with the help of
> [this amazing tool](https://github.com/F-Kirchhoff/tag-cloud-generator). The students structure
> the cards in a pattern that makes sense for them. Each tag, that is added to the structure needs
> to be explained in a few words by one student. We go in rounds one by one until all tags are
> included in the structure.
