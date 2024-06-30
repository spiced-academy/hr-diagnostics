# CSS Animations

## Learning Objectives

- [ ] Understanding the `transition` property
- [ ] Understanding easing functions
- [ ] Understanding what properties can be animated
- [ ] Understanding the `animation` property

---

## The `transition` Property

The `transition` property is a shorthand for the `transition-property`, `transition-duration`,
`transition-timing-function` and `transition-delay` properties. (You can use these properties on
their own but it's most common to use the shorthand property.) It allows you to define the
transition between two states of an element. You can define multiple transitions by separating them
with a comma.

```css
/* transition for opacity */
transition: opacity 500ms;
/* transition for opacity and background-color */
transition: opacity 500ms, background-color 500ms;
/* ease-in-out transition for opacity and background-color */
transition: opacity 500ms ease-in-out, background-color 500ms ease-in-out;
/* ease-in-out transition for opacity and background-color with a delay of 1s */
transition: opacity 500ms ease-in-out 1s, background-color 500ms ease-in-out 1s;
```

Here are all the properties you can use with `transition`:

- `transition-property`: The CSS property you want to animate.
- `transition-duration`: The duration of the transition.
- `transition-timing-function`: The timing function of the transition.
- `transition-delay`: The delay before the transition starts.

> 💡 `duration` and `delay` take a time unit (`ms` or `s`).

> 💡 You can use the `all` keyword to apply the transition to all properties:
>
> ```css
> transition: all 500ms ease-in-out;
> ```
>
> Be careful with this though, as it can have unintended consequences like animating the `height` or
> `width` of an element on layout changes.

---

## Easing Curves

Easing curves are used to define the speed and acceleration of the transition. There are five build
in easing curves:

![Easing Curves: `ease`, `linear`, `ease-in`, `ease-out` and `ease-in-out`](./assets/easing-curves.png)

You can use the `cubic-bezier` function to define your own easing curve. It's easiest to use a tool
like [cubic-bezier.com](https://cubic-bezier.com/) or the Dev Tools of your browser to create your
own easing curves.

> 💡 Here's the technical detail: The function takes four parameters:
> `cubic-bezier(x1, y1, x2, y2)`. The parameters define the two control points of the curve. The
> control points are the points that the curve will bend towards. The start point is always `(0, 0)`
> and the end point is always `(1, 1)`.

---

## Animatable Properties

Not all properties can be animated. Some properties like `display` or `position` have discrete
values and won't transition smoothly.

Some properties can be animated but have a negative performance impact. For example, animating the
`height` or `width` of an element will cause the browser to recalculate the layout of the page 60
times per second. That means, that because the dimensions of the animated object change, the browser
has to figure out the new position of all the other elements on the page.

It is best to prefer animating properties that are cheap to animate (because they can not affect
layout) like:

- `color`
- `background-color`
- `border-color`
- `opacity`
- `transform`
- `box-shadow`
- `filter`

You can find a complete list of animatable properties in the
[mdn documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties).

## Complex Animations with `@keyframes` and `animation`

Transitions are great for simple animations but they are limited in what they can do. You can only
use them to animate between two states. If you want to animate between multiple states or have
recurring animations you can use the `@keyframes` rule and the `animation` property.

### `@keyframes`

The `@keyframes` rule defines the animation. It takes a name and a list of keyframes. A keyframe is
a percentage and a list of properties. The percentage defines at which point in the animation the
properties should be applied where `0%` is the start of the animation and `100%` is the end.

`@keyframes` is used outside of a selector and is not directly applied to any element.

```css
@keyframes my-animation {
  0% {
    opacity: 0;
    transform: scale(1);
  }
  30% {
    opacity: 1;
    transform: scale(1.2);
  }
  50% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
  }
}
```

> 💡 You can also use the `from` and `to` keywords instead of percentages. `from` is the same as
> `0%` and `to` is the same as `100%`. You can also define percentage amounts between `from` and `to`, such as:

```css
@keyframes animationName {
  from {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
```

### `animation`

The `animation` property is a shorthand for the `animation-name`, `animation-duration`,
`animation-timing-function`, `animation-delay` properties (plus some more - see below). It is used
to apply the animation to an element. You can define multiple animations by separating them with a
comma.

```css
/* apply the animation my-animation to the element */
animation: my-animation 2s;
/* apply the animation my-animation to the element with a delay of 1s and an ease-in-out easing curve */
animation: my-animation 2s ease-in-out 1s;
```

These are the properties you can use with `animation` (you can combine them all into the shorthand
but it becomes hard to read):

- `animation-name`: The name of the animation to apply.
- `animation-duration`: The duration of the animation.
- `animation-timing-function`: The easing curve of the animation.
- `animation-delay`: The delay before the animation starts.
- `animation-iteration-count`: The number of times the animation should be repeated. You can use
  `infinite` to repeat the animation indefinitely.
- `animation-direction`: The direction of the animation. You can use `alternate` to reverse the
  animation on every other iteration.
- `animation-fill-mode`: The fill mode of the animation. You can use `forwards` to keep the final
  state of the animation after it has finished.
- `animation-play-state`: The play state of the animation. You can use `paused` to pause the
  animation.

You can use any mix of shorthand and longhand properties:

```css
.element {
  /* apply the animation my-animation to the element with an ease-in-out easing curve, infinitely alternating  */
  animation: my-animation 2s ease-in-out;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

.element:hover {
  /* pause the animation when the element is hovered */
  animation-play-state: paused;
}
```

> 💡 A very cool resource for CSS animations is [animate.style](https://animate.style/). It contains
> a lot of animations that you can use in your projects. You can copy the CSS code for the animation
> you want from the
> [animate.css GitHub Repository](https://github.com/animate-css/animate.css/tree/main/source) and
> add it to your project.

## Using Animations with `prefers-reduced-motion`

Animations can be distracting for some people. People with vestibular disorders or people with
attention deficit hyperactivity disorder (ADHD) can be easily affected by animations. People with
epilepsy can have seizures triggered by flashing lights.

To make your website more accessible you should provide a way to disable animations. You can do this
by using the `prefers-reduced-motion` media query. It can be used to detect if the user has
requested to reduce the amount of motion on their device.

```css
/* only add animations or transitions if the user has no preference for prefers-reduced-motion */
@media (prefers-reduced-motion: no-preference) {
  .element {
    animation: my-animation;
    transition: color 2s;
  }
}

/* or the other way around, remove transitions and animations if the user prefers reduced motion */
@media (prefers-reduced-motion: reduce) {
  .element {
    animation: none;
    transition: none;
  }
}
```

> 💡 You can set the `prefers-reduced-motion` media query in your operating system settings. On
> macOS you can find it in `System Preferences > Accessibility > Display > Reduce motion`.

---

## Resources

- [transition on mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/transition)
- [animation on mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/animation)
- [easing-function on mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function)
- [cubic-bezier.com](https://cubic-bezier.com/)
- [animate.style](https://animate.style/)
- [Responsive Design for motion with Ally Examples](https://webkit.org/blog/7551/responsive-design-for-motion/)
