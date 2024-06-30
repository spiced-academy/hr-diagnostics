# JavaScript Basics

## Learning Objectives

In this session you will learn:

- [ ] what JavaScript is and does in comparison to HTML and CSS
- [ ] how to integrate JavaScript with `<script>`
- [ ] how you select an element wih `querySelector`
- [ ] how to add, remove and toggle CSS classes on `click` with `addEventListener`
- [ ] what the console is and how to work with `console.log()` and `console.clear()`

---

## Introduction

To put it simple at the beginning: With JavaScript, we bring interaction to our website. That's
enough for the moment, so let's click buttons and change colors!

## Connect a JavaScript file

In order to do this, we create an `index.js` file at the root of our project. Now, we need to link
it with the `index.html` by adding a `script` tag to the head of the `index.html`:

```html
<head>
  ...
  <script src="./index.js" defer></script>
</head>
```

The `script` tag has two attributes: `src="./index.js"` contains the relative path to the `index.js`
file. The `defer` attribute tells the browser to delay the loading of the script until all HTML
elements are loaded. Otherwise, the JavaScript we write would not work.

> 💡 Alternative: You can also put the `script` tag at the end of the body element; if doing so, the
> `defer` attribute is not necessary.

## Grabbing HTML Elements: `.querySelector()`

In order to add some interaction to our website, we first need to make the relevant HTML element
available for JavaScript. Have a look at the following example:

```html
<body>
  <h1>My color changes sometimes!</h1>
  <button>Change color</button>
</body>
```

We want the color of the `h1` to change if we click on the button. The first step is to grab the
`h1` and the `button` element inside of our `index.js`:

```js
const heading = document.querySelector("h1");
const button = document.querySelector("button");
```

To put it short: We create two constants (`const`) with the name `heading` and `button`. Their
content is the entire HTML element, i.e. the `h1` and the `button`, respectively.

Let's have a closer look and start on the right side of the equals sign:

We use the global `document` object which represents the entire web page and its content. This
object provides us with a method called `querySelector`. Note that we make use of this method by
adding it with a `.` after `document`. Within the brackets `()` after `querySelector`, we hand over
a search term in quotation marks. This search term equals the HTML element's name used in the
`index.html` above.

> 💡 Quotation marks represent the type string. We will cover strings in a later session.

So, `document.querySelector('h1')` finds the entire `h1` element (we will further explore what this
means in the next chapter [Check your JavaScript](#check-your-javascript-consolelog)). On the left
side of the equals sign, we save this `h1` element in a constant with the name `heading`. By doing
so, the `h1` element becomes available in our JavaScript file.

### More specific queries are better

Up to now, we used the HTML element name (e.g. `button`) for querying. In most cases, this is not
useful, because `querySelector` only finds **the first element** in your file. If you have multiple
buttons and want to find the third one, this will not work.

Luckily, you can search for attributes of HTML elements as well. Consider the following code:

```html
<button>Change color</button>
<button class="time-button" data-js="button-time">Change t ime</button>
```

If we want to find the second button, we can use this code:

```js
const timeButton = document.querySelector('[data-js="button-time"]');
```

We search for an attribute via square brackets `[]`. We use a
[custom data-js attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/data-*)
with the value `button-time` to find the second button.

> 💡 We could also search for the class attribute via `.querySelector('.time-button')`. However, it
> is a better practice to separate CSS and JS: use the `class` attribute for CSS and a `data-js`
> attribute for JS.

## Check your JavaScript: `.console.log()`

Every browser has a debugging console. We can use JavaScript and log something to the console. Most
often, we use this to check whether our code has the correct value at a specific point.

To log something to the console, we use the globally available `console` object and its `.log()`
method. If we want to check whether the query for our `timeButton` was successful, we need to add
this code **below our query**:

```js
const timeButton = document.querySelector('[data-js="button-time"]');
console.log(timeButton);
```

We need to open the console first:

- in Firefox, use <kbd>Cmd</kbd> + <kbd>Option</kbd> + <kbd>K</kbd>
- in Chrome, use <kbd>F12</kbd> or the shortcut <kbd>Cmd</kbd> + <kbd>Option</kbd> + <kbd>J</kbd>

Now, we can see the following output in the console:

```html
<button class="time-button" data-js="button-time">Change time</button>
```

Congratulations, you have grabbed your first HTML element to use it in a JavaScript file! 🎉 As
mentioned above, the `querySelector` returns **the entire element** with both attributes `class` and
`data-js`. We will use this to add interaction in the next chapter!

> 💡 If you open the console in the browser you will have a small arrow
> next to the button output. If you click on this arrow, you will see a long list of all properties
> which are also available. ![Properties of an HTML element](assets/console_element_properties.png)
>
> These "hidden" properties are the reason why we can do magic with JavaScript!

### Useful Addition: `console.clear()`

Have you noticed the `console.clear()` in the first line of the example above? This method clears the console, i.e. all outputs before this line are deleted.

When you start your code with this line, you can be sure the console is cleared every time you
reload the page. This is very useful when you practice JavaScript, because all "older" outputs are
deleted. You can be sure to only see the **output of your current code** - so be focussed by using
`console.clear()`!

## Add Interaction: `.addEventListener()`

Events are, among other things, actions caused by the user when interacting with your application.
You can link an action to these events. For example, if the user clicks a specific button on a
webpage, you might want it to trigger a color change of a heading.

Consider the following content of an HTML file:

```html
<h1 data-js="heading">My color changes sometimes!</h1>
<button data-js="button-color">Change color</button>
```

We want to change the color of the heading if the user clicks the button. First, we need to query
both elements:

```js
const heading = document.querySelector('[data-js="heading"]');
const colorButton = document.querySelector('[data-js="button-color"]');
```

Second, we react to the `click event` of the button by adding an `event listener` with the help of
`.addEventListener()`to the button:

```js
colorButton.addEventListener("click", () => {
  console.log("clicked");
});
```

We need to specify the click event within the braces (`'click'`) and within the curly braces, we
check that everything works via a `console.log()`. Now, when pressing the "Change color" button, the
string "clicked" is logged to the console. Great work, our first event listener! 🎉

The last step is to change the color of the heading. To do this, we write a new class in styles.css,
e.g. `.highlight { color: hotpink; }`. Now, we add this class to the `h1` element when we click the
button:

```js
colorButton.addEventListener("click", () => {
  heading.classList.add("highlight");
});
```

We make use of two concepts here: The element behind the constant "heading" has a `classList`
property we can reach via `heading.classList`. This `classList` has an `add()` method we can use to
add another class to an HTML element. We need to pass the name of the class within the braces as a
string with quotation marks.

Congratulations, you are now able to add a class to any HTML element and change the styling!

There are two other interesting methods here:

- `heading.classList.remove('highlight')` removes the class called "highlight"
- `heading.classList.toggle('highlight')` toggles the class called "highlight"

---

# Challenges

## Part 1

## Part 2

---

## Resources
