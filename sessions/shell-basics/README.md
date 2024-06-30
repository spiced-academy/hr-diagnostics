# Shell Basics

> 💡 feel free to create a personal branch of this guide to add your own notes

| duration | content         |
| -------- | --------------- |
| 0:45     | Session         |
| 0:30     | Shell Setup     |
| 1:00     | Active Learning |
| 0:30     | Recap           |

## Learning objectives

- Understanding what the terminal and the shell are and why they are used.
- Understanding the difference between the shell, the terminal and CLI.
- Navigating the file system inside the shell.
- Creating, renaming, removing and moving files and folders in the filesystem.

---

## Arrival: Motivate students and prepare them for today's topic(s)

> 💡 Breathe and relax :)

### Which important problem will we solve today?

- Many developer tools don't have a graphical User Interface, but are nevertheless incredibly
  useful. (e.g. git, npm, node)
- We want to learn how to interact with these tools through the CLI to get access to them and use
  them to write amazing code.

### Why is the content of today's block that important for the students?

- Being able to navigate in the Shell and interact with programs via CLI is an essential skill for
  every developer and required for any job in the field.
- It's the first step to feel like a hacker.

### Pose a question to be answered by the end of the block

- What is the shell / the terminal and why is it useful?

---

## Activate prior knowledge of students

It is an option to start the session with these questions and follow up with the motivation of the
students:

- e.g. you open the terminal, start sharing you screen and ask the students if they know/have ever
  used the terminal.
- This is to start with a little bit more interactivity, in case the students are still shy to
  speak.

### Which previously learned concepts will be utilized in this session?

You can ask these questions:

- Did any of you ever use the terminal before? Was it easy or difficult to use?
- Did any of you ever open the terminal by accident and ask themselves what the heck is this used
  for?

---

## Inform: Session Guide

### Terminal

**Explain what the terminal is and what it's used for:**

- The terminal is a command line interface (CLI) that allows us to interact with the operation
  system of our computer.
- It's used to run programs and perform actions. As a developer we use the terminal for a lot of
  tasks, like creating files, installing programs, start or stop a server and many more.
- It's the program to have access to the shell and interact with it.
- The terminal is the text based input/output environment. It accepts keystrokes as input and
  paints pixels on the screen as visual output.
- On macOS we can use the integrated program Terminal.

### Shell

**Explain what the shell is and what it's used for:**

- The shell is a program that runs in a terminal.
- It's used to actually execute the commands that we type and returns the results.
- Oftentimes the words shell and terminal are used interchangeably, even though they are not
  exactly the same thing.

#### Basic shell commands

- `cd <foldername>` / `cd ..` / `cd`: change directory
- `ls`: list files
- `pwd`: print working directory
- `mkdir <foldername>`: create a directory
- `touch <filename>`: create a file
- `rm <filename>`: remove a file
- `mv <oldname> <newname>`: move or rename a file
- `open .`: open the current folder in Finder
- `cat <filename>`: print the contents of a file to the terminal

### Why do developers need to complicate everything and use the terminal instead of a graphical user interface (GUI)?

- The terminal also is a user interface, it just not graphical, meaning no pretty buttons or
  hamburger menus. It's a text based user interface.
- With a text based user interface you can **send/receive information much faster**, because
  there is no additional (beautiful) layer that needs to process the information.
- It takes a lot of time to code a GUI, therefore **some programs don't use one**.
- Most of the people that ever get into the position to use a terminal, are technical and do
  have the skills needed to use it.
- You can **easily automate processes** in a shell, because you can write computer programs that
  execute the commands for you, this wouldn't be possible with a GUI.
- Different programs in the shell can be combined to interact with each other. (e.g. the output
  of one program can be passed as input to another program)

> **It's much faster, you can copy and paste the commands you need, and you will probably make less
> mistakes.**

But with great power comes great responsibility. You can do almost anything in the terminal, also
delete things irreversibly or other things that you didn't intend to so. So be cautious!

### Setup and Challenge Preparation

Provide the [handout](shell-basics.md) and [challenges](challenges-shell-basics.md) to the students.

Guide the students through the setup by following the instructions in the challenges.

Let students do the actual treasure hunt challenge on their own.

---

## Process: Project / Assignment

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
  few phrases: <br>
- **What is the shell / the terminal and why is it useful?**
  - The shell is a program that runs in our terminal.
  - It can access the services of the operating system of our computer (e.g. macOS). This means we
    can quickly execute any at action needed.
  - It let's us install, create, edit, download... really anything you can imagine.
  - Also, as soon as you start using it, people will think you are a real hacker.

---

## Checkout

> 💡 In case the students seem frustrated try to find some encouraging words (e.g. remind them of
> how far they have come already) :)

- Summarize the day by repeating all of the topics that were discussed
- Highlight the progress made that day
- Encourage the students to repeat what they learned with practical exercises
- Remind them to rest :)

## Keywords for Recap

shell, terminal, CLI, cd, touch, ls

> These keywords are for the weekly summary on Fridays. We use the keywords to automatically
> generate excalidraw tags with the help of
> [this amazing tool](https://github.com/F-Kirchhoff/tag-cloud-generator). The students structure
> the cards in a pattern that makes sense for them. Each tag, that is added to the structure needs
> to be explained in a few words by one student. We go in rounds one by one until all tags are
> included in the structure.
