// TODO: Include packages needed for this application

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

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();