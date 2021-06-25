# Challenge 10 OOP: Team Profile Generator

## Description
A Node.js command-line app that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person. Team employees include Manager, Engineer, and Intern.

Done as a challenge for UoT's Coding Bootcamp.
___

## Talbe of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Links](#links)
* [Features](#features)
* [Tests](#tests)
* [Tools](#tools)
* [Credits](#credits)
* [License](#license)
* [Challenge Guidelines](#challenge-guidelines)
___

## Installation
Once you've cloned the repo, ensure Node.js is installed on your computer. Then you will need to install the required packages: inquirer, fs, and jest (should you wish to run the tests yourself). To install them, simply type `npm install <required-package>`. If installing jest, it is recommended to use `npm install --save-dev jest` as it is not required for deployment.
___

## Usage
Use this application for building a roster for your team!

Application invoked by using: `node index.js`

![screenshotHere](/assets/images/ch10_screenshot.png))
___

## Links
### Walkthrough of app:
* [Video Walkthrough](https://drive.google.com/file/d/1K4szPknmiHZKZab4pf5CJsW2NB0gAeMz/view)
___

## Features
The finished HTML and CSS files will be in the "dist" directory when the prompt is completed.
___

## Tests
The Employee class (which other classes are extended from), Manager, Engineer, and Intern each have their own tests. You can run the tests by running `npm test` in the command line, which will run tests for all. If you want to run a specific test, run `npm test <testing.js>` where <testing.js> is replaced with the file name you wish to test. All files to be tested are located in the "lib" directory.
___

## Tools
* JavaScript
* node.js
* Jest
* Inquirer 
* fs
* Bootstrap
* FontAwesome
___

## Credits
* Completed by: [Nell-GitHub](https://github.com/ShannonNell)
___

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[MIT License](https://choosealicense.com/licenses/mit/)    
___

## Challenge Guidelines
### User Story
```
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

### Criteria: 
```
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```