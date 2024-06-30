# Git Workflow Workout

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
