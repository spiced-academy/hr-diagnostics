#!/usr/bin/env bash

# Utility functions for a coach's daily workflow
#
# This script defines three functions which help a lot with some of the
# most tedious actions involved in teaching or preparing for an encounter/
# activity.
#
# - copy_fs_session <name of session> will copy all of the session's files
#   to the right location in the repo of the cohort which you are in.
#
# - copy_fs_challenges <name of session> will copy all of the demos and
#   challenges to the right location in the repo of the cohort which you are
#   in.
#
# - copy_full_session <name of session> will call both of the functions above.
#
# A. PREPARATION
# 1. Copy this file to your `~` directory, naming it `.daily-workflow`.
#    It should now be located at `~/.daily-workflow.sh`
# 2. Open your shell configuration script with a text editor. This file
#    will be `~/.bashrc` if you're using bash, or `~/.zshrc` if you're using
#    zsh.
# 3. Add a line at the end of your shell configuration script as follows:
#        source $HOME/.daily-workflow.sh
#    This will load the daily workflow script into every new terminal
#    window that you open.
# 4. You will need to have cloned both the `fs-new-syllabus` and the
#    `fs-web-exercises` repositories locally. Note their paths for the next
#    step.
# 5. You will also need to set two variables (simplest is to do this in the
#    same file you used in step 1 above), as follows:
#        SYLLABUS_DIR=<PATH OF THE fs-new-syllabus DIRECTORY>
#        WEB_EXERCISES_DIR=<PATH OF THE fs-web-exercises DIRECTORY>
# 6. Restart your terminal sessions
#
# B. Usage
# 1. Change directory to the ROOT of the repo you're working on
# 2. Call the functions you need. For example:
#   $ copy_full_session js-unit-testing
# 3. Examine the output for errors. Common issues could include not
#    following the preparation instructions carefully.
#

check_for_fs_syllabus_dir()
{
    if [ -z "${SYLLABUS_DIR}" ]; then
        echo "Please set variable SYLLABUS_DIR first!"
        return 1
    fi

    if [ ! -d "${SYLLABUS_DIR}" ]; then
        echo "Syllabus directory does not exist! (Given ${SYLLABUS_DIR})"
        return 1
    fi
}

check_for_fs_exercises_dir()
{
    if [ -z "${WEB_EXERCISES_DIR}" ]; then
        echo "Please set variable WEB_EXERCISES_DIR first!"
        return 1
    fi

    if [ ! -d "${WEB_EXERCISES_DIR}" ]; then
        echo "Web exercises directory does not exist! (Given ${WEB_EXERCISES_DIR})"
        return 1
    fi
}

check_for_fs_cohorts_dir()
{
    if [ -z "${COHORTS_DIR}" ]; then
        echo "Please set variable COHORTS_DIR first!"
        return 1
    fi

    if [ ! -d "${COHORTS_DIR}" ]; then
        echo "Cohorts directory does not exist! (Given ${COHORTS_DIR})"
        return 1
    fi
}

check_for_sessions_subdir()
{
    if [ ! -d "./sessions" ]; then
        echo "./sessions subdirectory not found!"
        echo "Are you in the root directory of the cohort's repository?"
        return 1
    fi
}


copy_fs_session()
{
    check_for_fs_syllabus_dir
    if [ "$?" -ne 0 ]; then return 1; fi
    check_for_sessions_subdir
    if [ "$?" -ne 0 ]; then return 1; fi

    if [ "$#" -ne 1 ]; then
        echo "\tUsage: copy_fs_session <session name>"
        echo "\tExample: copy_fs_session js-loops"
        return 1
    fi

    SESSION_NAME=$1

    SESSION_DIR=${SYLLABUS_DIR}/sessions/${SESSION_NAME}
    if [ ! -d "${SESSION_DIR}" ]; then
        echo "Session directory not found at ${SESSION_DIR}!"
        echo "Not adding session files."
        return 1
    fi

    echo Copying session from directory: ${SESSION_DIR}
    cp -r $SESSION_DIR ./sessions/

    echo Adding .gitignore for non-student files
    cat << EOF >> ./sessions/${SESSION_NAME}/.gitignore
README.md
review.md
quiz.md
*solution*
EOF
}

copy_fs_challenges()
{
    check_for_fs_exercises_dir
    if [ "$?" -ne 0 ]; then return 1; fi
    check_for_sessions_subdir
    if [ "$?" -ne 0 ]; then return 1; fi

    if [ "$#" -ne 1 ]; then
        echo "\tUsage: copy_fs_challenges <session name>"
        echo "\tExample: copy_fs_challenges js-loops"
        return 1
    fi

    SESSION_NAME=$1
    EXERCISES_DIR=${WEB_EXERCISES_DIR}/sessions/${SESSION_NAME}

    if [ ! -d "${EXERCISES_DIR}" ]; then
        echo "Exercises directory not found at ${EXERCISES_DIR}!"
        echo "Not adding exercise files."
        return 1
    fi

    echo Copying challenges from directory: ${EXERCISES_DIR}
    cp -r $EXERCISES_DIR ./sessions/${SESSION_NAME}/challenges

    echo Adding .gitignore for everything, in case you try to add it to Git
    echo "*" >> ./sessions/${SESSION_NAME}/challenges/.gitignore    
}

copy_full_session()
{
    if [ "$#" -ne 1 ]; then
        echo "\tUsage: copy_full_session <session name>"
        echo "\tExample: copy_full_session js-loops"
        return 1
    fi

    copy_fs_session $1
    copy_fs_challenges $1
}

# To count them, pipe this output to `wc -l`
ls_sessions()
{
    check_for_fs_syllabus_dir
    if [ "$?" -ne 0 ]; then return 1; fi

    # List all in the sessions directory
    # Filter: only directories
    # Print only the name of the directory
    ls -l ${SYLLABUS_DIR}/sessions/ | grep "^d" | awk '{print $9}'
}

update_fs_repos()
{
    check_for_fs_syllabus_dir
    if [ "$?" -ne 0 ]; then return 1; fi
    check_for_fs_exercises_dir
    if [ "$?" -ne 0 ]; then return 1; fi

    START_DIR=`pwd`
    echo "\nUpdating syllabus repo at ${SYLLABUS_DIR}"
    cd ${SYLLABUS_DIR} && git switch main && git pull origin main

    echo "\nUpdating syllabus repo at ${SYLLABUS_DIR}"
    cd ${WEB_EXERCISES_DIR} && git switch main && git pull origin main

    echo "\nDone"
    cd ${START_DIR}
}

create_fs_session_for_cohort()
{
    if [ "$#" -ne 1 ]; then
        echo "\tUsage: create_fs_session_for_cohort <session name>"
        echo "\t Example: create_fs_session_for_cohort js-loops"
        return 1
    fi

    SESSION=$1 && echo $SESSION && git switch -c $SESSION && copy_full_session $SESSION
}

cohort()
{
    check_for_fs_cohorts_dir
    if [ "$?" -ne 0 ]; then return 1; fi

    if [ "$#" -ne 1 ]; then
        echo "\tUsage: cohort <name of cohort>"
        echo "\tExample: cohort celery"
        return 1
    fi
    
    COHORT=$1
    
    GIVEN_COHORT_DIR="${COHORTS_DIR}/${COHORT}"
    if [ -d "$GIVEN_COHORT_DIR" ]; then
        cd ${GIVEN_COHORT_DIR}
        return 0
    fi

    GIVEN_COHORT_DIR="${COHORTS_DIR}/${COHORT}-web-dev"
    if [ -d $GIVEN_COHORT_DIR ]; then
        cd ${GIVEN_COHORT_DIR}
        return 0
    fi

    echo "Couldn't find directory for cohort ${COHORT}! Please check ${COHORTS_DIR}."
    echo "Accepted names are, eg. 'chicory' or 'chicory-web-dev'"
    return 1
}
