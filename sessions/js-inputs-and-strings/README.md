# JS Inputs and Strings

## Active Learning

This is an Active Learning session for the students. That means that the coach assigned to the session only needs to provide a brief 5-10 minute intro. Old session guide is retained below incase it is decided to be used as a one off.

- [ ] Intro topic for 5 - 10 mins
- [ ] Share [Active Learning Guide](active-learning.md) with the students.
- [ ] Share [Challenges](challenges-css-responsive.md) with the students.

## Active Learning Intro

- often we have to deal with strings that are generated based on other variables;
- we refer to this concept as **interpolation** or **templating**;
- you can briefly show how a function like:
  ```js
  function sayHello(name) {
    console.log(`Hello, ${name}!`);
  }
  // example calls
  sayHello("Jane");
  sayHello("Mario");
  ```
- strings come in JavaScript with various useful **properties** (mainly `length`) and **methods**;
- strings contain human friendly information, and we can retrieve informations from humans via **HTML inputs**;
- you can use [this playground](https://6cpqpr.csb.app/) to briefly demonstrate what string methods do via inputs, without going into detail with code.

## Session Guide

> 💡 feel free to create a personal branch of this guide to add your own notes

| duration | content         |
| -------- | --------------- |
| 0:45     | Session         |
| 1:30     | Active Learning |
| 0:30     | Recap           |

## Learning objectives

- learning different ways of writing strings
- using string properties and methods
- working with input elements

---

## Arrival: Motivate students and prepare them for today's topic(s)

> 💡 Breathe and relax :)

### Which important problem will we solve today?

You will learn to read string values from inputs as well as manipulating and outputting them.

### Why is the content of today's block that important for the students?

- Strings are a fundamental building block of programming.
- Inputs are part of most interactive applications.

### Pose a question to be answered by the end of the block!

---

## Activate prior knowledge of students

- Ask students how they previously worked with text in JavaScript.

### Which previously learned concepts will be utilized in this session?

- JS Functions (the string concatenate part)
- HTML Forms
- A tiny bit of JavaScript Math
- Ternary operator (for the bonus)

---

## Inform: Session Guide

Run this demo locally in your terminal:

```
npx ghcd@latest spicedacademy/fs-web-exercises/tree/main/sessions/js-inputs-and-strings/demo-start
```

You can check out the final version of this demo with:

```
npx ghcd@latest spicedacademy/fs-web-exercises/tree/main/sessions/js-inputs-and-strings/demo-end
```

- [ ] Explain to students that we're about to build a "story generator" that based on user input,
      will output a short story that includes the user input.

- [ ] Invite students to think about what would be required to create such a program:

  - [ ] We need a way for the user to input stuff
  - [ ] We need a function that is executed to create the story
  - [ ] In that function the user input needs to be put into the story

- [ ] Show that we currently log `"Hello, World!"` to the console, when the "Create story" button is
      clicked.
- [ ] Recap the input fields that are present in the example.

- [ ] Explain that `"Hello, World!"` is in fact a string.

- [ ] Explain that a string is a `sequence of characters` that is `represented in text` form.

- [ ] Show that you can use either `""` or `''` to define a string. This is a string literal.

- [ ] Remove the `console.log`, set `output.textContent = "Hello, World!"` and show that we can
      modifiy/overwrite the text content of HTML elements.

### Combining variables and strings

We already know how to combine variables and strings into a longer string from the JavaScript
Functions sessions.

- [ ] Ask students how we'd have to change the code to greet the name from the input field instead
      of the world.
  - [ ] You might need to give the hint that we need to access the `.value` property of the input:

```js
output.textContent = "Hello, " + nameInput.value + "!";
```

### Template strings

- [ ] Explain that there is an even nicer way to interpolate (meaning to put into) values into a
      string using `template strings`.

- [ ] Change the code to:

```js
output.textContent = `Hello, ${nameInput.value}!`;
```

- [ ] Explain what `${}` does and that this is still a string literal, specifically a
      `template string literal`.

> 💡 Show how to type the backtick character "`` ` ``" using <kbd>⇧</kbd><kbd>´</kbd> (next to the
> backspace key).
>
> It's easiest to create a new template string by typing two backticks and then pressing the left
> arrow (<kbd>◀︎</kbd>). Otherwise macOS sometimes thinks that we're trying to write an accented
> character like à.

- [ ] Explain that template literals have one more feature that is different from the other string
      literals: They support line breaks!

- [ ] Copy in the following code and show what it does:

```js
const story = `
    "DON'T TOUCH IT, <NAME>!",
    I yelled as <name> was about to touch
    the walls we had painted <color> not
    <hours> hours ago.
    I would have expected their memory to
    last at least <hours + 1> hours.
`;

output.textContent = story;
```

- [ ] Show students that line breaks and double spaces do not show up in the rendered DOM.

### Template string interpolation

- [ ] Before interpolating, assign values to variables for a cleaner look.
- [ ] Begin interpolating in the values from the input fields.

  > 💡 Let students help you do this!

- [ ] **`<name>`** should be replaced by the value of the name input.

  1. add `const name = nameInput.value;`
  2. replace `<name>` with `${name}`

- [ ] **`<color>`** should be replaced by the value of the color input.

  1. add `const color = colorInput.value;`
  2. replace `<color>` with `${color}`

- [ ] **`<hours>`** should be replaced by the value of the hours input.
  1. `const hours = hoursInput.value;`
  2. replace `<hours>` with `${hours}`

### String methods

- [ ] Now explain that:

  - [ ] **`<NAME>`** (the all caps one) should be replaced by the value of the name input but as
        uppercase letters.

  1. explain that strings have properties and methods
  2. open
     [the mdn docs for string instance methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#instance_methods)
     and search for "uppercase" to discover the `toUpperCase()` method
  3. add `const nameUpperCase = name.toUpperCase()`
  4. replace `<NAME>` with `${nameUpperCase}`

Other properties and methods for strings will be in the handout.

### Input values are strings

Now for the last one:

- [ ] **`<hours + 1>`** should be replaced by values of the hours input plus one.

  1. replace `<hours + 1>` with `${hours + 1}`
  2. show that it breaks (e.g. `"14" + 1` → `"141"`)
  3. explain that any input value is of type string and that string `+` anything evaluates to a
     string
  4. explain that we can _cast_ (meaning to convert one type into another) strings to integer
     numbers using the
     [`Number.parseInt` method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt)
  5. replace `const hours = hoursInput.value;` with
     `const hours = Number.parseInt(hoursInput.value, 10);`
  6. now that `hours` is a number, everything should work
  7. you can ask students to investigate what the `10` means during the challenges

### Correct grammar bonus (if there is time)

- [ ] If the value of the hours input is `"1"` our text reads: "1 hours".

- [ ] Ask students if they can think of a way to change it to be "1 hour" without also changing it
      for values larger than 1.

> 💡 The ternary operator might come in handy here.

---

## Process: Challenges

- [ ] Provide the [handout](js-inputs-and-strings.md) and the
      [challenges](challenges-js-inputs-and-strings.md) to the students
- [ ] Open the handout and walk the students through the tasks
- [ ] Divide the students into groups of 3
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

template string, string interpolation, toUpperCase(), concatenation, input.value

> These keywords are for the weekly summary on Fridays. We use the keywords to automatically
> generate excalidraw tags with the help of
> [this amazing tool](https://github.com/F-Kirchhoff/tag-cloud-generator). The students structure
> the cards in a pattern that makes sense for them. Each tag, that is added to the structure needs
> to be explained in a few words by one student. We go in rounds one by one until all tags are
> included in the structure.
