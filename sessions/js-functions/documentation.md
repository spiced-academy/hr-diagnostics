# JS Functions

## Learning Objectives

In this session you will learn:

- [ ] how to write functions in JavaScript
- [ ] how to call functions
- [ ] how to use function parameters
- [ ] what 'scope' is

---

## Function Declarations and Function Calls

Functions are an extremely useful tool whenever you want to perform the same task multiple times.
They are **blocks of code** that can be executed any number of times. A good analogy for functions
is a recipe: a task like baking a cake is written down in a recipe. This cake can then be baked
simply by looking up that recipe and following the instructions.

A `function declaration` is exactly this set of instructions. But a declaration does nothing by
itself (you cannot eat the recipe, but only the cake). You can then execute the instructions, aka
baking the cake, by `calling the function`.

The declaration consists of 4 parts:

1. the keyword `function`
2. a `name for the function`, that is chosen by the programmer (must start with a lowercase letter)
3. a pair of `round brackets` (more about them later)
4. the `function body`: a pair of curly brackets, containing one or more lines of code.

A function declaration could look like this:

```js
function aSuperUsefulFunction() {
	... //the function body: lines of code that will be executed on a function call
}
```

The `function call` on the other hand is just the function name followed by a pair of round
brackets. It could look like this:

```js
aSuperUsefulFunction(); // executes whatever is specified in the function declaration.
```

Everything in the function body will be executed **whenever the function is called** in another part
of the code. For example:

```js
function logThreeTimes() {
  console.log("first");
  console.log("second");
  console.log("third");
}

logThreeTimes();
// will log:
// first
// second
// third

logThreeTimes();
// will log again:
// first
// second
// third
```

This function can be called now any number of times, and every time the three console.logs will be
executed.

## Scope

When learning about functions, it is also important to understand the scope of variables. The scope
of a variable determines where it is accessible (visible). There are 3 types of scope in JavaScript:

- global scope
- block scope
- function scope / local scope

A variable has `global scope` when it is declared outside of any function, in a JavaScript file.
Global variables are visible and can be accessed from anywhere in a program.

The `block scope` applies to a variable when you wrap your code in curly brackets. Variables
declared inside these brackets are sealed away from the rest of the program and only exist
**locally** inside this block:

```js
const count = 10;

// starting a code block
{
  const count = 5; // new local variable, does not overwrite the global variable, but is valid within this code block
  console.log(count); // 5
}

console.log(count); // 10 - not affected by code block
```

The `function scope`, also known as local scope, is similar to the block scope. Variables defined
**inside a function** are not accessible from the outside. But all variables **outside of the
function** can be accessed inside the function body. It is a one way road:

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

## Functions with Input Parameters

Very often we want to perform the same task multiple times, but with slight variations to it, e.g.
writing a group letter and addressing each person individually:

```js
function printLetterToMarc() {
  console.log("Hi Marc, hope you are fine. Love, Johnny");
}

function printLetterToLisa() {
  console.log("Hi Lisa, hope you are fine. Love, Johnny");
}
```

You can **generalize** this action by using `input parameters`. They work like variables. **The name
is chosen by the programmer** and they are defined inside the round brackets of the function
declaration:

```js
function printLetter(name) {
  console.log("Hi " + name + ", hope you are fine. Love, Johnny");
}
```

In the function declaration the value of a parameter is not defined yet. Their value is specified
"on demand" when the function is called. For each function call the value is assigned anew:

```js
printLetter("Marc");
// Hi Marc, hope you are fine. Love, Johnny

printLetter("Lisa");
// Hi Lisa, hope you are fine. Love, Johnny

printLetter("1234abcd");
// Hi 1234abcd, hope you are fine. Love, Johnny
```

You can pass down variables as well:

```js
const username = "Eve";
printLetter(username); //
// Hi Eve, hope you are fine. Love, Johnny
```

A function can have multiple input parameters separated by commas:

```js
function add3Numbers(first, second, third) {
  const sum = first + second + third;
  console.log(sum);
}

add3Numbers(1, 2, 3); // 6
add3Numbers(4, 123, 33); // 160
```

Here you can see that with the first function call the values are assigned as:

- first = 1
- second = 2
- third = 3

With the second function call it is very different

- first = 4
- second = 123
- third = 33

So with every function call we decide what the values of these parameters should be. This helps us
to `reuse our code`:

1. We define the `logic` of our code **once** in a function.
2. Every bit of the code that changes in different circumstances is turned into a `parameter` and is
   used just like a variable inside the function.
3. When calling the function, the value of the parameter is defined within the round brackets

> ❗️ Be careful: The order matters when calling the function and assigning the values to the
> parameters. The first value will be assigned to the first parameter and so on.

---

# Challenges

## Part 1

## Part 2

---

## Resources

```

```
