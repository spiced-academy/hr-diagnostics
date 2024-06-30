# CSS Flexbox

> 💡 feel free to create a personal branch of this guide to add your own notes

| duration | content         |
| -------- | --------------- |
| 0:45     | Session         |
| 1:30     | Active Learning |
| 0:30     | Recap           |

## Learning objectives

- [ ] Understanding the purpose of flexbox:
  - [ ] Let items fill out the possible space in their container
  - [ ] Distributing elements for different screen sizes
  - [ ] Make the website more responsive with flexbox
- [ ] Understanding the most important flexbox properties:
  - [ ] `justify-content`
  - [ ] `align-items`
  - [ ] `flex-direction`
  - [ ] `flex-wrap`
  - [ ] `gap`
- [ ] Knowing the difference between `main-axis` and `cross-axis`

---

## Arrival: Motivate students and prepare them for today's topic(s)

> 💡 Breathe and relax :)

### Which important problem will we solve today?

- In a normal document flow block-level elements are displayed below each other.
- Altering this behavior is important to realize an appealing layout with a well-defined visual
  structure that can be consumed easier by users.
- In addition elements should be distributed on the page based on the viewport size to make use of
  the available space.

### Why is the content of today's block that important for the students?

- It is possible to distribute elements on the page with traditional ways of styling (e.g. float,
  position, margin).
- However, modern layouts consist of many reuseable parts and need to respond to different viewport
  sizes.
- This would be hard to implement with such tools and leads to very complex and inflexible code.

### Pose a question to be answered by the end of the block!

How can we create a horizontal navigation bar that adjusts to the viewport's width by increasing the
space between the navigation links?

---

## Activate prior knowledge of students

### Which previously learned concepts will be utilized in this session?

- [ ] HTML Basics
- [ ] CSS Basics
- [ ] CSS box model

You can ask these questions:

- Have you ever tried to align elements besides each other?
- Have you ever tried to center an element horizontally and vertically within a parent element?

---

## Inform: Session Guide

Run this demo locally in your terminal:

```
npx ghcd@latest spicedacademy/fs-web-exercises/tree/main/sessions/css-flexbox/demo-start
```

You can check out the final version of this demo with:

```
npx ghcd@latest spicedacademy/fs-web-exercises/tree/main/sessions/css-flexbox/demo-end
```

### Document Normal Flow

- [ ] Show the code and the normal document flow of the demo.
- [ ] Note what we want to achieve:
  - [ ] a horizontal navigation bar that
  - [ ] adjusts to the viewport's width by increasing the space between the navigation links.

### General understanding: defining a flexbox, axis, and direction

- [ ] Explain how flexbox works in general:

  - [ ] We need to create a flexbox **container** as a wrapper.
  - [ ] All **direct children** are **flex-items** to which the styles are applied.

- [ ] Switch to the `index.html` and show that the common parent element (= container) for all navigation items is the `ul` with `class="menu"`.
- [ ] Switch to `styles.css` and identify the corresponding class selector `.menu {}`.
- [ ] Make the `ul` a flex container and show the difference in the browser:

```css
.menu {
  font-size: 22px;
  display: flex;
}
```

- [ ] Note that the **direction** of the flexbox is set via the `flex-direction` property which defaults to horizontal.
- [ ] Change the `flex-direction` to `column` and show the difference:

```css
.menu {
  font-size: 22px;
  display: flex;
  flex-direction: column;
}
```

- [ ] Show the following image to recap and explain:
  - [ ] flex container
  - [ ] flex items
  - [ ] `flex-direction`: `row` (default) and `column`
    - [ ] The `flex-direction` property defines the `main-axis`.
    - [ ] The `cross-axis` is perpendicular.
  - [ ] Make the students aware of `justify-content` (main-axis) and `align-items` (cross-axis):
    - [ ] these properties define where to place the flex items along the `main-axis` / `cross-axis`;
    - [ ] we'll use them in the next step to adapt our flex items.

![flex-direction-row](./assets/flex-direction.png)

### Important CSS properties for flexbox

- [ ] Introduce the following flexbox properties and show the effect of different values:

> 💡 To visualize the differences even better, you may want to give `.menu` and `.menu > li` a border.

- [ ] `justify-content`: Alignment on the `main-axis`
  - [ ] `flex-start` (default): Items are placed **at the start of the flex-direction**.
  - [ ] `center`: Items are **centered along the line**.
  - [ ] `space-between`: Items are **evenly distributed in the line**; first item is on the start line, last item on the end line.
  - [ ] `space-evenly`: Items are distributed so that the **spacing between any two items (and the space to the edges) is equal**.
- [ ] `align-items`: Alignment on the `cross-axis`
  - [ ] ❗️ Make sure to set the `height` property on the flex container to show behavior.
  - [ ] `stretch` (default): Stretch items to **fill the container**.
  - [ ] `flex-start`: Items are placed **at the start of the cross axis**.
  - [ ] `flex-end`: Items are placed **at the end of the cross axis**.
  - [ ] `center`: Items are **centered in the cross-axis**.
- [ ] `gap`: Creates visual space between flex items.
- [ ] `flex-wrap`: Flex items can wrap into another row instead of being squashed into one row
  - [ ] `nowrap` (default): All flex items will be on one line.
  - [ ] `wrap`: Flex items will wrap onto multiple lines, from top to bottom.

---

## Process: Challenges

- [ ] Provide the [handout](css-flexbox.md) and the [challenges](challenges-css-flexbox.md) to the
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

flex, flex-direction, justify-content, align-items, flex-wrap, space-between, space-evenly

> These keywords are for the weekly summary on Fridays. We use the keywords to automatically
> generate excalidraw tags with the help of
> [this amazing tool](https://github.com/F-Kirchhoff/tag-cloud-generator). The students structure
> the cards in a pattern that makes sense for them. Each tag, that is added to the structure needs
> to be explained in a few words by one student. We go in rounds one by one until all tags are
> included in the structure.
