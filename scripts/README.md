# Daily Workflow Script

## Preparation

1. The instructions below assume you are using `zsh` as your shell. If you're not, please adapt them for the shell you are using.
   1. I highly recommend installing **Oh My Zsh**, which will give you a much better shell experience than the default bash.
2. Please ensure you have your Git set up, and that you have permissions to clone the following repositories:
   1. `fs-new-syllabus`, which contains the hand-outs, and teachers' notes
   2. `fs-web-exercises`, which contains the exercises/challenges.

## Setup

1. Create a directory for Spiced repositories. I suggest `~/Code/spiced`
2. Inside this directory, run the following:

   ```bash
   git clone git@github.com:spicedacademy/fs-new-syllabus.git
   git clone git@github.com:spiced-academy/fs-web-exercises.git
   ```

3. Clone the repository of a cohort you'll be teaching, inside `~/Code/spiced/cohorts`. Eg. you should now find the Honey cohort's repository at `~/Code/spiced/cohorts/honey-web-dev`. (_You can do this step later, but please be sure to place the cohorts' repositories in this directory!_)
4. Next, we'll add some environment variables in your `.zshrc`. The following assumes you used the suggested directory of `~/Code/spiced`. If you used a different directory, please change the code before running it.

   ```bash
   # Change this if you used a different root dir for the repositories
   REPO_ROOT=~/Code/spiced
   # Change this if your shell is not zsh
   SHELL_CONFIG_FILE=~/.zshrc

   echo "export SYLLABUS_DIR=$REPO_ROOT/new-syllabus/fs-new-syllabus" >> $SHELL_CONFIG_FILE
   echo "export WEB_EXERCISES_DIR=$REPO_ROOT/new-syllabus/fs-web-exercises" >> $SHELL_CONFIG_FILE
   echo "export COHORTS_DIR=$REPO_ROOT/cohorts" >> $SHELL_CONFIG_FILE

   echo '[[ -f "$SYLLABUS_DIR/scripts/daily-workflow.sh" ]] && source "$SYLLABUS_DIR/scripts/daily-workflow.sh"' >> $SHELL_CONFIG_FILE
   ```

5. Test this
   1. Restart your terminal program, or run `exec zsh` (zsh only)
   2. Run `echo $SYLLABUS_DIR`. You should see the path to your syllabus directory.
   3. Run `ls $SYLLABUS_DIR`. You should see the list of files in the syllabus directory.
   4. Run `cohort`. You should see a warning message asking for the name of a cohort.
6. If any of these tests failed, please check carefully whether you have followed the instructions correctly, or ask for help if you're still stuck.

## Usage

### Keeping up-to-date

1. Update both the syllabus and the exercises repositories in one easy command: `update_fs_repos`. This takes you back to the directory you were in before you ran the command.

### Add a session to the cohort you will be teaching

1. Update the syllabus and exercises repositories as above.
2. (_Clone the cohort's repository to `~/Code/spiced/cohorts/` if you haven't done this yet_)
3. Go to the directory of the cohort by simply running `cohort <name-of-cohort>`, eg. `cohort honey`.
4. Update the repository, in case there were changes made since you were here: `git switch main && git pull`
5. Find the exact session name:
   1. List all sessions by running `ls_sessions`.
   2. To find the exact name of the session you're looking for, use `grep` to filter out the results. Eg. if you're preparing the session about custom hooks in react, run `ls_sessions | grep -i custom`. You should see the session you want among the results.
6. Now add the session to the cohort's repository! Run `create_fs_session_for_cohort <name-of-session>`, eg. `create_fs_session_for_cohort react-custom-hooks`
7. You should see messages confirming that the teachers' notes, hand-outs, and challenges have been copied over to the repository.
8. Please also note that a new Git branch has been created, named with the name of the session you are adding!

#### Brief Demo: Adding the `react-custom-hooks` session to Honey

```bash
# 1. Update all repos
update_fs_repos
# 2. Go to the honey repo
cohort honey
# 3. Update the code
git switch main && git pull
# 4. Find the exact session name
ls_sessions | grep -i custom
  # See that the session is named `react-custom-hooks`
# 5. Add the session to the repo
create_fs_session_for_cohort react-custom-hooks
# 6. Add, commit, and push
git add .
# CHECK! that no solutions or other extra code were not included!
git status
# All good? Commit & push
git commit -m 'React custom hooks: hand-out & challenges'
git push
```
