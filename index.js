// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

const generateReadMe = (answers) =>
`# ${answers.title}
${answers.description}
## Installation
${answers.installation}
## Usage
${answers.usage}
## Contribution
${answers.contribution}
## Tests
${answers.test}
## License
This project is licensed under the ${answers.license} license.
## Questions
If you have any questions, please contact me at [${answers.email}](mailto:${answers.email}). You can also find more of my work at [${answers.github}](https://github.com/${answers.github}).
`;
// TODO: Create an array of questions for user input
const questions = [];
inquirer
.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please provide contribution guidelines',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please provide test instructions',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license',
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
])
.then((answers) => {
    const readMe = generateReadMe(answers);
    writeToFile('README.md', readMe);
});
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
        err ? console.log(err) : console.log('Successfully created ReadMe file!')
    );
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
