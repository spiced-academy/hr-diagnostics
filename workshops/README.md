# Create Presentation for Lectures

## Folder Structure

The `workshops` folder contains one folder for each session.

## How to start a presentation in your browser

- Open the terminal and `cd` to the root of this `web-curriculum` repository.
- Run `npm run start` to start the slides.
- Open your browser on `localhost:8080`: you'll see an overview about all folders in this repository.
- Navigate to `workshops`
- Click the session you want to see the slides for; you will be redirected to `localhost:8080/extra-sessions/[session-name]`.
- You are done: start the session! 🚀

## How to create a new session

- Go to `workshops/_example-session`.
- Copy the `_example-session` folder and paste it into `workshops/`.
- Rename the folder you just pasted to the session name.
- Open `workshops/[your_new_session]/index.md`: it contains examples for all possible slides.
  - To see them in action, run `npm run start` and open `localhost:8080/example-session`
  - Alternatively, you can also open the overview page and click the link to "Example Extra Session".
- Create your slides in `[your_new_session]/index.md`.
- If you have assets for your session, place them in the `[your_new_session]/assets` folder.

🎉 Congratulations to your new presentation!
