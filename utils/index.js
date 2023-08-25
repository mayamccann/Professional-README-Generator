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
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('/dist/generated-README.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve ({
                ok: true,
                message: 'File made'
        });
    });
});
};

// TODO: Create a function to initialize app
const init = () => {

   return inquirer.prompt(questions)
    .then (readmeData => {
      return readmeData;
    })
}

// Function call to initialize app
init();

.then(readmeData => {
    console.log(readmeData);
    return generateMarkdown(readmeData);
})

.then(pageMD => {
    return writeFile(pageMD);
})

.then(writeFileResponse => {
    console.log(writeFileResponse.message);
})

.catch(err => {
    console.log(err);
})