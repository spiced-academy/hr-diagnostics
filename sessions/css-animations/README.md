# CSS Animations

> 💡 feel free to create a personal branch of this guide to add your own notes

Recommended schedule for this session:

| duration | content         |
| -------- | --------------- |
| 0:30     | Session         |
| 1:45     | Active Learning |
| 0:15     | Recap           |

## Learning objectives

- [ ] Understanding the `transition` property
- [ ] Understanding easing functions
- [ ] Understanding what properties can be animated
- [ ] Understanding the `animation` property

---

## Arrival: Motivate students and prepare them for today's topic(s)

> 💡 Breathe and relax :)

### Which important problem will we solve today?

Animations aren't just fun, they're also useful! CSS Animations are a powerful tool. They allow you
to create apps that are more interactive and engaging, and sometimes even more accessible.

### Why is the content of today's block that important for the students?

Good animations can make a website feel more alive and can help to guide the user through the
website. They can also help to make a website more accessible.

### Pose a question to be answered by the end of the block!

How can you improve the user experience of your website by adding animations?

---

## Activate prior knowledge of students

### Which previously learned concepts will be utilized in this session?

- CSS Basics
- CSS Media Queries
- JavaScript Basics (adding classes to elements)

---

## Inform: Session Guide

### What is a CSS transtion?

- [ ] Explain that a CSS transtion allows you to animate a change from one value of a property to
      another (like color, opacity, scale, etc.)
- [ ] Transitions can look better than abrupt changes because they give the user a sense of
      continuity between states. This can be especially important for users with cognitive
      disabilities.
- [ ] Transition can also be overused and too extreme. They can be distracting and annoying and can
      cause motion sickness or even seizures in some people.
- [ ] Explain that you need to find a good balance for any type of animation.

### How to use a CSS `transition`

Run this demo locally in your terminal:

```
npx ghcd@latest spicedacademy/fs-web-exercises/tree/main/sessions/css-animations/demo-start
```

You can check out the final version of this demo:

```
npx ghcd@latest spicedacademy/fs-web-exercises/tree/main/sessions/css-animations/demo-end
```

- [ ] Explain that you have to define two states for a property you want to animate like this:

```css
.button--color {
  background-color: var(--granite);
}

.button--color:hover {
  background-color: var(--nemo);
}
```

- [ ] Show that you can make the browser transition between these two states by adding a
      `transition` property to the box:

```css
.button--color {
  background-color: var(--granite);
  transition: 0.3s ease;
}

.button--color:hover {
  background-color: var(--nemo);
}
```

- [ ] Open the browser developer tools and play with the duration, delay and easing function to
      explore how they work. Show built-in (`ease`, `linear`, `ease-in-out`, etc.) and custom easing
      curves. You can also show [cubic-bezier.com](https://cubic-bezier.com) to play with easing
      curves.

- [ ] Go to the next button and animate 2 properties with transition, to show that you can animate
      multiple properties at once:

```css
.button--scale {
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px;
  transition: 0.2s ease;
}

.button--scale:active {
  transform: scale(0.9);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
}
```

- [ ] Sometimes you want to animate properties differently, show how to do that with the next button

  ```css
  .button--shadow {
    background-color: var(--nemo);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    transition: background-color 0.5s ease-out, box-shadow 1s ease 0.5s;
    /* add transition here */
  }

  .button--shadow:hover {
    background-color: var(--granite);
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
  }
  ```

### Animatable properties

- [ ] Explain that not all properties can be animated. For example, `display` and `position` cannot
      be animated. You can find a list of animatable properties on
      [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties).

- [ ] Explain that some properties can have negative performance implications. For example,
      animating `width` and `height` can cause the browser to recalculate the layout of the page for
      each frame (usually 60 times per second). Tell students to avoid animating these properties.

- [ ] Show some properties that are safe and cheap to animate: `color`, `opacity`, `transform`,
      `box-shadow` etc.

### Animating between multiple states

- [ ] If you want to transition between multiple stages you need to use extra classes which are
      added / removed by javascript

  ```css
  .position--0 {
    left: 0;
    /* add transition 'into state 0' here */
  }

  .position--1 {
    left: 200px;
    /* add transition 'into state 1' here */
  }

  .position--2 {
    left: 70%;
    /* add transition 'into state 2' here */
  }
  ```

- [ ] Use the third button which already has this implemented
- [ ] Show how to add different transitions between these stages by adding a transition property to
      each stage
- [ ] highlight, that these transitions can be interpreted as "transition to this state", as the
      transition will take place only when this class is on the element.

  ```css
  .position--0 {
    left: 0;
    transition: left 0.4s cubic-bezier(0.68, -0.55, 0.12, 0.93);
  }

  .position--1 {
    left: 200px;
    transition: left 0.4s ease;
  }

  .position--2 {
    left: 70%;
    transition: left 0.8s ease-out;
  }
  ```

---

## Process: Challenges

- [ ] Provide the [handout](css-animations.md) and the [challenges](challenges-css-animations.md) to
      the students
- [ ] Open the handout and walk the students through the tasks
- [ ] Keep student groups of the Recap Project
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

transition, animation, timing function, duration, delay, ease, linear, ease-in, ease-out,
ease-in-out, cubic-bezier

> These keywords are for the weekly summary on Fridays. We use the keywords to automatically
> generate excalidraw tags with the help of
> [this amazing tool](https://github.com/F-Kirchhoff/tag-cloud-generator). The students structure
> the cards in a pattern that makes sense for them. Each tag, that is added to the structure needs
> to be explained in a few words by one student. We go in rounds one by one until all tags are
> included in the structure.
