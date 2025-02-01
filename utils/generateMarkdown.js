// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { //function is for the badge at the top of the README
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  } else if (license === 'Apache') {
    return `![GitHub license](https://img.shields.io/badge/license-Apache-blue.svg)`; //this is the badge for the Apache license
  } else if (license === 'MIT') {
    return `![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)`; //this is the badge for the MIT license
  } else if (license === 'GPL') {
    return `![GitHub license](https://img.shields.io/badge/license-GPL-blue.svg)`; //this is the badge for the GPL license
  } else if (license === 'BSD') {
    return `![GitHub license](https://img.shields.io/badge/license-BSD-blue.svg)`; //this is the badge for the BSD license
  } else {
    return '';
  }
}


function renderLicenseLink(license) { //function is for the link at the bottom of the README
  if (license === 'Apache') {
    return `![GitHub license](https://img.shields.io/badge/license-Apache-blue.svg)` ; //this is the link for the Apache license
  }
  if (license === 'MIT') {
    return `![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)`; //this is the link for the MIT license
  }
  if (license === 'GPL') {
    return `![GitHub license](https://img.shields.io/badge/license-GPL-blue.svg)`; //this is the link for the GPL license
  }
  if (license === 'BSD') {
    return `![GitHub license](https://img.shields.io/badge/license-BSD-blue.svg)`; //this is the link for the BSD license
  }
  if (license === 'None') {
    return ''; //this is the link for no license
  }
}

function renderLicenseSection(license) {
  if (license === 'None') {
    return ''; //this is the section for no license
  } else if (license === 'Apache') {
    return `## License
    This project is licensed under the ${license} license.`; //this is the section for the Apache license
  } else if (license === 'MIT') {  
    return `## License
    This project is licensed under the ${license} license.`; //this is the section for the MIT license
  } else if (license === 'GPL') {  
    return `## License
    This project is licensed under the ${license} license.`; //this is the section for the GPL license
  } else if (license === 'BSD') { 
    return `## License
    This project is licensed under the ${license} license.`; //this is the section for the BSD license
  }
return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
${renderLicenseSection(data.license)}
`;
}

export default generateMarkdown;
