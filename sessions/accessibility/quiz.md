# Accessibility

## Why is accessibility important?

* [ ] to make our life harder
* [x] to enable and include as many people as possible to use our websites
* [ ] to help other developers

Points: 1

Feedback_correct: That's right.
Feedback_incorrect: Nope! Accessibility is important, because we want to enable and include as many people as possible to use our websites.

type: multiple_choice

---

## What is an "easy-to-implement" example of how we can build our websites accessible?

* [x] use semantic HTML structure and elements
* [ ] never use `aria-label`
* [ ] never use an `alt` attribute as part of an `img` tag

Points: 1

Feedback_correct: That's right.
Feedback_incorrect: Nope! An "easy-to-implement" example of how we can build our websites accessible is to use semantic HTML structure and elements .

type: multiple_choice

---

## What does a11y mean?

* [ ] A11y is a cooler spelling for ally and anyone who wants to build their websites as accessible as possible can call themselves an a11y.
* [ ] A11y is an abbreviation for accessibility and the number "11" represents the 11 most common accessibility issues that should be considered. 
* [x] A11y is an abbreviation and stands for accessibility. The number 11 in "a11y" represents the 11 characters between the "a" and "y" of accessibility.

Points: 1

Feedback_correct: That's right.
Feedback_incorrect: Nope! The correct answer is: A11y is an abbreviation and stands for accessibility. The number 11 in "a11y" represents the 11 characters between the "a" and "y" of accessibility.

type: multiple_choice

---


## What is the A11y Project?

* [x] a community-driven effort to make digital accessibility easier
* [ ] a community of high-profile web designers
* [ ] a hacker group

Points: 1

Feedback_correct: That's right.
Feedback_incorrect: Nope! The A11y Project is a community-driven effort to make digital accessibility easier.

type: multiple_choice

---

## Which of the following elements is less semantic and should be avoided?

* [ ] `<a></a>`
* [ ] `<header></header>`
* [ ] `<p></p>`
* [x] `<div></div>`
* [ ] `<article></article>`

Points: 1

Feedback_correct: That's right.
Feedback_incorrect: Nope! The correct answer is `<div></div>` as a `div` element is a generic container and should only be used if no other semantic element is more suitable.

type: multiple_choice

---

## What does ARIA mean?

* [ ] ARIA stands for Accessible Rich Internet Applications and offers a set of CSS classes designed to make websites and their content more accessible.
* [x] ARIA stands for Accessible Rich Internet Applications and is a set of roles and attributes designed to make websites and their content more accessible.
* [ ] The label ARIA is used to identify the section of a website that provides musical content for its users.

Points: 1

Feedback_correct: That's right.
Feedback_incorrect: Nope! ARIA stands for Accessible Rich Internet Applications and is a set of roles and attributes designed to make websites and their content more accessible.

type: multiple_choice

---

## When should we use the ARIA attribute `aria-label`?

* [x] `aria-label` should be used, if the default accessible name of an HTML element is missing, or does not accurately describe its contents.
* [ ] The ARIA attribute `aria-label` should be always used.
* [ ] `aria-label` is no ARIA attribute.

Points: 1

Feedback_correct: That's right.
Feedback_incorrect: Nope! The correct answer is: `aria-label` is an attribute that can be used to label an element.

type: multiple_choice

---

## Which is the best practice for building an accessible button?

* [ ] **A**
* [x] **B**
* [ ] **C**

```html
<!-- A -->
<div aria-role="button" aria-label="Submit your Message">Submit Message</div>

<!-- B -->
<button type="button">Submit Message</button>

<!-- C -->
<a aria-role="button" aria-label="Submit your Message">Submit Message</a>
```

Points: 1

Feedback_correct: That's right.
Feedback_incorrect: Nope! The correct answer is **B**. If it is not necessary, it is is best practice using descriptive HTML elements on their own.

type: multiple_choice

---

## Which of the following attributes can be used for an element to reference another labelling element, if there is no native way?

* [x] `aria-labelledby`
* [ ] `aria-describedby`
* [ ] `aria-hidden`

Points: 1

Feedback_correct: That's right.
Feedback_incorrect: Nope! If there is no native way to reference a labelling element use the `aria-labelledby` attribute.

type: multiple_choice

---
