# Session name

> 💡 feel free to create a personal branch of this guide to add your own notes

| duration | content         |
| -------- | --------------- |
| 0:45     | Session         |
| 1:30     | Active Learning |
| 0:30     | Recap           |

## Learning objectives

- [ ] knowing the difference between `var`, `let` and `const`
- [ ] understanding the different data types
- [ ] using basic math operations

---

## Arrival: Motivate students and prepare them for today's topic(s)

> 💡 Breathe and relax :)

### Which important problem will we solve today?

- how to "remember" values in JavaScript, so that we can use them later on

### Why is the content of today's block that important for the students?

Variables are a basic building block for writing reusable logic. Write code once and use it as often
as you need to.

### Pose a question to be answered by the end of the block!

---

## Activate prior knowledge of students

### Which previously learned concepts will be utilized in this session?

- JS Basics
- math knowledge from everyone's time as a student in school

---

## Inform: Session Guide

### Variables

- [ ] variables are a storage for values
- [ ] we can declare variables and then use them as if they were values
  - we don't have to remember the values
  - different parts of our application can exchange the values behind variables, so the code works
    for every value (we don't have to write new code, only if a value changes e.g. some user input)
- [ ] we can declare a variable using the **const** keyword:

```js
const myNumber = 42;
console.log(myNumber);
```

- [ ] The **const** keyword is used to declare variables that cannot change their value. Use it per
      default.

- [ ] If you need to change the value of a variable, use the **let** keyword:

```js
let myMutableNumber = 42;
console.log(myMutableNumber);
myMutableNumber = myMutableNumber + 1;
console.log(myMutableNumber);
```

- [ ] The interpreter (a piece of software running in the browser) executes JavaScript line by line.

### Variable Naming

- [ ] Use camel case: `myMutableNumber` instead of `mymutablenumber` or `my-mutable-number`
- [ ] Use descriptive names and don't shorten words: `followButton` instead of `flwBtn`

### Primitive Data Types

- [ ] In JavaScript there are 7 different primitive data types:

- [ ] **string**: A sequence of characters, for example: `const name="max";`
- [ ] **number**: A number, for example: `const length=42;` or `const price=4.95;`
- [ ] **boolean**: A binary value which is either true or false: `const isHungry=true;` or
      `const done=false;`
- [ ] **null**: A value that represents the intentional absence of a value. Typically set by a
      developer.
- [ ] **undefined**: A value that represents the absence of a value, because no value has been
      defined or given yet.

- [ ] There are two more data types: **BigInt** and **Symbol**. If the students are interested they
      can read about them in the handout or online.

- [ ] It is important not to accidentally mix up data types. This can lead to bugs (errors or
      unwanted behavior in our application), for example:

```js
const oneTimeFee = "5";
const monthlyFee = 12;
const amountToBeCharged = oneTimeFee + monthlyFee; // result will be "512"
console.log(amountToBeCharged);
```

### Mathematical operators

- [ ] `+`: Adds numbers
  ```js
  const oneTimeFee = 5;
  const monthlyFee = 12;
  const amountToBeCharged = oneTimeFee + monthlyFee; // result will be 17
  console.log(amountToBeCharged);
  ```
- [ ] `-`: Substracts numbers
  ```js
  const mortgageSum = 20000;
  const alreadyPayed = 5000;
  const amountToBePayed = mortgageSum - alreadyPayed; // result will be 15000
  console.log(amountToBePayed);
  ```
- [ ] `*`: Multiplies numbers
  ```js
  const length = 4;
  const width = 5;
  const area = length * width; // result will be 20
  console.log(area);
  ```
- [ ] `/`: Divides numbers
  ```js
  const students = 15;
  const groups = 3;
  const studentsPerGroup = students / groups; // result will be 3
  console.log(studentsPerGroup);
  ```
- [ ] `**`: Potentiates numbers
  ```js
  console.log(2 ** 10); // will log 1024
  ```
- [ ] `%`: Returns the remainder of a division of two whole numbers
  ```js
  console.log(8 % 3); // will log 2
  ```

### Assignment Operators

- [ ] `+=`: Increases the value of the variable
  ```js
  let balance = 20;
  balance += 5;
  console.log(balance); // will log 25
  ```
- [ ] `-=`: Decreases the value of the variable
  ```js
  let balance = 20;
  balance -= 5;
  console.log(balance); // will log 15
  ```
- [ ] `*=`: Multiplies the value of the variable
  ```js
  let price = 8;
  price *= 2;
  console.log(price); // will log 16
  ```
- [ ] `/=`: Divides the value of the variable
  ```js
  let price = 8;
  price /= 2;
  console.log(price); // will log 4
  ```
- [ ] `++`: Increments the value of the variable by 1
  ```js
  let price = 8;
  price++;
  console.log(price); // will log 9
  ```
- [ ] `--`: Decrements the value of the variable by 1
  ```js
  let price = 8;
  price--;
  console.log(price); // will log 7
  ```

---

## Process: Challenges

- [ ] Provide the [handout](js-variables-and-numbers.md) and
      [challenges](challenges-js-variables-and-numbers.md) to the students
- [ ] Open the challenges and walk the students through the tasks
- [ ] Divide the students into groups of 3
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

const, let, boolean, number, string, undefined, null, +=, ++,

> These keywords are for the weekly summary on Fridays. We use the keywords to automatically
> generate excalidraw tags with the help of
> [this amazing tool](https://github.com/F-Kirchhoff/tag-cloud-generator). The students structure
> the cards in a pattern that makes sense for them. Each tag, that is added to the structure needs
> to be explained in a few words by one student. We go in rounds one by one until all tags are
> included in the structure.
