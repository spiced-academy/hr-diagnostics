# HTML and the web

---

## How the web works

The world wide web is a network of computers that can communicate and exchange information with each
other. There are many different protocols that define the rules on how two machines communicate with
each other, for example:

- requesting and displaying html files via `http` (e.g. opening websites with your browser)
- accessing the shell of another computer via `ssh` or cloning repositories from GitHub via a ssh
  connection
- sending and receiving e-mails via `TLS/SSL`
- Accessing files on a server via `FTP` (file transfer protocol)

For now we are focusing on the most commonly used feature of the web: Displaying and interacting
with websites. In order to view a specific website you have to:

- get the `address` of the server that provides the html file, i.e. the `IP address` (internet
  protocol address).
- send a `GET request` to that address
- request additional resources (CSS files, images, etc.)
- `render` the received content (e.g. via a browser)

Most computers connected to the internet can be reached via an `IPv4` address which consists of 4
numbers in a range from 0 to 255 separated by a dot.

> 💡 Enter this IP address in the address bar of your browser and see what happens:
> `172.217.203.94`.

> 💡 Execute following command in your terminal to get the current IP address of your computer:
> `curl ipinfo.io`.

Just like remembering all the phone numbers of your friends is impractical, remembering the IP
addresses of all the websites is not very user friendly. To solve this problem, websites can be
reached via a `url` like `https://www.neuefische.de`. The browser then requests the IP address of
this website from a `DNS` (domain name server), which is basically a phone book for domains.

Then the browser fetches all necessary content for the website like the html file, CSS and
JavaScript files, images, fonts, etc. As soon as all files have downloaded, the browser displays the
html content, styles it as specified in the style sheet and executes JavaScript code. We can now
interact with the website.

Below is a sketch of how a typical request of a web page looks like. <br> <br>
<img src="./assets/request-response.png" width=600 />

## HTML basics

HTML (hyper text markup language) is a markup language - similar to markdown. It's a language to
express text in a structured way. This structure is represented by html tags which indicate what
kind of element is displayed on the website. For example, a headline element is written like this:

```html
<h1>I am a headline!</h1>
```

As you can see, the html element is opened with an h1 tag and closed with a corresponding closing
tag. Everything in between these two tags is considered the headline, even other html elements:

```html
<h1>I am a <em>headline!</em></h1>
```

Some element can't contain any other elements and therefore don't have a closing tag. These elements
like images or inputs are called self closing and are closed immediately at the end of the tag with
a `/` forward slash (see `img` example below).

### HTML tag attributes

Some elements require some more information in order to function properly. This information is
specified via attributes. For example:

- the source of an image
  ```html
  <img src="logo.png" alt="The logo of the company." />
  ```
- the destination of an anchor element
  ```html
  <a href="example-url.com"> click me </a>
  ```
- the type of an input element
  ```html
  <input type="date" />
  ```

Which html element requires which kind of attribute can be looked up in the
[MDN web docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes).

### Layout of an HTML file

A typical html website consists of two main parts:

- the head contains important meta information for the browser like
  - the charset (utf-8, unicode, ASCII)
  - the favicon displayed in the tab
  - the title of the website,
  - stylesheets and java script files needed for the website.
- the body contains the content of the website structured by html elements

```html
<html>
  <head>
    ...meta information, additional links to css / js files
  </head>
  <body>
    ...elements displayed on the web page
  </body>
</html>
```

### List of common HTML elements

| element             | meaning                                                             |
| ------------------- | ------------------------------------------------------------------- |
| `<head></head>`     | only once per website, includes meta data and linked files          |
| `<body></body>`     | only once per website, includes the html website content            |
| `<h1></h1>`         | only once per website, a level one heading                          |
| `<h2></h2>`         | a level two heading                                                 |
| `<h3></h3>`         | a level three heading                                               |
| `<h6></h6>`         | a level six heading                                                 |
| `<p></p>`           | a paragraph                                                         |
| `<a></a>`           | an link or anchor element                                           |
| `<img />`           | an image, has no closing tag                                        |
| `<form></form>`     | a form element                                                      |
| `<input />`         | an input field, has no closing tag                                  |
| `<button></button>` | a clickable element, often equipped with some kind of functionality |

> 💡 A comprehensive list of all html elements can be found at the
> [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element#inline_text_semantics).

## Structuring a Website

Developers have two main tools to express a meaningful structure in a website:

1.  using semantic HTML elements
2.  nesting / grouping of HTML elements

### Semantic HTML

Semantic HTML elements not only divide the content of the web page into distinct parts, but also
describe the function or purpose of the elements. This has two major benefits:

- the HTML becomes more understandable for other developers
- accessibility tools and search engines can interpret the website

Therefore, one should use semantic HTML elements whenever possible.

### List of Semantic HTML elements

| element                 | meaning                                                                                                             |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `<main></main>`         | only once per website, includes the main content of the page                                                        |
| `<section></section>`   | a generic standalone section of a document                                                                          |
| `<ul></ul>`/`<ol></ol>` | a list of elements with the same structure, only has `<li>` elements as direct children                             |
| `<nav></nav>`           | a navigation bar                                                                                                    |
| `<aside></aside>`       | element representing a portion of a document whose content is only indirectly related to the main content           |
| `<article></article>`   | representing a self-containing part of the website, which is intended to be independently distributable or reusable |
| `<header></header>`     | representing introductory content, typically a group of introductory or navigational aids                           |
| `<footer></footer>`     | typically contains information about the author of the section, copyright data or links to related documents        |

> 💡 You can find a comprehensive list of semantic html elements in the
> [MDN web docs](https://developer.mozilla.org/en-US/docs/Glossary/Semantics).

### Nesting HTML elements

In general, html elements can include other elements as shown above. This is used to group elements
together in a meaningful way. The element containing the other elements is called the
`parent element`, which contains one or more `child elements`. The following cases are typical
examples of nested elements:

- ```html
  <ul>
    <li>first item</li>
    <li>second item</li>
    <li>third item</li>
  </ul>
  ```
- ```html
  <article>
    <h2>Some headline</h2>
    <p>I am a paragraph...</p>
    <a href="https://www.github.com"> link to another website. </a>
  </article>
  ```
- ```html
  <button>
    <img src="arrow.svg" />
    <span> submit </span>
  </button>
  ```
  Below is a sketch of how semantic elements can be nested in a web page. <br><br>
  <img src="./assets/sectioning-elements.png" width=700 />

## Emmet

VSCode has a useful tool called Emmet which lets you autocomplete a lot of code by just typing
certain snippets and pressing the `Tab` key afterwards. Try these snippets inside an html file and
see what happens:

- `!`
- `.highlight`
- `button#red`
- ul>li.card\*10

> 💡 You can learn about more emmet commands in
> [this cheat-sheet](https://coolcheatsheet.com/toolkit/emmet)

---

## Resources

- [MDN: Introduction to HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML)
- [MDN: Getting started with HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started)
- [MDN: HTML Elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
- [MDN: Semantic elements: Glossary](https://developer.mozilla.org/en-US/docs/Glossary/Semantics)
- [MDN: HTML attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes)
