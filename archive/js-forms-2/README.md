# JS Forms 2

> 💡 feel free to create a personal branch of this guide to add your own notes

| duration | content         |
| -------- | --------------- |
| 0:45     | Session         |
| 1:30     | Active Learning |
| 0:30     | Recap           |

## Learning objectives

- [ ] understanding client-side form validation
- [ ] understanding the input event
- [ ] know how to focus inputs programmatically
- [ ] know how to reset the form programmatically

---

## Arrival: Motivate students and prepare them for today's topic(s)

> 💡 Breathe and relax :)

### Why is the content of today's block that important for the students?

Forms are a crucial element of user interaction with a modern web application. As developers we
should make efforts to improve the user experience by providing forms with useful support for users.

The includes verifying the entered data, reacting to inputs and defining the behavior after a form
was submitted.

### Pose a question to be answered by the end of the block!

How can we guide the user to enter valid data into a form?

---

## Activate prior knowledge of students

### Which previously learned concepts will be utilized in this session?

- HTML Forms
- JS Functions
- JS Forms 1

---

## Inform: Session Guide

Run this demo locally in your terminal:

```
npx ghcd@latest spicedacademy/fs-web-exercises/tree/main/sessions/js-forms-2/demo-start
```

You can check out the final version of this demo with:

```
npx ghcd@latest spicedacademy/fs-web-exercises/tree/main/sessions/js-forms-2/demo-end
```

### HTML Form Validation

- [ ] Explain the idea of form validation
  - [ ] Search for errors or inconsistency in the input data **before** the data gets processed
  - [ ] Provides a direct feedback for users to improve user experience
  - [ ] Avoid errors in the app logic
- [ ] Show and introduce the demo app
- [ ] Show errors in the demo that occur after submitting an empty form without validation
- [ ] Explain the concept of form validation
  - [ ] Form fields can be enriched with various attributes
  - [ ] The attributes define rules for the expected input
  - [ ] The browser read this attributes and validates the user's input
  - [ ] The validation must be successful to trigger the `submit` event
- [ ] Explain the concept of fields marked with `required`
  - [ ] A form cannot be submitted, when field is left empty
  - [ ] Add the `required` attribute to fields in demo
  - [ ] Show the error message displayed by the browser if a required field is empty on form submit
  - [ ] Show that the submit works if required field is not empty
- [ ] Explain the concept of validation by `type`
  - [ ] Browsers can check data based on the `type` attribute (e.g. `email`, `number`)
  - [ ] Add the attribute `type="email"` to a field in the demo
  - [ ] Show the error message displayed by the browser if the input data doesn't match the email
        syntax
  - [ ] Show that the submit works if a valid email address is entered (like "your@mail.xyz")
- [ ] Explain the concept of an additional validation attribute (like `minlength`)
  - [ ] Add the attribute to the field in the demo
  - [ ] Show the error message displayed by the browser, if the defined criteria is not met
  - [ ] Show that the submit works if the criteria is met

### Input Event

- [ ] Explain the `input` event
  - Is triggered with every keystroke in a field
  - Useful if you want to process every update of input data for a specific field
- [ ] Show an example for the `input` event in the demo
  - Demonstrate with `console.log()` that the event is triggered with every keystroke
  - Implement a useful example for the `input` event in the demo to give some context:

```js
passwordInput.addEventListener("input", (event) => {
  updatePasswordStrength(event.target.value);
});
```

### Resetting a form

- [ ] Explain why it is a good idea to reset a form
  - [ ] After the form was submitted successfully and the data was processed
  - [ ] Reset the form so that a new set of data can be entered
- [ ] Show an example of a form reset in the demo
  - Add `form.reset()` at the end of the submit handler function
- [ ] Explain why it is a good idea to focus the a field
  - [ ] Users are enabled to enter multiple set of data one after the other
  - [ ] Focussing the field after submit improves the user experience (hands can stay at the
        keyboard)
  - [ ] Give a common example: e.g. message input for a chat app
- [ ] Show an example in the demo app
  - [ ] Use `input.focus()` or `even event.target.elements[0].focus()` to focus the first input

---

## Process: Challenges

- [ ] Provide the [handout](js-forms-2.md) and the [challenges](challenges-js-forms-2.md) to the
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

validation, required, input event, form.reset(), input.focus(),

> These keywords are for the weekly summary on Fridays. We use the keywords to automatically
> generate excalidraw tags with the help of
> [this amazing tool](https://github.com/F-Kirchhoff/tag-cloud-generator). The students structure
> the cards in a pattern that makes sense for them. Each tag, that is added to the structure needs
> to be explained in a few words by one student. We go in rounds one by one until all tags are
> included in the structure.
