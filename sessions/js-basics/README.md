# JavaScript Basics

> 💡 feel free to create a personal branch of this guide to add your own notes

| duration | content         |
| -------- | --------------- |
| 1:15     | Session         |
| 1:15     | Active Learning |
| 0:15     | Recap           |

## Learning objectives

- [ ] understand what JavaScript is
- [ ] understand how to use `querySelector`
- [ ] add, remove and toggle CSS classes
- [ ] understand events and how to use `addEventListener`
- [ ] get to know the JS console, work with `console.log()` / `console.clear()`

## Arrival: Motivate students and prepare them for today's topic(s)

> 💡 Get dynamic... ;)

- What is your idea of interactivity or dynamic actions on a website?

### Which important problem will we solve today?

- Bringing action and dynamics to a website
- get an idea of the power (and the pitfalls) of JavaScript
- get an insight on its importance as a fundamental development skill

### Why is the content of today's block that important for the students?

- JavaScript is among the first three most in-demand programming languages, knowledge is mandatory
  for fullstack web developers
- The most used development libraries and frameworks are based on JavaScript, from backend to
  frontend

---

## Activate prior knowledge of students

### Which previously learned concepts will be utilized in this session?

- HTML Basics
- CSS Basics
- CSS Selectors

---

## Inform: Session Guide

Run this demo locally in your terminal:

```
npx ghcd@latest spicedacademy/fs-web-exercises/tree/main/sessions/js-basics/demo-start
```

You can check out the final version of this demo with:

```
npx ghcd@latest spicedacademy/fs-web-exercises/tree/main/sessions/js-basics/demo-end
```

### Short introduction of what JavaScript is (5 min max)

- [ ] Explain why JavaScript is needed: **Makes web pages interactive**
- [ ] Explain **ECMAScript 6**:
  - [ ] ECMAScript is the JavaScript standard
  - [ ] ECMAScript 6 is the second major revision to JavaScript and was published in 2015
- [ ] Optional: Historical background to the `naming of JavaScript` (JavaScript is not Java), for
      reference:
      [The history of JavaScript](https://www.springboard.com/blog/data-science/history-of-javascript/)

### Console

- [ ] Open the browser console on any page.
- [ ] Explain that the console is a CLI (Command Line Interface) in your browser.
- [ ] Show how to log into the console:

```js
console.log("Hello World!"); // logs into console
console.clear(); // clears console
console.error("Error!"); // logs as error into console
```

- [ ] Explain that we can use the console for debugging or error logging.

### QuerySelector

- [ ] Explain that we can manipulate the DOM with the help of JavaScript, e.g. change the CSS classes of HTML
      elements.
- [ ] Note that we want to change the styling of the `main` element.
- [ ] Show that we need to select the respective HTML element:
  - [ ] in the `index.js`, create a variable like `mainElement`;
  - [ ] we use the `document` interface provided by the browser;
  - [ ] the `querySelector` method takes a string as argument and returns **the first HTML element** which matches the search query
  - [ ] note that we could search for any string (like `.querySelector("main")` or `.querySelector("body")`), but we want to be as specific as possible to avoid errors;
  - [ ] this is why we've agreed upon the `data-js` attribute for our course.
- [ ] Log the element to the console and show the students what kind of object it is, which
      properties it has, e.g. `classList`.

```html
<body>
  <main class="main" data-js="main">...</main>
</body>
```

```js
const mainElement = document.querySelector('[data-js="main"]');
console.log(mainElement);
```

> 📙 Read more about [the custom `data-*` global attribute on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/data-*).

### Adding, removing, and toggling CSS classes with classList

- [ ] Show that in `css/styles.css`, there is a `dark` class we want to use to change the styling of the `main` element.

```css
.dark {
  background-color: black;
  color: #eee;
}
```

- [ ] Switch to `js/index.js` and explain how to do this:
  - [ ] the HTML element `mainElement` has the property `classList`;
  - [ ] use `classList.add("dark")` to add the `dark` class to the `mainElement`;
  - [ ] use `classList.remove("dark")` and show that the `dark` class is removed.

```js
mainElement.classList.add("dark");
mainElement.classList.remove("dark");
```

### Acting on events with addEventListener

- [ ] Remind students that the way to manipulate the DOM with `classList.add()` and `classList.remove()` described above has one disadvantage: it cannot be utilized by users because they don't have access to the `index.js` file.
- [ ] Note some examples a user interacts with our website:
  - [ ] a click on a button
  - [ ] hovering over an element
  - [ ] pressing a key on the keyboard
  - [ ] resizing the browser window
- [ ] Explain that all these interactions trigger a so-called `event` we can utilize to react to the user behavior.

- [ ] Show how to add an event listener to a button and react to a click:

```html
<!-- index.html -->
<button type="button" data-js="logging-button">Log into console</button>
```

```js
// js/index.js
const myLoggingButton = document.querySelector('[data-js="logging-button"]');
myLoggingButton.addEventListener("click", () => {
  console.log("You clicked a button");
});
```

- [ ] Demonstrate that the code works and explain the different parts:

  - [ ] we select the button element with the `querySelector` and "save it as a variable with the name
        `myLoggingButton`"
  - [ ] we use the method `addEventListener` on the button. It's something we don't have to fully
        understand now - we have to know that we have to write `addEventListener` with brackets and have to
        use the syntax in this exact way.
  - [ ] the `click` tells us that we listen to the click event
  - [ ] the "function body" (the thing we write in the curly braces) is the JavaScript that is being
        executed when the event is triggered.

- [ ] Explain that we want to have three buttons: one to add, one to remove, and one to toggle the color of the `mainElement`.
- [ ] Add three buttons to your `index.html`:

```html
<button type="button" data-js="add-button">Add color</button>
<button type="button" data-js="remove-button">Remove color</button>
<button type="button" data-js="toggle-button">Toggle color</button>
```

- [ ] In `index.js`, query the three buttons and listen to the click event:

```js
const addColorButton = document.querySelector('[data-js="add-button"]');
const removeColorButton = document.querySelector('[data-js="remove-button"]');
const toggleColorButton = document.querySelector('[data-js="toggle-button"]');

addColorButton.addEventListener("click", () => {
  mainElement.classList.add("dark");
});

removeColorButton.addEventListener("click", () => {
  mainElement.classList.remove("dark");
});

toggleColorButton.addEventListener("click", () => {
  mainElement.classList.toggle("dark");
});
```

- [ ] Show that the user can now use the three buttons to change the color.
- [ ] Finish by noting that we can listen to other events like `mouseover` or `keydown`.

---

## Process: Challenges

- [ ] Provide the [handout](js-basics.md) and [challenges](challenges-js-basics.md) to the students
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

console, document, event listener, classList.toggle, document.querySelector

> These keywords are for the weekly summary on Fridays. We use the keywords to automatically
> generate excalidraw tags with the help of
> [this amazing tool](https://github.com/F-Kirchhoff/tag-cloud-generator). The students structure
> the cards in a pattern that makes sense for them. Each tag, that is added to the structure needs
> to be explained in a few words by one student. We go in rounds one by one until all tags are
> included in the structure.
