# CSS Positioning

## Why is positioning important?

* [ ] because your code looks prettier
* [x] because the normal document flow is not enough to create some user experience designs
* [ ] because the document flow is sometimes unpredictable

Points: 1

Feedback_correct: That's right.
Feedback_incorrect: Nope! Positioning is important because the normal document flow is not enough to create some user experience designs.

type: multiple_choice

---

## What is the default value of the position property?

* [ ] `absolute`
* [ ] `sticky`
* [ ] `fixed`
* [x] `static`

Points: 1

Feedback_correct: That's right.
Feedback_incorrect: Nope! The default value of the position property is `static`.

type: multiple_choice

---

## Which value of the `position` property removes the element from the normal document flow?

* [x] `absolute`
* [ ] `static`
* [ ] `relative`

Points: 1

Feedback_correct: That's right.
Feedback_incorrect: Nope! `position: absolute` removes the element from the normal document flow.

type: multiple_choice

---

## How will the properties `top`, `right`, `bottom` and `left` affect an element with the property `position: relative`?

* [ ] position it relative to its closest positioned ancestor
* [x] offset the element relative to itself
* [ ] position the element relative to the viewport
* [ ] the properties `top`, `right`, `bottom` and `left` have no affect

Points: 1

Feedback_correct: That's right.
Feedback_incorrect: Nope! Relatively positioned elements are offset a given amount from their normal position with the properties `top`, `right`, `bottom` and `left`.

type: multiple_choice

---

## Which value of the `position` property do you choose if you want an element, which is part of the document flow, to follow scrolling when reaching a specific point?

* [ ] `absolute`
* [x] `sticky`
* [ ] `static`
* [ ] `fixed`

Points: 1

Feedback_correct: That's right.
Feedback_incorrect: Nope! An element with `position: sticky` is part of the document flow and follows scrolling when reaching a specific point.  

type: multiple_choice

---

## What is the `z-index` used for?

* [ ] set the index of the zsh
* [ ] show the index of elements with a class name starting with z
* [x] position elements within their stacking context according to the z-axis

Points: 1

Feedback_correct: That's right. 
Feedback_incorrect: Nope! The `z-index` is used to position elements within their stacking context according to the z-axis.

type: multiple_choice

---

## How does a higher z-index value affect an element?

* [x] element is shown above others
* [ ] element is shown below others
* [ ] no effect

Points: 1

Feedback_correct: That's right. 
Feedback_incorrect: Nope! The higher the z-index, the closer the element will be to the user (and thus cover elements with smaller z-indices).

type: multiple_choice

---

## If you want to place an element with `position: absolute` and relative to a close ancestor, which value of the position property must the ancestor NOT have?

* [x] `static`
* [ ] `fixed`
* [ ] `absolute`
* [ ] `relative`
* [ ] `sticky`

Points: 1

Feedback_correct: That's right. 
Feedback_incorrect: Nope! An element with `position: absolute` is positioned relative to the nearest ancestor with a `position` value other than `static`. [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/position)

type: multiple_choice

---
