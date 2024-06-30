# JS Forms

> 💡 feel free to create a personal branch of this guide to add your own notes

| duration | content         |
| -------- | --------------- |
| 0:45     | Session         |
| 1:30     | Active Learning |
| 0:30     | Recap           |

## Learning objectives

- prevent the default behavior of form submit with `.preventDefault()`
- listening to submit events
  - learn what `event` and `event.target` is
  - reading input values via their names:
    - `.elements`
    - `FormData` / `Object.fromEntries()`
    - the `name` attribute of a form field
- understanding the input event
- know how to focus inputs programmatically
- know how to reset the form programmatically

---

## Arrival: Motivate students and prepare them for today's topic(s)

> 💡 Breathe and relax :)

### Which important problem will we solve today?

After building a form with accessible HTML, our job is not done - we want to access the user input
after submit as well! This is where JavaScript comes into play:

- How do we handle the default behavior of our forms?
- How do we access the data after form submit in order to use it?

---

## Activate prior knowledge of students

### Which previously learned concepts will be utilized in this session?

- HTML Forms
- JS Functions
- JS Callback Functions

---

## Inform: Session Guide

Use this demo locally by running this command in your Terminal:

```bash
npx ghcd@latest spiced-academy/fs-web-exercises/tree/main/sessions/js-forms-new/demo-start
```

You can check out the final version of this demo locally by running this command in your Terminal:

```bash
npx ghcd@latest spiced-academy/fs-web-exercises/tree/main/sessions/js-forms-new/demo-end
```

### Listening to the submit event / preventing default form submit behavior

- Remind the students of the default submit behavior: Forms sends a GET request and page reloads => data is lost for us

- Remind the students that we need to query the form first in order to add some interactivity with JavaScript:

  ```js
  const form = document.querySelector('[data-js="form"]');
  ```

- Add an event listener for the submit event:

  - is called on form submit
  - triggers a submit event which provides us with an `event` object
  - the `event` object has a method called `preventDefault()`

- Use `console.log(event)` to show its methods and properties (especially `preventDefault()` and `.target`).

  ```js
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    console.log(event);
  });
  ```

- Use the network tab again to show that there is no GET request anymore.

### The Event Object and `event.target`

- Explain the event object:

  - is created when an event is triggered
  - we can access it as an argument of our callback function
  - important method: `event.preventDefault()`
  - important property: `event.target`

- Show that `event.target` is a reference to the entire form:

  ```js
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    console.log(event.target);
  });
  // Output:
  // <form data-js="form">
  //		<fieldset>...</fieldset>
  //		...
  //		<button type="submit">Submit</button>
  //	</form>
  ```

### Accessing Interactive Fields: `event.target.elements` and the `name` Attribute

- Explain the `.elements` property of `event.target`:

  - represents a collection of all form controls
  - form controls are accessible via dot notation and the `name` key:
    - `elements.firstName` returns the form field where attribute `name="firstName"`
    - `elements.firstName.value` returns only the value of the form field with attribute
      `name="firstName"`
  - remind students that the `name` attribute is crucial at this point
  - for readability, it's useful to save `event.target.elements` in a variable

```js
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formElements = event.target.elements;

  console.log(formElements.firstName);
  console.log(formElements.firstName.value);
});
```

### Using Input Values

- Show how to access all input values with the `FormData`

- Explain the `FormData` interface:

  - `new FormData(event.target)` creates a `FormData` object using the entire form via `event.target`
  - `Object.fromEntries()` transforms the `FormData` object into a usable object

```js
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log(data);
});
```

### Resetting a form

- Explain that it is a good idea to reset a form to allow for new data to be entered
- Show an example of a form reset in the demo
  - Add `event.target.reset()` to the end of the submit handler function
- Explain that it is a good idea to focus an input field after submitting the form to further improve user experience (hands can stay on the keyboard and the user can input new data immediately)
- Give a common example: e.g. message input for a chat app
- Show an example in the demo app
  - Use `event.target.elements.firstName.focus()` to focus the first input

### Input Event

- Explain that we have to listen to the `input` event if we want to react to every user input the user makes on an input field
- Show an example for the `input` event in the demo
- Demonstrate with `console.log()` that the event is triggered with every keystroke

```js
const messageInput = document.querySelector('[data-js="personal-message"]');

messageInput.addEventListener("input", (event) => {
  console.log(event.target.value);
});
```

- Make the characters left on the page show the correct value using the `input` event:

```js
const messageInput = document.querySelector('[data-js="personal-message"]');
const charactersLeftElement = document.querySelector(
  '[data-js="remaining-characters"]'
);

messageInput.addEventListener("input", (event) => {
  charactersLeftElement.textContent = 150 - parseInt(event.target.value.length);
});
```

---

## Process: Challenges

- Provide the [handout](js-forms.md) and the [challenges](challenges-js-forms.md) to the students
- Open the handout and walk the students through the tasks
- Divide the students into groups of 3
- Remind them of the ground rules:
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

- Summarize the day by repeating all of the topics that were discussed
- Highlight the progress made that day
- Encourage the students to repeat what they learned with practical exercises
- Remind them to rest :)

## Keywords for Recap:

event.preventDefault(), new FormData(), Object.fromEntries(), event.target.elements, input event, form.reset(), input.focus()

> These keywords are for the weekly summary on Fridays. We use the keywords to automatically
> generate excalidraw tags with the help of
> [this amazing tool](https://github.com/F-Kirchhoff/tag-cloud-generator). The students structure
> the cards in a pattern that makes sense for them. Each tag, that is added to the structure needs
> to be explained in a few words by one student. We go in rounds one by one until all tags are
> included in the structure.
