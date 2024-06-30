# CSS Responsive

## What is responsive design?

* [x] A flexible design that adapts to the screen size of the device it is being viewed on.
* [ ] A design that communicates its function to the viewer.
* [ ] A design that relies heavily on JavaScript to function.

Points: 1

Feedback_correct: That's right.
Feedback_incorrect: Nope! Responsive design means a flexible design that looks good and works well on as many devices as possible.

type: multiple_choice

---

## Which of these is not a responsive unit?

* [ ] `em`
* [ ] `rem`
* [ ] `vh`
* [x] `vr`

Points: 1

Feedback_correct: That's right.
Feedback_incorrect: Nope! `vr` is not a responsive unit (because it is not a unit nor anything else).

type: multiple_choice

---

## For what purpose do we use media queries?

* [ ] Media queries are useful when you want to delete images and videos from your website / application.
* [x] With media queries you can change the styling or layout of your website / application depending on the general device type or specific features and parameters.
* [ ] Media queries are always needed if you want to add animations to your website / application.

Points: 1

Feedback_correct: That's right.
Feedback_incorrect: Nope! With media queries you can change the styling or layout of your website / application depending on the general device type or specific features and parameters.

type: multiple_choice

---

## What is a breakpoint?

* [ ] the end of a paragraph
* [ ] a fixed point every 100 units of length
* [ ] the part of a media query that determines the device type
* [x] the part of a media query that determines at what point the layout design changes

Points: 1

Feedback_correct: That's right.
Feedback_incorrect: Nope! A breakpoint is the part of a media query that determines at what point the layout design changes.

type: multiple_choice

---

## What does "Mobile First" mean?

* [ ] Every developer needs a current smartphone.
* [ ] All of your media queries need to be at the start of your stylesheet.
* [x] You start with the development of the mobile version of your website/application.

Points: 1

Feedback_correct: That's right.
Feedback_incorrect: Nope! "Mobile First" means that when you start developing your web application, you focus on building the mobile version first.

type: multiple_choice

---

## What is the viewport?

* [ ] a specific HTML element that allows implementation of videos
* [x] the user's visible area of a web page
* [ ] a screen width above 2000px
* [ ] a web browser specifically developed for coding purposes

Points: 1

Feedback_correct: That's right.
Feedback_incorrect: Nope! The viewport is the user's visible area of a web page.

type: multiple_choice

---

## Given is: `body { background-color: hotpink;}`. How do you change the background-color to "lightgreen" if the viewport is 480 pixels wide or wider?

* [ ] `@media (max-viewport: 480px) { body { background-color: lightgreen;} }`
* [x] `@media (min-width: 480px) { body { background-color: lightgreen;} }`
* [ ] `@media (max-width: 480px) { body { background-color: lightgreen;} }`
* [ ] `@media (min-viewport: 480px) { body { background-color: lightgreen;} }`

Points: 1

Feedback_correct: That's right.
Feedback_incorrect: Nope! With `@media (min-width: 480px) { body { background-color: lightgreen;} }` you can change the background-color to "lightgreen" if the viewport is 480 pixels wide or wider. 

type: multiple_choice

---

## Which of the following CSS media features can we use to declare CSS rules for a viewport where the width is greater than the height (landscape)? 

* [ ] `prefers-landscape`
* [x] `orientation`
* [ ] `resolution`
* [ ] `prefers-contrast`

Points: 1

Feedback_correct: That's right.
Feedback_incorrect: Nope! The correct answer is `orientation`.

type: multiple_choice

---

## Which of the following CSS media features can we use to adjust our styling if the user prefers dark mode?

* [ ] `prefers-dark-mode`
* [ ] `color-scheme`
* [x] `prefers-color-scheme`
* [ ] `prefers-contrast`

Points: 1

Feedback_correct: That's right.
Feedback_incorrect: Nope! The correct answer is `prefers-color-scheme`.

type: multiple_choice

---
