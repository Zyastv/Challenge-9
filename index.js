const inquirer = require('inquirer')
const { writeFile } = require('fs').promises;


const promptUser = () => {
return inquirer.prompt([
  {
    message: 'Title of project: ',
    type: 'input',
    name: 'title'
  },
  {
    message: 'Description of project: ',
    type: 'input',
    name: 'description'
  },
  {
    message: 'Installation instructions for project: ',
    type: 'input',
    name: 'installation'
  },
  {
    message: 'Usage instructions for project: ',
    type: 'input',
    name: 'usage'
  },
  {
    message: 'License for project: ',
    type: 'list',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    name: 'license'
  },
  {
    message: 'Contributing guidelines for project: ',
    type: 'input',
    name: 'contributing'
  },
  {
    message: 'Testing guidelines for project: ',
    type: 'input',
    name: 'testing'
  },
  {
    message: 'Github username: ',
    type: 'input',
    name: 'username'
  },
  {
    message: 'Email: ',
    type: 'input',
    name: 'email'
  },
])
};

const generateReadME = ({ license, title, description, installation, usage, contributing, username, email }) => `
  <img src='https://img.shields.io/badge/${license}-blue.svg'>
  \n
  # ${title}
  \n
  ## ${description}
  \n
  <details open="open">
  <summary>Table of Contents</summary>
  <ol>
  <li><a href="#installation">Installation</a></li>
  <li><a href="#Usage">Usage</a></li>
  <li><a href="#contributing">Contributing</a></li>
  <li><a href="#Testing">Testing</a></li>
  <li><a href="#questions">Questions</a></li>
  </ol>
  </details>
  \n
  <h3 id='installation'>Installation</h3>
  <p>${installation}</p>
  \n
  <h3 id='usage'>Usage</h3>
  <p>${usage}</p>
  \n
  <h3 id='contributing'>Contributing</h3>
  <p>${contributing}</p>
  \n
  <h3 id='questions'>Questions</h3>
  <p>${username}\n${email}</p>
  `;


const init = () => {
  promptUser()
    .then((answers) => writeFile('README.md', generateReadME(answers)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
};


init();
