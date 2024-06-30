# How to Capstone

---

These two messages should be posted on Slack for `Introduction to Capstone Project`

Also send a link to the [Capstone Project Template](https://github.com/neuefische/capstone-next-template)

---

## Daily schedule

09:30 Check-in with Daily Standup (with coach) in the classroom
From week 2, the Public Sprint Review always takes place on Mondays at 2 p.m
Attendance from 9:00 a.m. to 6:00 p.m. is still mandatory
:schreibende_hand: Sprint preparation & user story #user-stories
Write a user story and store it in the backlog/sprint backlog
Post link to user story in channel #user-stories
Check user stories, so everyone progresses faster and you don't have "idle time"
Post Reactions:
in review :eyes:
changes requested :starkes_häkchen:
approved :weißes_häkchen:
Coaches Veto :nach_oben_zeigen: - coaches only
For changes, repost the user story to #user-stories
:computer: Edit User Story
Drag User Story to the In Progress column on the board
Switch to the main branch and run git pull
Create a new branch for the next feature
Code and make as many small commits as possible
Process tasks from the user story
Check acceptance criteria from the user story
:mikroskop: PR & code reviews #code-reviews
Create a pull request
Pay attention to a meaningful PR title
likes to link the corresponding issue from the board
Do not add collaborators/assignees/reviewers or write to people directly
Post the link to the PR in the Slack channel #code-reviews
Check PR and do code reviews, so you don't have "idle time"
Post Reactions:
in review :eyes:
changes requested :starkes_häkchen:
approved :weißes_häkchen:
Coaches Veto :nach_oben_zeigen: - coaches only
If you had to make changes, repost them in #code-reviews
The merge may only be carried out after the QA! Exception: for a PR where a QA does not make sense, e.g. code refactoring.
Reviews are always processed according to the order in the channel
:büste_silhouette: QA #quality-assurance
After the code review, post the link to the app (Vercel) in the Slack channel #quality-assurance
Describes what to look out for or what is new
Drag the user story to the Quality Assurance / QA column in the board
Post Reactions:
in review :eyes:
changes requested :starkes_häkchen:
approved :weißes_häkchen:
Coaches Veto :nach_oben_zeigen: - coaches only
Write feedback this time in the thread for the respective post
Reviews are always processed according to the order in the channel
In the event of changes, the pull request goes through the “stations” #code-reviews and #quality-assurance again
The merge may only be executed AFTER Quality Assurance! Exception: in the case of a pull request where quality assurance does not make sense, e.g. code refactoring.
Approved?! Then slide it into the Done column of the board
:pfeile_gegen_uhrzeigersinn: After Quality Assurance Approval
When Quality Assurance has been approved, the pull request can be merged
Then start with the next user story, the next feature
:fragezeichen: Questions?
Read the documentation or google it.
Ask other students in the class.
Others have probably had similar questions and problems
Ask a question on Slack
Should always be included:
Link to affected branch/file/line
Explanation of what you have already tried
Error message (please as text, no screenshot!)
:hände_als_herz: Teamwork makes the dream work: Teamwork is part of the Help each other capstone, watch out for the Slack Channel. Does user story reviews, code reviews, QAs and answers questions.

## Workflow

How to Review a PR:
Mark the PR to be reviewed with :eyes:.
Click on the Commits tab to get a rough overview of what the review should focus on (think meaningful commit messages to make your reviewers life easier)
Click on the files changed tab and review the changes in the code.
on the right side of your screen you can check off the files that you have already reviewed, this is only for your own overview
if you hover over a line that you want to change, a blue plus will appear on the line, you click or drag it over all lines that you want to comment on
if you want to make a specific improvement suggestion, click on Add a suggestion within the comment field, to the right of the Preview tab, or use the shortcut Cmd + g
Pay particular attention to:
Correct, semantic structure of the code
Accessible code
For example, are variables and functions named meaningfully? As an outsider, can you understand the code well? If not, what can be the reason?
No redundant code, no empty components, no redundant comments (and later console.logs)
Are HTML elements used correctly? (e.g. do not use links in buttons -> feel free to use tools like caninclude)
If the complexity of the code requires it, you must or can clone the repository on your own computer. Comments must still be made in GitHub.
Once you're done with the review, click the green Review changes button in the top right. Write a summary message for the author of the code. Choose to comment, approve, or request changes to the PR.
If you approved the PR, swap the eye emoji with :weißes_häkchen:
If you requested changes in PR, swap the eye emoji with :starkes_häkchen:.
As soon as the author of the code has implemented the proposed changes, you can replace the black checkmark with the :weißes_häkchen:.
Every PR should get a :weißes_häkchen: before the branch is merged. Have fun!! :erhobene_hände::hautton-4:
:nach_oben_zeigen: Minimum requirements
Git
Use of different branches (no direct commits on main!)
Branches have the same name as the features/user story
Descriptive commit messages (why, not what)
Every GitHub pull request goes into a code review (Brief description of what this feature is about. The more info the better, e.g. lines of code you want to draw attention to)
A merge only takes place after an approved pull request!!
You review foreign code from other course participants (e.g. while waiting for a review yourself)
project setup
You stick to the Capstone workflow (Kanban board)
Before the start of each sprint, you write a sufficient number of user stories
Branches and PRs relate to a user story that has been defined in advance
You use React or NextJS as web framework (see Tech Stack for more info)
Architecture and Craftship
Functionality (does the app start, build and work?)
Mobile-first design
Clear subdivision of pages, components, hooks / functions in general (e.g. outsourcing to a meaningful folder / file structure)
You understand your code thoroughly and can explain almost every line of the project (e.g.: when and how does the state change within your app, how does a request go through the system, external code e.g. from StackOverflow does not have to be able to be explained in detail )
clean code
Code readability (Prettier formatting)
Good naming of variables, functions and components
Compliance with conventions (e.g.: upper and lower case, linting rules)
DRY principle – don't repeat yourself
technology stack
You use React or NextJS as web framework
The app contains several components
Deploy to Vercel
You have written at least 3 component tests and, if available, 2 utility function tests
