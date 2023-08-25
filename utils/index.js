// TODO: Include packages needed for this application

const generateMarkdown = require('./utils/generateMarkdown.js');
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
{
    type: 'input',
    message: 'What is the title for the project?',
    name: 'title',
    validate: titleInput => {
        if (titleInput) {
            return true;
} else {
    console.log('Enter the title.');
    return false;
}
    }
},

{ 
    type: 'input',
    message: 'What is the background and description for the project?',
    name: 'description',
    validate: descriptionInput => {
        if (descriptionInput) {
            return true;
} else {
    console.log('Describe the background and description of your project.');
    return false;
}
    }
},

{
    type: 'input',
    message: 'What is your project and the purpose of it?',
    name: 'purpose',
    validate: purposeInput => {
        if (purposeInput) {
            return true;
        } else {
            console.log('Enter what your project is and the purpose.');
            return false;
        }
    }
}, 

{
    type: 'input',
    message: 'What is the user story of the project?',
    name: 'userstory',
    validate: userstoryInput => {
        if (userstoryInputInput) {
            return true;
        } else {
            console.log('Enter the User Story.');
            return false;
        }
    }
},

{
    type: 'input',
    message: 'What is the acceptance criteria of the project?',
    name: 'acceptancecriteria',
    validate: acceptancecriteriaInput => {
        if (acceptancecriteriaInput) {
            return true;
        } else {
            console.log('Enter the acceptance criteria.');
            return false;
        }
    }
},

{ 
    type: 'input',
    message: 'What is the installation of the project?',
    name: 'installation',
    validate: installInput => {
        if (installInput) {
            return true;
        } else {
            console.log('Enter your installation of the project.');
            return false;
        }
    }
},

{
    type: 'input',
    message: 'What is the usage of the project?',
    name: 'usage',
    validate: usageInput => {
        if (usageInput) {
            return true;
        } else {
            console.log('Enter your use instructions.');
            return false;
        }
    }
},

{
    type: 'input',
    message: 'What is the user story of the project?',
    name: 'userstory',
},

{
    type: 'input',
    message: 'What is your email?',
    name: 'email',
    validate: githubInput => {
        if (githubInput) {
            return true;
        } else {
            console.log('Enter your email.');
            return false;
        }
    }
}, 

{
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'githubusername',
    validate: githubInput => {
        if (githubInput) {
            return true;
        } else {
            console.log('Enter your GitHub username.');
            return false;
        }
    }
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