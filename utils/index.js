// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown.js')
const inquirer = require('inquirer');
const fs = require('fs')
// TODO: Create an array of questions for user input
const questions = [
{
    type: 'input',
    message: 'What is the title for the project?',
    name: 'title',
},

{ 
    type: 'input',
    message: 'What is the background and description for the project?',
    name: 'description',
},

{
    type: 'input',
    message: 'What is the user story of the project?',
    name: 'userstory',
},

{
    type: 'input',
    message: 'What is the acceptance criteria of the project?',
    name: 'acceptancecriteria',
},

{ 
    type: 'input',
    message: 'What is the installation of the project?',
    name: 'installation',
    
},

{
    type: 'input',
    message: 'What is the usage of the project?',
    name: 'usage'
},

{
    type: 'input',
    message: 'What is the user story of the project?',
    name: 'userstory',
},

{
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'githubusername',
},

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
