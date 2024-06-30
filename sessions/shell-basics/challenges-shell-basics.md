# Challenges: Shell Basics

## Folder Organization

In this challenge, we will set up our workspace for the duration of the bootcamp.

Your folder structure should look like this:

```js
spiced-bootcamp
├── cohortName-web-dev
├── is-token-correct
├── session-notebook
└── challenges
```

If you haven't already created the `spiced-bootcamp` folder and cloned the `cohortName-web-dev` repository (replace `cohortName` with your actual cohort name), please follow these steps.

### Create Spiced Bootcamp folder

Open **the terminal** and navigate to the folder (for example: Documents or Desktop) where you want to have all spiced-bootcamp content.

- create the `spiced-bootcamp` folder. In side here we are going to have all the files/ content of this bootcamp.

```bash
  mkdir spiced-bootcamp
```

- Verify that the folder was created.

```bash
  ls
```

Search in the output that the folder `spiced-bootcamp` is there.

- Enter the folder `spiced-bootcamp`

```bash
  cd spiced-bootcamp
```

- Verify that this folder is empty.

```bash
  ls
```

It should be an empty output

- To clone your cohort repository, wait for the session on Git CLI & Remote.

- Now we are going to create 2 folders:
  - session-notebook
  - challenges

### Already have the Spiced Bootcamp folder?

If you followed yesterday's instructions, you should already have an `spiced-bootcamp` folder. Navigate to it.

- Enter the `spiced-bootcamp` folder.

```bash
  cd spiced-bootcamp
```

- Verify that this folder contains both the `cohortName-web-dev` and the `is-token-correct` folder.

```bash
  ls
```

```js
spiced-bootcamp
├── cohortName-web-dev
└── is-token-correct
```

- Next, we are going to create two folders:
  - session-notebook
  - challenges

### session-notebook

This folder is where you will save your class notes. If you want to code along with us, you will do it in this folder.

### challenges

This folder is where you will work on solving the challenges.

## Treasure Hunt

Open **iTerm** and navigate to the folder `challenges` create a **new folder** named `shell-basics`. _Inside_ this folder use the following command to download the challenge files:

> 💡 This command will ask you for permission to download ghcd. This is a tool that we use to
> download challenges from GitHub to your computer. Press <kbd>Enter</kbd> to confirm the download.

```bash
npx ghcd@latest spicedacademy/fs-web-exercises/tree/main/sessions/shell-basics/treasure-hunt
```

Once the download is complete, navigate into the `shell-basics_treasure-hunt` folder using the `cd` command. Now
the real challenge begins.

**Find the lost diamond of the ancient monarch of treasure island!** Navigate through treasure
island only with the terminal and find the treasure.

Use the following commands:

- `cd` to change directories
- `cd ..` to move up one folder
- `ls` to list files the current folder
- `cat <filename>` to see contents of a file
- `pwd` to see your current directory path

Good luck! 💎

## Shell Notes Project

Inside your `shell-basics` folder, create the following file structure (using `mkdir`,
`touch` and `cd`):

```js
shell-notes
├── released
│   └── public
│   │   └── trash.txt
│   ├── announcement1.txt
│   └── announcement2.txt
└── unreleased
    ├── announcement3.txt
    └── private
        ├── notes1.txt
        └── notes2.txt
```

Update the structure to the following (using `mv`, `rm` and `cd`):

```js
shell-notes
├── private
│   ├── notes1.txt
│   └── notes2.txt
└── public
    ├── released
    │   ├── announcement1.txt
    │   └── announcement2.txt
    └── unreleased
        └── announcement3.txt
```

> 💡 If you are using Mac, you could install the command tree `$ brew install tree` and use
> it to see the file structure in the terminal.

> 💡 If you using Linux (WSL), use your package manager to install the tree package. Under Ubuntu you can do this by executing:
> `apt-get install tree`
