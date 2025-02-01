// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  //function is for the badge at the top of the README
  if(license === "None") {
    return ''
  } else {
    return `![badge](https://img.shields.io/badge/LICENSE-${license}-yellow)`;
  }
}

function renderLicenseLink(license) {
  //function is for the link at the bottom of the README
  if(license === "None") {
    return ''
  } else if (license === "MIT") {
    return `[MIT](https://opensource.org/licenses/MIT)`
  } else if (license === "Apache") {
    return `[Apache](https://opensource.org/licenses/Apache-2.0)`
  } else if (license === "GPL") {
    return `[GPL](https://opensource.org/licenses/GPL-3.0)`
  } else if (license === "BSD") {
    return `[BSD](https://opensource.org/licenses/BSD-3-Clause)`
  }

}

function renderLicenseSection(license) {
  if(license === "None") {
    return ''
  } else {
  return `
## License
This project is licensed under the ${license} license.
For more details, click on this link: ${renderLicenseLink(license)}
  `
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
return `
${renderLicenseBadge(answers.license)}
# ${answers.title}
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation
${answers.installation}
## Usage
${answers.usage}
## Contribution
${answers.contribution}
## Tests
${answers.test}
${renderLicenseSection(answers.license)}
## Questions
If you have any questions, please contact me at [${answers.email}](mailto:${answers.email}). You can also find more of my work at [${answers.github}](https://github.com/${answers.github}).
`;
}

export default generateMarkdown;
