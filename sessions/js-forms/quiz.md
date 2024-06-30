# JS Forms

## What does `event.preventDefault();` in a form-submit NOT do?

* [x] Preventing the submit event to bubble up to the body element
* [ ] Preventing the browser to send data
* [ ] Preventing the submit event to reload the current page

Points: 1

Feedback_correct: That's right.
Feedback_incorrect: Nope `event.preventDefault();` prevents the browser to send data and prevents the submit event to reload the current page. It does not prevent the submit event to bubble up to the body element.

type: multiple_choice

---


## Given `const form = event.target;`, which property stores a collection of all elements inside a form?

* [x] `form.elements`
* [ ] `form.inputs`
* [ ] `form.allElements`
* [ ] `form.elementsCollection`

Points: 1

Feedback_correct: That's right.
Feedback_incorrect: Nope! The property `form.elements` stores a collection of all elements inside a form.

type: multiple_choice

---
## Which of the following statements is WRONG?

* [ ] The `name` attribute specifies a name for an input element.
* [ ] The name is submitted along with the value of the input element when the form data is submitted.
* [x] The `name` attribute is needed to link an input field with a label.

Points: 1

Feedback_correct: That's right.
Feedback_incorrect: Nope! Instead of the `name` attribute the `id` is used to link an input field with a label.  

type: multiple_choice

---
## How can you create an Object containing all input values?

* [ ] `const formData = formData(event.target); const data = Object.fromEntries(formData)`
* [ ] `const formData = new formData(event); const data = Object.fromEntries(formData)`
* [x] `const formData = new formData(event.target); const data = Object.fromEntries(formData)`
* [ ] `const formData = formData(event.target); const data = Object(formData)`


Points: 1

Feedback_correct: That's right.
Feedback_incorrect: Nope! Input elements can also be resetted with `form.reset();`, not only by setting its `value` to an empty string.

type: multiple_choice

---
