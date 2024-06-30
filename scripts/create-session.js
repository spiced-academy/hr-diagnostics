import fs from "fs-extra";
import inquirer from "inquirer";
import slugify from "slugify";
import branchName from "branch-name";
import { titleCase } from "title-case";

const sessionFileNames = [
  "session-name.md",
  "challenges-session-name.md",
  "README.md",
];

(async () => {
  try {
    const currentBranch = await branchName.get();

    // ask user for session name
    const input = await inquirer.prompt([
      {
        type: "input",
        name: "sessionName",
        message: "What is the name of the session?",
        default:
          currentBranch === "main" || !currentBranch
            ? undefined
            : titleCase(currentBranch.replaceAll("-", " "))
                // fix some common terms
                .replace(/Js/g, "JS")
                .replace(/Es\s/g, "ES ")
                .replace(/Css/g, "CSS")
                .replace(/Html/g, "HTML")
                .replace(/Dom/g, "DOM")
                .replace(/Mongodb/g, "MongoDB")
                .replace(/Nextjs/g, "Next.js")
                .replace(/Npm/g, "npm")
                .replace(/Usestate/g, "useState")
                .replace(/Useeffect/g, "useEffect")
                .replace(/Github/g, "GitHub")
                .replace(/Cli/g, "CLI"),
      },
    ]);

    // convert session name to slug
    const slug = slugify(input.sessionName, { lower: true }).replaceAll(
      ".",
      ""
    );

    const sessionPath = `./sessions/${slug}`;

    try {
      // copy the sessions/_template dir to the sessions dir
      await fs.copy("./sessions/_template", sessionPath, {
        overwrite: false,
        errorOnExist: true,
      });
    } catch {
      console.warn("🚨 Session already exists");
      process.exit(1);
    }

    // get the contents of the session files
    const sessionFileContents = await Promise.all(
      sessionFileNames.map((fileName) =>
        fs.readFile(`${sessionPath}/${fileName}`, "utf8")
      )
    );

    // replace the string Session Name and session-name within the session name files
    const sessionFileContentsReplaced = sessionFileContents.map((content) =>
      content
        .replace(/Session Name/g, input.sessionName)
        .replace(/session-name/g, slug)
    );

    // write the session files back to the session dir
    await Promise.all(
      sessionFileNames.map((fileName, index) =>
        fs.writeFile(
          `${sessionPath}/${fileName}`,
          sessionFileContentsReplaced[index]
        )
      )
    );

    // rename the session files to the session name
    await fs.rename(
      `${sessionPath}/session-name.md`,
      `${sessionPath}/${slug}.md`
    );
    await fs.rename(
      `${sessionPath}/challenges-session-name.md`,
      `${sessionPath}/challenges-${slug}.md`
    );
  } catch (error) {
    console.warn("🚨 Error creating session");
    console.error(error);
    process.exit(1);
  }

  console.log("✅ Session created");
  process.exit(0);
})();
