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