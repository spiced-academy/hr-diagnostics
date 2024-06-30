# Challenges: CSS Structure

## Selectors and Cascading Bugs

Solve the _Selectors and Cascading Bugs_ challenge locally by running this command in your Terminal:

```
npx ghcd@latest spiced-academy/fs-web-exercises/tree/main/sessions/css-structure/selectors-and-cascading
```

Have a look at the `styles.css` file.

There are various CSS rule sets with `FIX_ME` as selector. Your task is to replace this placeholder
with a proper selector according to the description above the rule set.

Use regular selectors, you're not using BEM just yet. You do not need to touch the HTML file.

Try to get a sense of how you might encounter ambiguities or issues when choosing the right
selectors.

You can remove the `outline` style declaration once you fixed it's selector. It is only there to
check if you selected the correct elements.

## Custom Properties

Solve this challenge locally by running this command in your Terminal:

```
npx ghcd@latest spiced-academy/fs-web-exercises/tree/main/sessions/css-structure/custom-properties
```

## Apply BEM to your Quiz App

When writing code for your Quiz App, you might have asked yourself how to choose class names. The
BEM methodology specifies a predefined pattern for adding class names to your HTML elements.

Bring more structure to your Quiz App code by using BEM to name all classes!

The desired result: One should be able to see which HTML elements belong together to a logical group
(a BEM "block" / a "component"), by reading the HTML code and paying attention to the classnames.

## Separate the Quiz App CSS code into different files

You created a structure of individual components in the previous exercise.

Now create a separate CSS file for each component. The file name should match the name of the
component.

Move all styles that are used across multiple components to a `global.css` file. (e.g. type
selectors like `body` or the universal selector `*`)

Your main CSS file (e.g. `styles.css`) should have several `@import` statements.

The file structure might look something like this afterwards:

```
quiz-app
├── components
│   ├── button.css
│   ├── card.css
│   ├── header.css
│   └── navigation.css
├── global.css
├── index.html
└── styles.css
```

## Identify global values in your Quiz App

There are probably a lot of redundant values in the CSS code of your Quiz App. Typical cases are:

- colors / background colors
- borders
- font names
- gradients
- spacing

Analyze your code and find redundant values.

It is not necessary, for example, to define a specific hex value for a color in several places. You
can define these kinds of redundant values in a single place (like the `global.css` or even a
`variables.css` file).

Use custom properties (CSS variables) to store such values in a central location and reuse them
throughout the code.
