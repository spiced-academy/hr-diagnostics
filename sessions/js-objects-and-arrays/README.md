# JS Objects and Arrays

> 💡 feel free to create a personal branch of this guide to add your own notes

| duration | content                          |
| -------- | -------------------------------- |
| 0:30     | Session Arrays                   |
| 0:30     | Active Learning Arrays           |
| 0:30     | Session Objects                  |
| 1:00     | Active Learning Objects & Arrays |
| 0:15     | Recap                            |

## Learning objectives

- [ ] Creating, accessing, and manipulating arrays
- [ ] Creating, accessing, and manipulating objects
- [ ] Knowing how to find properties and methods of objects by logging

---

## Arrival: Motivate students and prepare them for today's topic(s)

> 💡 Breathe and relax :)

### Why is the content of today's block that important for the students?

- Working with objects and arrays is a fundamental building block for writing complex logic
- Objects or arrays are almost always used when data is being fetched from an API

---

## Activate prior knowledge of students

### Which previously learned concepts will be utilized in this session?

- Variables
- Primitive types in JavaScript

---

## Inform: Session Guide

### Arrays

- [ ] Store multiple values in one variable
- [ ] Special Object
- [ ] Access not by key but by **index**

### Declaring and reading from Arrays

- [ ] You can declare an array using array literals:

  ```js
  const shoppingList = ["apple", "tomato"];
  console.log(shoppingList);
  ```

- [ ] Each item in the array has an index, which starts at 0
- [ ] You can access individual items using the bracket notation and the item's index:

  ```js
  console.log(shoppingList[0]);
  console.log(shoppingList[1]);
  ```

- [ ] You can get the length of an array using the length property:

  ```js
  console.log(shoppingList.length);
  ```

- [ ] Arrays can contain different types of values:

  ```js
  const diverseArray = [1, 2, "hello", false];
  const complexArray = [1, 2, ["hello", false], true];
  ```

- [ ] Arrays with mixed types can be confusing to use. It is generally a good idea to use arrays with only one type of value unless you have a good reason to do otherwise.
- [ ] Nested arrays can be accessed as follows:

  ```js
  console.log(complexArray[2][1]);
  ```

### Manipulating Arrays

- [ ] You can overwrite individual values in an array:

  ```js
  const shoppingList = ["apple", "tomato"];
  shoppingList[0] = "banana";
  console.log(shoppingList);
  ```

- [ ] You can add an element (or multiple elements) to the end of an array:

  ```js
  shoppingList.push("orange");
  console.log(shoppingList);
  ```

- [ ] You can remove an element from the end of an array:

  ```js
  shoppingList.pop();
  console.log(shoppingList);
  ```

### Process: Challenge 1

- [ ] Open the handout and walk the students through the tasks
- [ ] Divide the students into groups
- [ ] Remind them of the ground rules:
  - meet again 30 min before lunch break in the class room
  - they can ask the coaches for help at any time
  - always try to help each other
  - take a break within the next 1.5 hrs
  - keep an eye on Slack

### Objects

- [ ] Objects store properties (key / value pairs)
- [ ] Some objects you already know are: `document`, `event`, queried dom elements
- [ ] Log an object in the dev-tools visiting a website like wikipedia

#### Declaring and reading from Objects

- [ ] You can declare an object using an object initializer:

  ```js
  const person = {
    name: "Max Blub",
    age: 21,
    isStudent: false,
  };
  ```

- [ ] You can access the properties using the dot notation:

  ```js
  console.log(person.name);
  ```

- [ ] You can access the properties using the bracket notation:

  ```js
  console.log(person["name"]);
  ```

- [ ] Objects can be nested:

  ```js
  const person = {
    name: "Max Blub",
    age: 21,
    isStudent: false,
    address: {
      street: "Berliner Str.",
      houseNumber: 42,
      city: "Leipzig",
      zipCode: "12345",
    },
  };
  ```

- [ ] Nested values can be accessed like this:

  ```js
  console.log(person.address.street);
  ```

#### Manipulating Objects

- [ ] You can change values of object properties by reassigning them using the dot or bracket
      notation:

  ```js
  person.name = "Max Bla";
  console.log(person.name);
  person["name"] = "Max Blub"; // omit
  console.log(person.name); // omit
  ```

- [ ] You can add properties in the same way:

  ```js
  person.score = 15;
  console.log(person);
  ```

- [ ] You can delete properties using the delete keyword:

  ```js
  delete person.score;
  console.log(person);
  ```

### Nested Objects / Arrays

- [ ] Arrays can contain objects and vice versa:

  ```js
  const peopleArray = [
    {
      name: "John",
      age: 22,
    },
    {
      name: "Alex",
      age: 33,
    },
  ];
  ```

  ```js
  const user = {
    userId: "1234",
    mail: "test@mail.com",
    shoppingCart: ["tomato", "banana", "chocolate"],
  };
  ```

- [ ] Access elements via chained dot / bracket notation:

  ```js
  console.log(peopleArray[1].name); // "Alex"
  console.log(user.shoppingCart[0]); // "tomato"
  ```

### Challenges 2 & 3

- [ ] Provide the [handout](js-objects-and-arrays.md) and the
      [challenges](challenges-js-objects-and-arrays.md) to the students
- [ ] Open the handout and walk the students through the second and third challenge
- [ ] Give them ca. 60min for solving these challenges

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

array.length, dot-notation, bracket-notation, nesting, key-value-pair

> These keywords are for the weekly summary on Fridays. We use the keywords to automatically
> generate excalidraw tags with the help of
> [this amazing tool](https://github.com/F-Kirchhoff/tag-cloud-generator). The students structure
> the cards in a pattern that makes sense for them. Each tag, that is added to the structure needs
> to be explained in a few words by one student. We go in rounds one by one until all tags are
> included in the structure.
