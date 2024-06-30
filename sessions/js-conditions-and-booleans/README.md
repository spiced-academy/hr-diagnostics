# JS Conditions and Booleans

> 💡 feel free to create a personal branch of this guide to add your own notes

| duration | content         |
| -------- | --------------- |
| 0:45     | Session         |
| 1:30     | Active Learning |
| 0:30     | Recap           |

## Learning objectives

- using conditions to control the program flow
- understanding what booleans and truthy/falsy values are
- working with comparison and logical operators
- writing ternary expressions

---

## Arrival: Motivate students and prepare them for today's topic(s)

> 💡 Breathe and relax :)

### Which important problem will we solve today?

Most of the time when programming you want to do different things, depending on some kind of
condition. In this session we will learn how to do that in JavaScript.

### Why is the content of today's block that important for the students?

- Almost all computational problems require some kind of branching or conditional programming.
- Booleans are the most fundamental building block of all computer science.

### Pose a question to be answered by the end of the block!

Computers are electronics. Electronics are build on the principles of zeros and ones that are
combined using circuits that perform logical operations on them (And-Gate, Or-Gate, etc.). How does
this concept translate into a higher level language like JavaScript?

---

## Activate prior knowledge of students

### Which previously learned concepts will be utilized in this session?

- JS Basics
- Variables
- Variable Types

---

## Inform: Session Guide

Run this demo locally in your terminal:

```
npx ghcd@latest spicedacademy/fs-web-exercises/tree/main/sessions/js-conditions-and-booleans/demo-start
```

You can check out the final version of this demo with:

```
npx ghcd@latest spicedacademy/fs-web-exercises/tree/main/sessions/js-conditions-and-booleans/demo-end
```

### Conditional programming

Tell students a story:

> - Imagine having a child that loves to snack carrots (all kids do, right? 🥕).
> - Therefore you're using it as a treat.
> - Your kid gets two carrots as a baseline.
> - _If_ it helps cleaning the kitchen it can get two more.
>
> 👶 By the way: none of this is parenting advice!

Ask students about the meaning of the word `if` in this story.

Open a code editor and write some code:

```js
let carrots = 2;

carrots = carrots + 2;
```

Ask students if this code does what the story describes. You should come to the conclusion, that
this code `unconditionally` adds two carrots.

Tell students, that you can write an `if-statement` in JavaScript, that can kinda be read like a
sentence.

Change the code to:

```js
let carrots = 2;

if (kidDidHelpCleaningTheKitchen) {
  carrots = carrots + 2;
}
```

Discuss that this code `conditionally` executes the code block defined within the curly brackets.

Show students that the code throws an error.

Ask students what the type of `kidDidHelpCleaningTheKitchen` might be in this case.

- You can give the hint that it is some kind of variable.
- We are using the variable, but we have not declared it yet.
- It must be some kind of variable that contains either a `yes` or a `no`.

Explain that the JavaScript equivalents of `yes` and `no` are `true` and `false`. [^1]

Change the code:

```js
let carrots = 2;

const kidDidHelpCleaningTheKitchen = true;

if (kidDidHelpCleaningTheKitchen) {
  carrots = carrots + 2;
}
```

Feel free to add a `console.log(carrots)` and experiment with different values.

Explain that this is called a Boolean value (after George Bool) and that it only has two states:
`true` or `false`.

### Else

Suppose you wanted to take the carrots away from the child, when in fact it would _not_ help to
clean the kitchen.

Modify the story from above like this:

> `If` the kid did help cleaning the kitchen, add two carrots, `else` subtract one carrot.

Adjust the code:

```js
let carrots = 2;

const kidDidHelpCleaningTheKitchen = false;

if (kidDidHelpCleaningTheKitchen) {
  carrots = carrots + 2;
} else {
  carrots = carrots - 1;
}
```

Explain that the optional `else` block does not have a condition (`()`) and always follows after an
`if` block.

Explain that executing different code based on a `condition` is called `branching`. And that we just
made our first full `if/else-statement`.

### Creating booleans from other values

Explain that a static `true` or `false` by itself is seldomly helpful.

Modify the scenario again:

> If the kid cleaned more than 3 dishes, it gets the extra carrots.

Explain that you now need a variable to track how many dishes have been cleaned and that from that
we have to create a boolean variable.

To create it we have to check if the cleaned dishes counter is `larger than 3`.

Add this code:

```js
let carrots = 2;
const dishesCleaned = 4;

const kidDidHelpCleaningTheKitchen = dishesCleaned > 3;

if (kidDidHelpCleaningTheKitchen) {
  carrots = carrots + 2;
} else {
  carrots = carrots - 1;
}
```

Explain that comparison operators like larger than (`>`) etc. compare two values and evaluate to a
boolean (`true` or `false`).

Two very important operators are `equals to` and it's counterpart `not equals to`. In JavaScript
they are written as `===` and `!==` respectively. (It is not necessary to explain strict vs.
non-strict equality here. There is a brief explanation in the handout.)

If we were to say that the kid only helped if it cleaned `exactly 3` dishes we could write:

```js
let carrots = 2;
const dishesCleaned = 4;

const kidDidHelpCleaningTheKitchen = dishesCleaned === 3;

if (kidDidHelpCleaningTheKitchen) {
  carrots = carrots + 2;
} else {
  carrots = carrots - 1;
}
```

More comparison operators will be in the handout.

> 💡 This is a good place to ask for questions or take a quick 1 min break.

### The ternary operator

Sometimes it can be cumbersome to write lengthy `if/else-statements`. Especially if we do small
things like changing the value of one variable. Explain that there is a shorter way. We can write a
conditional `expression`.

Change up the code a little bit and ensure/discuss that we have not changed the functionality (no
ternary yet).

```js
let carrots = 2;
const dishesCleaned = 4;
const kidDidHelpCleaningTheKitchen = dishesCleaned === 3;

let extraCarrots = 0;

if (kidDidHelpCleaningTheKitchen) {
  extraCarrots = 2;
} else {
  extraCarrots = -1;
}

carrots = carrots + extraCarrots;
```

Acknowledge that this looks way more cumbersome than before.

Explain that `if` is a `statement` and not an `expression`. That means we cannot use it in places
were we can only use expressions (e.g. when assigning something to a variable).

The `ternary` operator can help here. It is best seen in action:

```js
let carrots = 2;
const dishesCleaned = 4;
const kidDidHelpCleaningTheKitchen = dishesCleaned > 3;

let extraCarrots = kidDidHelpCleaningTheKitchen ? 2 : -1;

carrots = carrots + extraCarrots;
```

The ternary expression always follows the formula: `condition ? value if true : value if false`. It
evaluates to one of the values. And it can be assigned just like any other expression.

Now our code looks much smaller. But it is important to acknowledge that it is not always more
readable than using an `if/else-statement`.

Since expressions can be composed together, our code can be even shorter by using less intermediate
variables, but it then becomes even less readable and loses intent.

```js
let carrots = 2;
const dishesCleaned = 4;

carrots = carrots + (dishesCleaned > 3 ? 2 : -1);
```

Compare this with the last version were we used an `if/else-statement` and ask students which
version seems more readable to them. Explain that readability is much more important than short and
clever solutions.

### Switch

Sometimes we want to check a variable or expression, to see if its value is one of a few very specific possible values. In this situation, we can make use of the **switch** statement.

The `switch` statement works by taking the variable or expression, then moving sequentially through a list of possible **cases** for its value. In each `case` that it gets to, it compares the checked value with the case's value. If they match, the code in this `case` will be run. If they don't match, JavaScript will move on to the next `case` in the sequence.

Here's an example:

```js
console.log("Which is your favorite season of the year?");
const userAnswer = "spring";

switch (userAnswer) {
  case "summer":
    console.log("Heat, sun and waves for you 😎");
    break;
  case "autumn":
    console.log("Crunchy, colorful leaves and cool breezes 🍁");
    break;
  case "winter":
    console.log("Ice, snow, warm clothes and hot drinks ☕️");
    break;
  case "spring":
    console.log("Growth, green, and new beginnings! 🌿");
    break;
  default:
    console.log("Sorry, I don't think that's a season!");
}
```

Please note the **syntax** of the `switch`:

1. Like an `if`, you need to wrap the checked value/expression in parentheses
2. Like an `if`, wrap the entire body of the `switch` in braces/curly brackets
3. Each `case` offers one single value (not an expression!), and a colon (`:`)
4. To prevent JavaScript from flowing from one `case` to another, be sure to end off each `case` with a `break`!
5. You can add a `default` case if you like; generally a good idea. It does not need to end with `break`

### Type coercion and truthy / falsy

Explain that in places where JavaScript needs a boolean variable but we give it any other variable
type it tries to guess what boolean value would best describe whatever we specified.

This is called `type coercion` in general. Show students this example:

```js
let carrots = 4;

if (carrots) {
  console.log("Hand out the carrots already! 🥕");
}
```

Here `carrots` has the value `4`, so we basically are telling JavaScript `if(4)`.

The value `4` is coerced to `true`. In fact any number that is not `0` will be interpreted as
`true`.  
The set of values that is interpreted as `true` is called "truthy".

If `carrots` were `0` (change the code to show students) it's value would coerce to `false`.  
The set of values that is interpreted as `false` is called "falsy".

A more complete list of values that are truthy and falsy can be found in the handout.

Explain that this concept can be very helpful, for example when checking if a value "exists". (Just
like in the example.) But you have to be careful, because as far as JavaScript is concerned all of
these are falsy: `if(false)`, `if(0)`, `if('')`, `if(null)`, `if(undefined)`.

---

## Process: Challenges

- [ ] Provide the [handout](js-conditions-and-booleans.md) and the
      [challenges](challenges-js-conditions-and-booleans.md) to the students
- [ ] Open the handout and walk the students through the tasks
- [ ] Divide the students into groups of 2
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

George Bool, truthy, falsy, strict equality, type coercion, ternary operator, if statement

> These keywords are for the weekly summary on Fridays. We use the keywords to automatically
> generate excalidraw tags with the help of
> [this amazing tool](https://github.com/F-Kirchhoff/tag-cloud-generator). The students structure
> the cards in a pattern that makes sense for them. Each tag, that is added to the structure needs
> to be explained in a few words by one student. We go in rounds one by one until all tags are
> included in the structure.

[^1]:
    Fun fact: Some languages, like Objective-C, actually use `YES` and `NO` instead of `true` and
    `false`. ([Source](https://riptutorial.com/objective-c/example/16004/bool))
