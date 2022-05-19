
<h1 align='center'>Let's Go Team</h1>

![license](https://img.shields.io/badge/license-MIT-informational)

## Table of Contents
  - [Description](#description)
  - [Installation](#install)
  - [Utility](#utility)
  - [License](#license)
  - [Contributers](#contributers)
  - [Tests](#tests)
  - [Questions](#questions)

## Description
A node.js application which captures user input from inquirer to generate an index.html file displaying various members of a work team. The gengerated index.html file is created within the dist directory. 

## Video Link to Application
  [![Watch the video](./src/Screenshot%202022-05-19%20165024.png)](https://drive.google.com/file/d/1xgwh5RY-LtuQZBoTrWl7vEnGuh56aBcV/view)

## User Story
- AS A manager
- I WANT to generate a webpage that displays my team's basic info
- SO THAT I have quick access to their emails and GitHub profiles

## Acceptance Criteria 
- GIVEN a command-line application that accepts user input
- WHEN I am prompted for my team members and their information
- THEN an HTML file is generated that displays a nicely formatted team roster based on user input
- WHEN I click on an email address in the HTML
- THEN my default email program opens and populates the TO field of the email with the address
- WHEN I click on the GitHub username
- THEN that GitHub profile opens in a new tab
- WHEN I start the application
- THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
- WHEN I enter the team manager’s name, employee ID, email address, and office number
- THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
- WHEN I select the engineer option
- THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
- WHEN I select the intern option
- THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
- WHEN I decide to finish building my team
- THEN I exit the application, and the HTML is generated

## Installation
  - npm init
  - npm install inquirer
  - npm install jest --save-dev
  - npm install email-validator

## License
![license](https://img.shields.io/badge/license-MIT-informational)
<br />
Covered under the MIT license.

## Contributers
  Rob Kreuser

## Tests
  Testing is performed with the Jest npm package on four Classes: Manager, Engineer, Intern, and Employee

## Questions
  Please reach out to me for any questions or concerns:

View my GitHub Profile: [MNlegion](https://github.com/MNlegion)

Contact me: rkreuser30@gmail.com
