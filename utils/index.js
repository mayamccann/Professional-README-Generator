// TODO: Include packages needed for this application

const { default: inquirer } = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input

const questions = [

{ 
    type: "input",
    message: "For your application, what is the title?",
    name: "title",
}, 

{ 
    type: "input",
    message: "For your application, what is the background?",
    name: "background",
}, 

{ 
    type: "input",
    message: "For your application, what is the description?",
    name: "description",
}, 

{ 
    type: "input",
    message: "For your application, what is the installation?",
    name: "installation",
}, 

{ 
    type: "input",
    message: "For your application, what is the usage and technologies used?",
    name: "usage",
}, 

{ 
    type: "input",
    message: "For your application, who contributed?",
    name: "contributors",
}, 

{ 
    type: "input",
    message: "For your application, what your github?",
    name: "github",
}, 

];

// TODO: Create a function to write README file

function writeToFile(fileName, data) {}
//fs is for writing the file with fileName, from modules

fs.writeFile(fileName, data, (err) => {
    if (err) {
        console.error(err);
    } else {
    })
}



//is this code even needed? delete?
const fs = require("fs");
console.log("Successful") 

// TODO: Create a function to initialize app

// async function = is async needed?
 async function init() {

inquirer.prompt(questions).then(answers) 
const markdown = generateMarkdown(response);

writeToFile("README.md")
}

// Function call to initialize app
init();