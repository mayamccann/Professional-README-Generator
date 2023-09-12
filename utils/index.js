// modules required
const fs = require('fs');
const inquirer = require('inquirer');

//Linking the pg --> README
const generatePage = require('./utils/generateMarkdown.js');

//Array (questions for user), inquirer to prompt questions for users
const questions = () => {
    return inquirer.createPromptModule([
    {
        //GitHub Username
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
        validate: nameInput => {
            if (nameInput) => {
                return true;
            } else {
                console.log('Enter GitHub username.');
                return false;
            }
        }
    },

{
    //Email
    type: 'input',
    name: 'email',
    message: 'What is your email?',
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Enter your email.');
            return false;
        }
    }
},

{
    //Project name
    type: 'input',
    name: 'title',
    message: 'What is your project name?',
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Enter project name.');
            return false;
        }
    }
},
        
{
    //Description of the Project
    type: 'input',
    name: 'description',
    message: 'Description of the project.',
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Enter description of project.');
            return false;
        }
    }
},

{
    //License, choices
    type: 'list', 
    name: 'license',
    message: 'What license will be used for your project?',
    choices: ['MIT', 'GNU'],
    default: ["MIT"],
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
        console.log('Choose a license.');
        return false;
        }
    }
},

{
    //installation
    type: 'input',
    name: 'install',
    message: 'What are the steps to install the project?',
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Enter steps required to install project.');
            return false;
        }
    }
},

{
    //usage
    type: 'input',
    name: 'usage',
    message: 'How do you use the app?',
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Enter usage description.');
            return false;
        }
    }
},

{
    //test
    type: 'input',
    name: 'test',
    message: 'What command should be run to run tests?',
    default: 'npm test'
},

{
    //contributors
    type: 'input',
    name: 'contributors',
    message: 'What does the user need to know about contributing to the repository?'
}
    ]);
};

// Function for writing README file, use of file system
const writeFile = data => {
    fs.writeFile('README.md', data, err => {
        // possibility of an error
    if (err) {
        console.log(err);
        return;
        //once README is created
    } else {
        console.log("The README has been successfully made!")
    }
    })
};

// Function call --> initializing program
questions()
//retrieving user answers
.then(answers => {
    return generatePage(answers);
})
