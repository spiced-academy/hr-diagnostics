# CSS Selectors

> 💡 feel free to create a personal branch of this guide to add your own notes

| duration | content         |
| -------- | --------------- |
| 0:45     | Session         |
| 1:30     | Active Learning |
| 0:30     | Recap           |

_The "Active Learning" portion of the session may require less time._

## Learning objectives

- [ ] how to style elements dynamically, e.g. when hovering over them or setting focus on them
- [ ] learn about more complex css selectors like pseudo classes and pseudo elements
- [ ] how to combine selectors into complex rulesets
- [ ] students should learn to prefer class selectors

---

## Arrival: Motivate students and prepare them for today's topic(s)

> 💡 Breathe and relax :)

### Which important problem will we solve today?

- You will be able to be more specific in what you select.

### Why is the content of today's block that important for the students?

- Even though they should use class selectors most of the time, they will need to know about the
  other selectors to be able to style elements in a specific state.

### Pose a question to be answered by the end of the block!

- How can we style elements when they are in a specific state? For example:
  - styling a button when the user hovers over it.
  - styling an input element when the focus is set on it.

---

## Activate prior knowledge of students

### Which previously learned concepts will be utilized in this session?

- You already used the `universal selector`, `type selectors`, and `class selectors`. We will build
  upon that knowledge and learn useful new selectors.

---

## Inform: Session Guide

This is likely a short session. It is a topic that is supposedly best learned by doing exercises.
Give a short overview of the different kind of selectors with two or three examples here.

Run this demo locally in your terminal:

```
npx ghcd@latest spicedacademy/fs-web-exercises/tree/main/sessions/css-selectors/demo-start
```

You can check out the final version of this demo with:

```
npx ghcd@latest spicedacademy/fs-web-exercises/tree/main/sessions/css-selectors/demo-end
```

### Recap: Basic Selectors

- Explain that selectors are used to select elements in our HTML document.
- We need selectors to style elements in our HTML document.
- Explain that we already get to know three different kinds of selectors:
  - `universal selector`
  - `type selector`
  - `class selector`
- Briefly explain the three types of selectors (or ask the students if they can explain them):
- The universal selector matches elements of any kind:

```css
* {
  box-sizing: border-box;
}
```

- Type selectors match all elements of the specified type:

```css
h1,
h2 {
  margin: 20px;
}

a {
  text-decoration: none;
}
```

- Class selectors match all elements with the specified css class:

```css
.main-content {
  width: 80%;
  margin: auto;
}

.main-section {
  padding: 20px;
  background-color: #fff0f5;
  margin-bottom: 20px;
}
```

- Show that you can apply multiple classes to one element:

```css
.box {
  width: 100px;
  height: 100px;
  text-align: center;
}

.box--pink {
  background-color: #ffb6c1;
}
```

### Other Selectors

- Explain that there are more selectors that we can use to select elements in our HTML document.

#### Attribute Selectors

- Explain that the attribute selector is used to select elements based on the presence of an attribute.
- If a value is specified in the selector only elements with the attribute and the specified values are selected:

```css
[type="button"] {
  padding: 20px;
}
```

- Explain that you can combine the attribute selector with other selectors to select elements with a specific attribute:

```css
button[type="button"] {
  padding: 20px;
}

ul[role="list"] {
  list-style-type: none;
}
```

- Explain that above we searched for elements that have a attribute with a specific value.
- If we do not want to search for a specific value we can just search for the presence of an attribute or declare by using special characters what should be part of the attribute's value
- Show in the demo that for example you can select all links that start with `https`:

```css
a[href^="https"] {
  color: #ff69b4;
  padding: 8px;
}
```

#### Pseudo Classes

- Explain that with pseudo classes you can select elements based on their state. You add them to a selector to only select elements which also match the state condition:

```css
a:hover {
  background-color: #ff69b4;
  color: #fff;
}
```

- Explain that the above example will only select links when the user hovers over them. Hover means that the user moves the mouse over the element.
- Another example is the `focus` pseudo class. It will select elements when they are focused:

```css
input:focus {
  outline: 2px solid #ff69b4;
  border: none;
  border-radius: 3px;
}
```

#### Pseudo Elements

- Explain that with pseudo elements you can select parts of an element or add content before or after an element.
- Highlight that you can combine multiple types of selectors (second example):

```css
p::first-letter {
  font-size: 32px;
}

a[href^="https"]::before {
  content: "🍰";
  margin-right: 8px;
}
```

> 💡 `::before` and `::after` should be used carefully, because they add content to the DOM. This can be a problem for screen readers [see MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/::before#accessibility_concerns).

#### Id Selectors

- Explain that id selectors select one element based on its id.
- Explain why we do **not** recommend using id selectors but class selectors instead:
  - Id selectors aren't resuable like class selectors
  - They are hard to overwrite

```css
#do-not-use-this {
  color: #fff;
}
```

### Combinators

- Explain that combinators are used to combine selectors to select elements in a more specific way.
- Combinators are used to select elements based on their relationship to other elements.

#### Descendant Combinator

- Explain that the descendant combinator selects all elements that are descendants of a specified element:

```css
.main-section .text {
  color: #252629;
  /* This should overwrite the color rule of the ID selector, but because 
  of its very high specificity, the ID selector rule remains. The only way to
  overwrite rules declares inside of an ID selector is to use !important, which
  we want to avoid. */
}
```

- **Note:** The example above should overwrite the color rule of the ID selector
- As explained in the comment of the demo we have competing rules here. The rule of the ID selector has a higher specificity than the rule of the descendant combinator. This means that the rule of the Id selector will be applied.
- You can use this example to explain **specificity** and how to overwrite rules with a higher specificity
- Explain that we do not want to work with `!important` because it is bad practice and it is hard to maintain:
  - it is hard to find out where the `!important` rule is declared
  - it is hard to find out why the `!important` rule is declared
  - it is hard to find out if the `!important` rule is still needed

#### Child Combinator

- Explain that the child combinator selects all elements that are direct children of a specified element:

```css
.main-section > article {
  padding: 20px;
  background-color: #ffb6c1;
  border: 4px dotted #fff;
}
```

### Conclusion

- Explain that there are many more selectors and combinators that we can use to select elements in our HTML document.
- Note that we prefer to work with class selectors for styling out HTMl elements:
  - class selectors are reusable
  - class selectors can be overwritten by other rules easily
  - class selectors are easier to maintain
- But sometimes it might be necessary to use some of these selectors to select elements in our HTML document.

---

## Process: Challenges

- [ ] Provide the [handout](css-selectors.md) and the [challenges](challenges-css-selectors.md) to
      the students
- [ ] Open the challenges and walk the students through the tasks
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

Attribute selector, Pseudo class, Id selector, Pseudo element, Combinator

> These keywords are for the weekly summary on Fridays. We use the keywords to automatically
> generate excalidraw tags with the help of
> [this amazing tool](https://github.com/F-Kirchhoff/tag-cloud-generator). The students structure
> the cards in a pattern that makes sense for them. Each tag, that is added to the structure needs
> to be explained in a few words by one student. We go in rounds one by one until all tags are
> included in the structure.
