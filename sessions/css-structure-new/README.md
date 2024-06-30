# CSS Structure

> 💡 feel free to create a personal branch of this guide to add your own notes

| duration | content         |
| -------- | --------------- |
| 0:45     | Session         |
| 1:30     | Active Learning |
| 0:30     | Recap           |

## Learning objectives

- [ ] Understanding the CSS cascade
- [ ] Structuring CSS to improve maintainability and readability
- [ ] `@import` to import different CSS stylesheets in one file
- [ ] CSS practical strategies
- [ ] CSS custom properties (CSS variables)

---

## Arrival: Motivate students and prepare them for today's topic(s)

> 💡 Breathe and relax :)

### Which important problem will we solve today?

- When writing CSS code things get messy really fast
- We need methods to organize our CSS code to avoid bugs and improve maintainability

### Why is the content of today's block that important for the students?

- You need a basic understanding on how different CSS declarations are applied all together

### Pose a question to be answered by the end of the block!

How can we write well-structured, more readable and maintainable CSS code with fewer bugs?

---

## Activate prior knowledge of students

### Which previously learned concepts will be utilized in this session?

- HTML Basics
- CSS Basics

You can ask these questions:

- When you wrote CSS code before, which questions did you ask yourself while doing it?
  - How should I name this class?
  - Where should I put the code within the CSS file?
  - Why is this style declaration overwritten?
  - Can I avoid changing a certain color in different places manually?

---

## Inform: Session Guide

Use this demo locally by running this command in your Terminal:

```
npx ghcd@latest spiced-academy/fs-web-exercises/tree/main/sessions/css-structure/demo-start
```

You can check out the final version of this demo locally by running this command in your Terminal:

```
npx ghcd@latest spiced-academy/fs-web-exercises/tree/main/sessions/css-structure/demo-end
```

---

### CSS Cascade

- [ ] Introduce the students to the concept of "cascading" styles:
  - CSS includes an algorithm that defines which CSS rules are being applied when there are conflicting rules.
  - Important concepts: `specificity`, `order`, `inheritance`
- [ ] Show an example for overwritten styles because of "cascading"

  - _on purpose_:

    find the `.highlight`-Selector in the css file, it is **overwriting the font color** defined in the `body`-Selector on purpose

  - _accidentally_:

    you can add the `.title`-Selector, the class is already added to the HTML file

    > ```css
    > .title {
    >   color: purple;
    > }
    > ```

#### CSS Specificity

- [ ] Explain CSS specificity
  - The specificity of a CSS selector tells the browser which rule is most relevant for an element.
  - More specific rules win over less specific ones.
- [ ] Explain common types of selectors
  - Type selector
  - Class selector
  - ID selector
- [ ] Show an example for CSS specificity

  > ```css
  > h1 {
  >   color: #ff4a11;
  > }
  >
  > .title {
  >   color: purple;
  > }
  >
  > /*add to the demo:*/
  > #headline {
  >   color: green;
  > }
  > ```

- [ ] Explain to avoid the `!important` flag

  - it will overwrite all other styles and can lead to unexpected behavior

  > ```css
  > h1 {
  >   color: #ff4a11 !important;
  > }
  > ```

> You can now delete or comment out these examples `.title` and `#headline` to explain the next concept

#### CSS Order

- [ ] Explain CSS order
  - When specificity is equal the order of CSS rules is relevant
  - CSS rules written further down in the document may overwrite
- [ ] Show an example for CSS order

> ```css
> h1 {
>   color: #ff4a11;
> }
>
> /*add to the demo:*/
> h1 {
>   color: blue;
> }
> ```

#### Inheritance

- [ ] Explain CSS inheritance
  - Some CSS properties get inherited from the parent element
  - Some examples are
    - font properties (font-family, font-size, font-weight, etc.)
    - list style properties (list-style, list-style-type, etc.)
    - color
    - cursor
    - visibility
- [ ] Show a simple example for CSS inheritance

> ```css
> /*replace in the demo:*/
> body {
>   color: red;
> }
> ```

> Ask the students to later play around with inheritance during the challenges.
> You can now undo or comment out these examples to explain the next concept

### CSS practical strategies for good structure

- [ ] Show some concrete use cases
  - Show that the CSS code is doubled in the `body`and the `.card` selector
  - to respect the D.R.Y. (Don't Repeat Yourself) principle we should avoid this
    The guidelines:
    - Independent blocks and CSS selectors
    - Make your code reusable and modular
    - Code is easier to read and understand
    - Easier to scale, more robust and explicit
- [ ] Cut the flexbox rules from the `.card` selector and `body` and create a new class called `.flex`. Add the rules to the new selector.

> ```css
> /*add to the demo:*/
> .flex {
>   display: flex;
>   flex-wrap: wrap;
>   gap: 10px;
>   justify-content: center;
>   align-items: center;
>   flex-direction: column;
> }
> ```
>
> - [ ] Go to the `index.html` and add the `class="flex"` to the >`body`-element. For the section elements, add the class `flex` behind the > class `card` like this:
>
> ```html
> <body class="flex">
>   ...
>   <section class="card flex">...</section>
>   <section class="card flex">...</section>
> </body>
> ```

### CSS Structure best practices

- [ ] Explain why we need a consistent CSS structure
  - Code is more readable / easier to find code for a specific element
  - Important in a team of developers
- [ ] Explain concepts on how to create a structure
  - Create multiple CSS files (helps to improve overview)
  - Separate global and local styles
  - Create multiple stylesheets for different parts of your application
  - Separated, reusable components
- [ ] Mention that it's important to have a team-agreed strategy and that there are various established manifestos (e.g. BEM)
- [ ] Show an example of a possible structure

  - create a `global.css` file in the `css` directory
  - write the import statement in the `styles.css` file

    ```css
    @import "global.css";
    ```

  - copy the global styles into the file

    ```css
    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    body {
      font-family: system-ui;
      color: #e4e8f0;
      background-color: #282828;
    }

    .flex {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    ```

  - create a folder names `components`
  - create a file named `card.css` in the `components` folder
  - write the import statement in the `styles.css` file

    ```css
    @import "../components/card.css";
    ```

  - copy the card styles into the file

    ```css
    .card {
      padding: 20px;
      border-radius: 5px;
      border: solid 2px #ff4a11;
      width: 350px;
    }

    .highlight {
      color: #ff4a11;
      font-size: 1.5rem;
    }

    .definition {
      max-width: 300px;
      border: dashed 2px #ff4a11;
      border-radius: 5px;
      padding: 10px;
    }

    .tag {
      background-color: #9ca3af;
      color: #282828;
      padding: 10px;
      border-radius: 5px;
    }
    ```

### Custom Properties

- [ ] Discuss the concept of variables
- A value stored with a name that is reusable
- The name is a reference to the value
- Example: contacts in an address book (remember a person's name instead of the phone number)
- [ ] Complex websites have a lot of repeating values
- colors, fonts, border radius size, shadows, spacing size
- [ ] Go to the global.css file and add a `:root` selector
- [ ] Define custom properties:

```css
:root {
  --primary-color: #ff4a11;
  --secondary-color: #e4e8f0;
  --tertiary-color: #9ca3af;
  --background-color: #282828;
}
```

- Important: custom property must start with two dashes & naming is case sensitive
- [ ] Change the respective properties to apply custom values
- [ ] Optional: discuss inheritance and how to overwrite custom properties

---

## Process: Challenges

- [ ] Provide the [handout](css-structure.md) and the [challenges](challenges-css-structure.md) to
      the students
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

cascading, specificity, BEM, @import, custom properties

> These keywords are for the weekly summary on Fridays. We use the keywords to automatically
> generate excalidraw tags with the help of
> [this amazing tool](https://github.com/F-Kirchhoff/tag-cloud-generator). The students structure
> the cards in a pattern that makes sense for them. Each tag, that is added to the structure needs
> to be explained in a few words by one student. We go in rounds one by one until all tags are
> included in the structure.
