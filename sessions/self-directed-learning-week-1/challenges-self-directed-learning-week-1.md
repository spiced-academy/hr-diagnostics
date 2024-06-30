# Challenges - Self Directed Learning Week 1

---

## Git Workflow Workout

1. create a new repo from your Github profile (name it like you want);
2. copy the git url (the SSH one, important!);
3. create a new folder from your Terminal (via `mkdir`);
4. **extremely important**: you should _not_ be inside an existing git repo!
5. enter the folder (`cd <dirname>`);
6. init the repo (`git init`);
7. link your local repo to the remote one - `git remote add origin git@github.com...`;
8. add a `.gitignore` with `.DS_Store` on the first line;
9. create a README file (`touch README.md`);
10. edit its contents (`code .` will open the whole folder in VSCode);
11. add your work to the stage - `git add .`;
12. commit your work - `git commit -m 'First commit'`;
13. sync your work over to github - `git push -u origin main`.
14. refresh your repository on github, you should see your README file!

Done? Great!

- delete the repo from github (Settings - Danger Zone - Delete);
- delete the local folder;
- rinse and repeat, this time trying to remember the operations without looking at the instructions above. Do it a bunch of times and you'll be fine!

---

## HTML Workout

Let's have a look at a basic HTML structure and apply it to different scenarios.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>My Homepage</title>
  </head>
  <body>
    <header>
      <h1>My Homepage</h1>
      <p>
        <img
          src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
          alt="Me doing stuff"
          height="200"
        />
      </p>
      <p>Welcome to my website</p>
      <nav>
        <a href="#experience">Experience</a>
        <a href="#about">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
    <main>
      <section>
        <h2 id="experience">My Experience</h2>
        <p>I have worked for the following partners:</p>
        <ul>
          <li>First</li>
          <li>Second</li>
          <li>Third</li>
        </ul>
      </section>
      <section>
        <h2 id="skills">My Skills</h2>
        <p>I have the following skills:</p>
        <ul>
          <li>First</li>
          <li>Second</li>
          <li>Third</li>
        </ul>
      </section>
      <section>
        <h2 id="contact">Contact</h2>
        <p>Reach out at <a href="mailto:jane@doe.com">my e-mail address</a>.</p>
      </section>
    </main>
    <footer>
      <p>&copy; 2023 myself</p>
    </footer>
  </body>
</html>
```

We have:

- a `<head>` section with the `<title>` (_not_ visible in the browser body);
- a `<body>` containing an `<header>`, a `<main>` and a `<footer>`;
- the `<header>` has a title, a picture, a descriptive paragraph and a navigation;
- the `<footer>` has just a (fake) copyright info;
- the `<main>` contains three `<section>`s;
- each `<section>` has a title, one or more paragraphs, and if needed a list of additional information.

Try to draft an homepage for:

- a cinema / theater;
- a restaurant;
- a music band;
- a public administration office.

Decide first the information you'll need / want to show (pencil and paper go a long way), then work on the HTML.
