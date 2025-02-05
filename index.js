// TODO: Include packages needed for this application
import inquirer from 'inquirer'; //import inquirer package
import fs from 'fs';  //import fs package

import generateMarkdown from "./utils/generateMarkdown.js"

// TODO: Create an array of questions for user input
const questions = [];  //array of questions for user input, empty for now

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


.then((answers) => {  //then function to generate the README file
    const readMe = generateMarkdown(answers);
    writeToFile('README.md', readMe);
});
// TODO: Create a function to write README file
function writeToFile(fileName, data) {  //function to write the README file
    fs.writeFile(fileName, data, (err) => 
        err ? console.log(err) : console.log('Successfully created ReadMe file!')
    );
}

// TODO: Create a function to initialize app
function init() {} //function to initialize app

// Function call to initialize app
init(); //function call to initialize app
