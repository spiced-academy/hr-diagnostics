# GitHub and Markdown

## Learning Objectives

- learning what version control is and why it is useful / important
- creating repositories on GitHub
- creating / editing files on GitHub
- creating commits on GitHub
- learning what Markdown is
- writing Markdown

---

## Markdown

The Markdown syntax allows writing formatted text (headlines, blockquotes, lists, etc.) that can be
stored in plain text. It is used by tools and websites like GitHub or Slack. It uses specific
characters to format parts of the text in a certain way.

### Markdown Examples

| Element                         | Markdown Syntax                         |
| ------------------------------- | --------------------------------------- |
| Level 1 headline                | `# Level 1 headline`                    |
| Level 2 headline                | `## Level 2 headline`                   |
| Level 5 headline                | `##### Level 5 headline`                |
| list item                       | `- list item`                           |
| [ ] done                        | `[ ] checkbox`                          |
| [x] done                        | `[x] checkbox`                          |
| **bold text**                   | `**bold text**`                         |
| _italicized text_               | `_italicized text_`                     |
| [link](https://www.example.com) | `[link text](https://www.example.com)`  |
| image                           | `![description of image](url to image)` |
| block quote                     | `> block quote`                         |
| divider                         | `---`                                   |
| `inline code block`             | `` `inline code block` ``               |
| `code block`                    | ` ``` code block ``` `                  |

See this [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) for
more Markdown Syntax.

---

## Git & Commits

Git is an open source version control system that:

- keeps track of all changes made to the source code
- enables developers to easily collaborate on the same project and exchange updates
- enables developers to go back to earlier versions of the source code

### Git Repositories

A Git repository is a place where a project is being saved. It keeps track of all versions of the
project files. Many people can have access to (and work on) the same repository.

### Commits

A commit is a **snapshot of your repository** at a specific point in time. Creating a commit in your
project is similar to hitting the **save** button in a video game.

You can always **go back to any prior commit** and will have all the project files as they were when
you made the commit.

Each commit has a message which should include a descriptive text, so that you and other developers
will know what changes the commit includes.

### Good commit messages

Writing good commit message is an art form in itself. Try to stick to the following rules:

- Be short and descriptive
- Always use english
- The first word should be a verb: "add", "fix", "remove", etc.
- Use imperative and present tense: "add shop page" instead of "added shop page"
- Do not end your commit message with a period
- When in doubt, describe **why** you did something instead of **how**: "fix typo" instead of
  "replaced the letter a with an e in the second word"

Your commit messages are a protocol of all changes made to the code base. Other developers should be
able to understand what happened by reading the commit messages.

---

## GitHub

GitHub is an online platform where you can store, share and collaborate on **remote** git
repositories. With GitHub, the same codebase can be shared and edited across many collaborators.
Many repositories are open source, so you can view the code, create a copy, modify it or use it in
your own projects.

> 💡 Hint: Check out this huge
> [list of GitHub repositories](https://github.com/pawelborkar/awesome-repos) and see what you can
> find there.

At the same time GitHub is a social network for developers and companies. Your GitHub profile will
be a valuable public asset for your future career. You can get in contact with many open source
projects, developers and even companies via GitHub.

> 💡 Even though GitHub is the most popular online git platform, it is by far not the only one.
> There are several alternatives to GitHub, i.e Gitlab or Bitbucket.

<br>
<br>

---

## Resources

- [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
- [GitHub Profile Readme](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme)
- [List of awesome GitHub profile readmes](https://github.com/abhisheknaiidu/awesome-github-profile-readme)
