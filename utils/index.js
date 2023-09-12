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


        


