// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "None"){
    return "";
  } else if (license === "MIT"){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`;
    // [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  }
  else if (license === "APACHE 2.0"){
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]`;
    // [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
  }
  else if (license === "GPL 3.0"){
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`
    // [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
  }
  else if (license === "BSD 3"){
    return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]`
    // [![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "None"){
    return "";
  } else if (license === "MIT"){
    return renderLicenseBadge(license) + `(https://opensource.org/licenses/MIT)`
  }
  else if (license === "APACHE 2.0"){
    return renderLicenseBadge(license) + `(https://opensource.org/licenses/Apache-2.0)`
  }
  else if (license === "GPL 3.0"){
    return renderLicenseBadge(license) + `(https://www.gnu.org/licenses/gpl-3.0)`
  }
  else if (license === "BSD 3"){
    return renderLicenseBadge(license) + `(https://opensource.org/licenses/BSD-3-Clause)`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None"){
    return "";
  } else {
    return `## License
  ${renderLicenseLink(license)}`;
    // Showing up as box 
  }
}

function renderDeployedLinkSection(data) {
  if (data.confirmDeployed && data.deployedLink){
    return `Link for the deployed application: [${data.title}](${data.deployedLink})`;;
  } else {
    return '';
    // Showing up as box 
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  //if (data.license != "None" && )
  return `# ${data.title}

  ## Description 

  ${data.description}

  ${renderDeployedLinkSection(data)}

  ## Table of Contents 

  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)


  ## Installation

  In order to install this project on your own system you would need to enter the following in your command line: ${data.dependencies}


  ## Usage 

  ${data.userNeedToKnow}

  ## Tests

  You can test this project after you have installed it by running the following in the command line: ${data.tests}

  ## Credits

  Github: [${data.github}](https://github.com/${data.github})
  Email:  ${data.email}

  ${renderLicenseSection(data.license)}

  ---

  ## Badges

  ![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)


  ## Contributing

  ${data.userContributingInfo}.
  See the [Contributor Covenant](https://www.contributor-covenant.org/) for more information on how you can contribute. 

`;
}

module.exports = generateMarkdown;
