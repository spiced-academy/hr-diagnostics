# CSS Structure

## What does the "C" in CSS stand for?

* [x] Cascading
* [ ] Complex
* [ ] Constructive
* [ ] Command

Points: 1

Feedback_correct: That's right.
Feedback_incorrect: No, the "C" in CSS stands for "Cascading".

type: multiple_choice

---

## What does "inheritance" mean?

* [ ] Elements always increase in size the further down on the stylesheet they are.
* [ ] Elements always start out with the same CSS properties.
* [x] Elements will inherit some CSS properties from their parent elements.

Points: 1

Feedback_correct: That's right.
Feedback_incorrect: No, elements will inherit some CSS properties from their parent element.

type: multiple_choice

---

## What is an example of "good practice" for structuring CSS?

* [x] Using specific CSS selectors such as classes.
* [ ] Using `!important` and the id selector.
* [ ] Writing all styles in the same file.

Points: 1

Feedback_correct: That's right.
Feedback_incorrect: No, a good practice would be to use specific CSS selectors such as classes.

type: multiple_choice

---

## Which of these specified selectors is the most specific one?

* [ ] universal selector `*`
* [x] class selector like `.container`
* [ ] type selector like `div`

Points: 1

Feedback_correct: That's right.
Feedback_incorrect: No, the class selector like `.container` is the most specific one from the list.

type: multiple_choice

---

## Which of the following is a popular CSS naming method for writing cleaner and more readable CSS classes?

* [ ] "cascading importance"
* [x] "BEM"
* [ ] "NASA"
* [ ] "mobile first"

Points: 1

Feedback_correct: That's right.
Feedback_incorrect: No, "BEM" (Block, Element, Modifier) is a popular CSS naming method.

type: multiple_choice

---

## Following BEM: using the block class name "navigation", which class name would a link within this element have?

* [ ] `navigation--link`
* [ ] `navigation_link`
* [ ] `navigation-link`
* [x] `navigation__link`

Points: 1

Feedback_correct: That's right.
Feedback_incorrect: No, according to BEM the correct naming would be `navigation__link`.

type: multiple_choice

---

## Following BEM: which classname would a modified link have?

* [ ] `navigation--link--active`
* [ ] `navigation_link_active`
* [x] `navigation__link--active`
* [ ] `navigation-link__active`

Points: 1

Feedback_correct: That's right.
Feedback_incorrect: No, according to BEM the correct naming would be `navigation__link--active`.

type: multiple_choice

---

## Which pseudo-class selector can be used to declare global CSS custom properties (variables)?

* [ ] `:gobal`
* [x] `:root`
* [ ] `:all`

Points: 1

Feedback_correct: That's right.
Feedback_incorrect: No, the `:root` pseudo-class can be used to declare global CSS custom properties (variables).

type: multiple_choice

---

## Which of the following is an example of defining CSS custom properties (variables)?

* [ ] `custom color: green;`
* [ ] `green = --color-secondary;`
* [x] `--color-secondary: green;`

Points: 1

Feedback_correct: That's right.
Feedback_incorrect: No, `--color-secondary: green;` is an example of defining CSS custom properties (variables).

type: multiple_choice

---

## How are CSS custom properties (variables) used?

* [x] `color: var(--color-secondary);`
* [ ] `color: custom(--color-secondary);`
* [ ] `color: func(--color-secondary);`

Points: 1

Feedback_correct: That's right.
Feedback_incorrect: No, CSS custom properties (variables) are used with the `var()` function.

type: multiple_choice

---

## What is `@import` used for?

* [x] It is used to import style rules from other stylesheets.
* [ ] It is used to import HTML to stylesheets.
* [ ] It is used to import CSS to HTML.

Points: 1

Feedback_correct: That's right.
Feedback_incorrect: No, `@import` is used to import style rules from other stylesheets.

type: multiple_choice

---