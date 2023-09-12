// modules required
const fs = require('fs');
const inquirer = require('inquirer');

//Linking the pg --> README
const generatePage = require('./utils/generateMarkdown.js');

//Array (questions for user)
const questions = () => {
    