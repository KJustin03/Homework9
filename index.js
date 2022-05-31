// Required Packeges
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// Questions
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'Enter your Github username',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address',
    },
    {
        type: 'input',
        name: 'title',
        message: "Enter your project's name"
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description for the project',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Licensing Options',
        choices: ['APACHE 2.0', 'MIT', 'GPL 3.0', 'BSD3', 'None']
    },
    {
        type: 'input',
        name: 'installation',
        message: "Enter the project's installation instruction",
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repo?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What command should be run to run tests?'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know about contributing to the repo?',
    }
];

//Function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
};

// Function call to initialize app
function init() {
    inquirer.prompt(questions).then(data => {
        console.log(data);
        writeToFile('README.md', generateMarkdown({...data}));
    })
    .catch(err => console.log(err));
};

// Function call to initialize app
init();
