<!-- _class: big-headline nemo -->

How to give a high-quality code review

---

<!-- _class: big-headline granite -->

Fundamental

---

<!-- _class: small -->

# What does "high-quality code review" mean?

Maybe the reviewer has noted...

- all logical issues?
- all a11y issues?
- all issues related to naming conventions?
- all implications to other repos / docs, etc?
- But what is meant by "all" anyway?

---

<!-- _class: small -->

# What does "high-quality code review" mean?

Regarding the content, a high-quality code review

- can only focus on **one (maybe two)** of these things at a time and
- will never find "all" issues (it's human to overlook things).

➡️ **Any issue** - no matter how "small" - you bring to attention will help.
➡️ Let's talk about **how we comment best (= nicely)**.

---

<!-- _class: small -->

# How to comment: the Problem

**Team** consists of (more or less) **equal colleagues**:

- Colleague <--> Colleague (know / can do about the same)

A relationship between **reviewer and author** is **always unequal**:

- Reviewer ("knows" more because notes issues) --> Author (has not seen issues)

➡️ You have to be very careful how you put your comments forward.

---

<!-- _class: big-headline granite -->

Problematic Wording

---

<!-- _class: small -->

# Problematic Wording

- Short phrases
  - "Missing ARIA role. Better: ...";
  - "nav?"
- Imperative ("Build the navigation bar with anchor elements!")
- Expression of necessity ("You must / You have to build the navigation bar with anchor elements")
- 🚫 Demands ("I want you to...", and the like) 🚫 - Exception: Announcement from boss:in

---

<!-- _class: image-profile -->

## Problematic Wording

The author will feel exposed, misunderstood, put down.

Any new PR will causes him / her fear.

![Foto](./assets/drowning.jpg)

---

<!-- _class: big-headline granite -->

Positive Alternatives

---

<!-- _class: extra-small -->

# Positive Alternatives

Possibility 1: include yourself

- we-feeling 🧑‍🤝‍🧑
  - "**We** should / could build the navigation bar with anchor elements.")
- keep one's own expertise to a minimum
  - "**I'm not sure** whether we should build the navigation bar with anchor elements, but maybe that would be good. What do you think?"
  - "**I'm not an expert** on this, but..."
  - "**I don't remember exactly** how it was done, but there was something about anchors."
  - "**I think** here...".
- Refer difficulties to yourself:
  - "**I'm confused.** Can we really do it like this?"
  - "**I don't understand** this right now."

---

<!-- _class: small -->

# Positive Alternatives

Possibility 2: affirm the author's abilities 💪

- "**You have certainly** also thought of anchor elements...."
- "**You could** also..."
- "After our last project **I don't need to tell you** about anchor elements in the navigation bar, but wouldn't that be appropriate here?"
  - Granted: This is perhaps a little exaggerated, but you get the point.

---

<!-- _class: small -->

# Positive Alternatives

Possibility 3: impersonal wording

- the impersonal "one":
  - "**One should** build the navigation bar here with anchor elements."
- without auxiliary word
  - "**The navigation bar should / is usually** be built with anchor elements."

---

<!-- _class: small -->

# Positive Alternatives

Possibility 4: use a verb to avoid misunderstandings

- "**I suggest** we / that you build the navigation bar with anchor elements."
- "**I recommend** here..."
- "**My suggestion would be**, ..."

---

<!-- _class: small -->

# Positive Alternatives

Possibility 5: pose a question

- "**Shouldn't we** do ... / shouldn't we here **better**...?"
- "**Shouldn't** the navigation bar **rather**...?"
- "Wouldn't option B be better?" / "Option B would be better, wouldn't it?"
- "**Couldn't we** also...?"

---

<!-- _class: small -->

# Positive Alternatives

Possibility 6: conditional sentences

- "**If we** want a good structure, **we should** put anchor elements here."
- "**If you** want an easier to use structure, **do**.... / **maybe you should do**...."
- "**If** you ask me, **I would / we should**...."

---

<!-- _class: small -->

# Positive Alternatives

Basic rule: filler words are more polite

- **yet**: "Build **yet** the navigation bar with anchor elements."
- **probably / maybe**: "You should **probably**...", "You could **maybe** also..."
- **surely**: "You have **surely** noticed that...

German equivalents: "doch", "wohl", "vielleicht", "ja"

---

<!-- _class: small -->

# Positive Alternatives

Basic rule: praise

- "Why don't you do it like this? **I know you can do it in no time at all.**"
- "**You did great last time**, use the code from there."

---

<!-- _class: intro-slide nemo -->

Takeaways

---

<!-- _class: small -->

# Takeaways

- we
- "You could also use..."
- "I think that..."
- "Shouldn't here..."
- "Super cool! Maybe you could..."

---

<!-- _class: small -->

# Links

1. [Article: 8 Tips for great code reviews](https://kellysutton.com/2018/10/08/8-tips-for-great-code-reviews.html): basic summary
2. [GitHub Repository: list of tools, articles, books and other resources](https://github.com/joho/awesome-code-review)
3. [Article: Unlearning Toxic Behaviors in a Code Review Culture](https://medium.com/@sandya.sankarram/unlearning-toxic-behaviors-in-a-code-review-culture-b7c295452a3c): good examples from practice
