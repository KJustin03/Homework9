//  Fucntion that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
    if (license !== 'None') {
      return `![GitHub license](https://img.shields.io/badge/license-${license.split(' ')}-blue.svg)`;
    }
    return '';
  };

// Function that returns the license link
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `\n* [License](#license)\n`;
  };
  return '';
};

//  Function that returns the license section of README
function renderLicenseSection(license) {
  if (!license) {
    return '';
  } else {
    return `## Licenses 
    This project is licensed under the ${license} license.`;
  };
};

//  Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
    
${renderLicenseBadge(data.license)}

## Table of Contents

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
${renderLicenseLink(data.license)}
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
    
## Description
    
${data.description}

## Installation
\`\`\`   
${data.installation}
\`\`\`
## Usage
    
${data.usage}
    
${renderLicenseSection(data.license)}
    
## Contributing
    
${data.contributing}

## Tests

${data.tests}

## Questions
Do you have questions about this project? Contact me directly thru my Github and email that are listed below
Github: https://github.com/${data.github}
Email: ${data.email}
`;
};

module.exports = generateMarkdown;
