// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown'); 
const fs = require('fs');

// TODO: Create an array of questions for user input

const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username? (Required)',
        validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
            console.log('Please enter your github username!');
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address? (Required)',
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('Please enter your email address!');
            return false;
          }
        }
    },
    {
      type: 'input',
      name: 'title',
      message: 'What is the name of your project? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your project name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter your project description (Required)',
      validate: descriptionInput => {
        if (descriptionInput) {
          return true;
        } else {
          console.log('Please enter your project description!');
          return false;
        }
      }
    },
    {
      type: 'confirm',
      name: 'confirmDeployed',
      message: 'Is your project deployed either on Github or somewhere else?',
      default: true
    },
    {
      type: 'input',
      name: 'deployedLink',
      message: 'Provide the link for the deployed project:',
      when: ({ confirmDeployed }) => confirmDeployed
    },
    {
      type: 'list',
      name: 'license',
      message: 'What type of license should your project have?',
      choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
    {
      type: 'input',
      name: 'dependencies',
      message: 'What command should be run to install dependencies?',
      default: "npm i"
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What command should be run to run tests?',
        default: "node test"        
    },
    {
        type: 'input',
        name: 'userNeedToKnow',
        message: 'What information does the user need to know about the repo?',
    },
    {
        type: 'input',
        name: 'userContributingInfo',
        message: 'What information does the user need to know about contributing to the repo?',
    }
  ];


//   const answers = {
//         github: "EastonShaum",
    
    
//         email: "EastonShaum@gmail.com"
//     ,
    
//         title: "JoinCoin"
//     ,
    
//         description: "Display cryptocurrencies"
//     ,
    
//         confirmDeployed: true
//     ,

//         deployedLink: 'https://eastonshaum.github.io/Join-Coin/'
//     ,

//         license: 'MIT'
//     ,
    
//         dependencies: "npm i"
//     ,
    
//         tests: 'node test'
//     ,
    
//         userNeedToKnow: 'nothing'
//     ,
    
//         userContributingInfo: 'nada'
    
// };

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log("Writing file...")

    let filePath = './' + fileName + '.md'

    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, data, err => {
        if (err) {
          reject(err);
          return;
        }
            resolve({
              ok: true,
              message: 'File created!'
            });
        });        
    });
    
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
       console.log(answers)
        let fileName = answers.title;
        let data = generateMarkdown(answers);
        console.log(data)
        
        writeToFile(fileName, data);
        
    });
};

// Function call to initialize app
init();
