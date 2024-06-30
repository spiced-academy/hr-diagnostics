# JS Forms

> 💡 feel free to create a personal branch of this guide to add your own notes

| duration | content         |
| -------- | --------------- |
| 0:45     | Session         |
| 1:30     | Active Learning |
| 0:30     | Recap           |

## Learning objectives

- [ ] knowing the default behavior of form submit
  - [ ] prevent this behavior with `.preventDefault()`
- [ ] listening to submit events
  - learn what `event` and `event.target` is
  - reading input values via their names:
    - `.elements`
    - `FormData` / `Object.fromEntries()`
    - the `name` attribute of a form field

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

Run this demo locally in your terminal:

```
npx ghcd@latest spicedacademy/fs-web-exercises/tree/main/sessions/js-forms/demo-start
```

You can check out the final version of this demo with:

```
npx ghcd@latest spicedacademy/fs-web-exercises/main/sessions/js-forms/demo-end
```

### Handle the Default Behavior

- [ ] Fill in and submit the form to show the default behavior in the network tab:

- Form tries to send a GET request with names and their values as prop inside a URL like
  `/?firstName=value1&lastName=value2&...`
- One _could_ handle this request on the server side, but _we_ don't want to.
- The page is reloaded => the data is lost for us.

- [ ] Note that we always want to prevent this default (no GET request, no page reload).

### Listening to the submit event

- [ ] Remind the students that we need to query the form first in order to add some interactivity
      with JS:

```js
const form = document.querySelector('[data-js="form"]');
```

- [ ] Add an event listener for the submit event:

- is called on form submit
- triggers a submit event which provides us with an `event` object
- the `event` object has a method called `preventDefault()`

- [ ] Use `console.log(event)` to show its methods and properties (especially `preventDefault()` and
      `.target`).

```js
form.addEventListener("submit", (event) => {
  event.preventDefault();

  console.log(event);
});
```

- [ ] Use the network tab again to show that there is no GET request anymore.

### The Event Object and `event.target`

- [ ] Explain the event object:

- is created when an event is triggered
- we can access it as an argument of our callback function
- important method: `event.preventDefault()`
- important property: `event.target`

- [ ] Show that `event.target` is a reference to the entire form:

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

- [ ] Explain the `.elements` property of `event.target`:

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

- [ ] Show how to access all input values with the `FormData`

- [ ] Explain the `FormData` interface:

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

---

## Process: Challenges

- [ ] Provide the [handout](js-forms.md) and the [challenges](challenges-js-forms.md) to the
      students
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

event.preventDefault(), new FormData(), Object.fromEntries(), event.target.elements

> These keywords are for the weekly summary on Fridays. We use the keywords to automatically
> generate excalidraw tags with the help of
> [this amazing tool](https://github.com/F-Kirchhoff/tag-cloud-generator). The students structure
> the cards in a pattern that makes sense for them. Each tag, that is added to the structure needs
> to be explained in a few words by one student. We go in rounds one by one until all tags are
> included in the structure.
