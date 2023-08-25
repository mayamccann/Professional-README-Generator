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
let outPutDirectory = "dist"
if (!fs.existsSync(outPutDirectory)) {
    fs.mkdirSync(outPutDirectory);
}
fs.writeFile('${outPutDirectory}/S{fileName}', generateMarkdown(data), 'utf8', (err) => {
if (err) {
    console.error('Error writing file:', err);
} else {
    console.log('README successfuly made!');
}
});
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        writeToFile("README.md", data)
    })
}

// Function call to initialize app
init();

.then(readmeData) =. {
    console.log(readmeData);
    return generateMarkdown(readmeData);
})
