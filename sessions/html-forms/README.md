# HTML Forms

> 💡 feel free to create a personal branch of this guide to add your own notes

| duration | content         |
| -------- | --------------- |
| 0:45     | Session         |
| 1:30     | Active Learning |
| 0:30     | Recap           |

## Learning objectives

- Students should be able to create a html form with different types of form fields
  - input: text, number, etc.
  - select
  - textarea
  - button (submit, reset, button)
  - radio, checkbox
  - various types of inputs and buttons (definitions found in the handout document)
- Form structure: fieldset, legend
- Form fields have labels (connected via id)
- Form semantics
- Knowing the default behavior of form submit
- Understanding client-side form validation

---

## Arrival: Motivate students and prepare them for today's topic(s)

> 💡 Breathe and relax :)

### Which important problem will we solve today?

### Why is the content of today's block that important for the students?

- Forms are everywhere: we always want the user to interact with our application by submitting
  information.
- Forms need to be accessible to every user:
  - Students need to know how to build an accessible form.

### Pose a question to be answered by the end of the block

---

## Activate prior knowledge of students

### Which previously learned concepts will be utilized in this session?

- Accessibility

---

## Inform: Session Guide

### Simple Form

- Add the `form` tag as the main wrapper of a form.
- Start with an `input` field of type `text`.
- Explain the `name` attribute:
  - the key to identify the submitted information on the server
  - needs to be unique for each form field
- Explain the connection of `input` and `label`:
  - connected via `id` and `for` (do not talk about nested `input` elements)
  - user always knows what the input is for (compare: placeholder -> immediately replaced beginning
    with the first keystroke)
  - clicking on the label focusses the input field
  - accessibility aids such as a screen reader can correctly identify the purpose of the input
    element
- Add a submit button with type `submit`.

Your HTMl should look like this:

```html
<form>
  <label for="input-name">Name:</label>
  <input id="input-name" type="text" name="username" />
  <button type="submit">Submit</button>
</form>
```

### Default behavior of form submit

- Fill in a name and submit the form to show the default behavior in the network tab:

- Form tries to send a GET request with names and their values as prop inside a URL like
  `/?username=value1`
- The page is reloaded → the data is lost for us.

- Note that we want to prevent this default behavior (no GET request, no page reload) and will learn to do so in a future session about Forms and JavaScript.

### Form Validation

- We can use build in form validation without having to write any JavaScript
- Add the `required` attribute to the input field. Go to the browser and show that leaving it empty will lead to an error message when hitting the submit button.
- Explain the concept of form validation
  - Form fields can be enriched with various attributes
  - The attributes define rules for the expected input
  - The browser reads these attributes and validates the user's input
  - The validation must be successful to trigger the actual form submission

### More input types

- Show more input types: `date`, `number`, `email`
- Explain `select`
  - needs a `label` connected via `id` and `for`
  - `option` elements as direct children with `value` attribute to connect with the `name` attribute of the `select` field

```html
<form>
  <label for="input-name">Name:</label>
  <input id="input-name" type="text" name="username" required />
  <label for="input-email">Email:</label>
  <input id="input-email" type="email" name="email" required />
  <label for="input-date">Your favorite date:</label>
  <input id="input-date" type="date" name="favorite-date" />
  <label for="select-guests">How many friends will join you?</label>
  <select id="select-guests" name="friends-to-join">
    <option value="">--Please choose an option--</option>
    <option value="single">I come alone.</option>
    <option value="multiple">Maybe some?</option>
    <option value="alone">I do not have friends.</option>
  </select>
  <button type="submit">Submit</button>
</form>
```

- Show that the email input is being validated → the user gets an error message when the `@` sign is missing
- Add one more attribute for client side form validation like `minlength` to an input element
- Mention that there is more attributes you can use for client side form validation and show the following link: [mdn build-in form validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation#using_built-in_form_validation)

### Form structure and a11y

- Explain the use of the `fieldset` element
  - group several elements (controls, labels, etc) inside a form element
  - a nested `legend` element can provide a caption for this `fieldset`
- Add a headline for the form via `id` and `aria-labelledby` attributes
  - provides the user with a recognizable, accessible name for an interactive element
- Add a description for the form via `id` and `aria-describedby` attributes
  - provide more verbose information than a label (e.g. via `aria-labelledby`)

```html
<h2 id="title">Private Birthday Party Picker</h2>
<p id="description">
  Let's celebrate my birthday in small groups! Please give me your name, your
  preferred party date and how many friends you will bring to my private
  birthday party.
</p>
<form aria-labelledby="title">
  <fieldset aria-describedby="description">
    <legend>Enter your information</legend>
    <label for="input-name">Name:</label>
    <input id="input-name" type="text" name="username" />
    <select>
      ...
    </select>
  </fieldset>
  <button type="submit">Submit</button>
</form>
```

---

## Process: Challenges

- Provide the [handout](html-forms.md) and the [challenges](challenges-html-forms.md) to the
  students
- Open the handout and walk the students through the tasks
- Divide the students into groups
- Remind them of the ground rules:
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

- Summarize the day by repeating all of the topics that were discussed
- Highlight the progress made that day
- Encourage the students to repeat what they learned with practical exercises
- Remind them to rest :)

## Keywords for Recap

input, type=checkbox, fieldset, required, label, required, validation

> These keywords are for the weekly summary on Fridays. We use the keywords to automatically
> generate excalidraw tags with the help of
> [this amazing tool](https://github.com/F-Kirchhoff/tag-cloud-generator). The students structure
> the cards in a pattern that makes sense for them. Each tag, that is added to the structure needs
> to be explained in a few words by one student. We go in rounds one by one until all tags are
> included in the structure.
