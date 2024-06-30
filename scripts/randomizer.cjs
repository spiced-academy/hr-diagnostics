const cohortName = process.argv
  .find((c) => c.includes("--cohort"))
  .split("=")[1];
if (!cohortName) {
  console.warn('Provide a cohort with "--cohort=COHORT_NAME"');
  process.exit();
}

let studentNames;
try {
  studentNames = require(`./cohorts/${cohortName}.json`);
} catch (e) {
  console.warn('Provide a cohort with "--cohort=COHORT_NAME"');
  process.exit();
}

function randomizer(names) {
  const initialLength = names.length;
  const randomizedNames = [];
  for (let i = initialLength; i >= 0; i--) {
    const randomIndex = Math.floor(Math.random() * i);
    const name = names.splice(randomIndex, 1);
    randomizedNames.push(name);
  }
  return randomizedNames;
}

console.log(randomizer(studentNames).join("\n"));
