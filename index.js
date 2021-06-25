const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./src/page-template');
const {writeFile, copyFile} = require('./utils/generateSite');

function Team() {
    this.manager;
    this.engineer;
    this.intern;
};

let teamArray = [];

//getManagerInfo inquirer
Team.prototype.getManagerInfo = function () {
    inquirer.prompt([
        { //manager name
            type: 'input',
            name: 'name',
            message: "Welcome to the Team Profile Generator. What is the team manager's name?",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log("Please enter your manager's name!"); 
                    return false;
                }
            }
        },
        { //manager email
            type: 'input',
            name: 'email',
            message: "What is the team manager's email?",
            validate: emailInput => {
                if(emailInput) {
                    return true;
                } else {
                    console.log("Please enter your manager's email!"); 
                    return false;
                }
            }
        },
        { //manager office number
            type: 'input',
            name: 'officeNum',
            message: "What is the team manager's office number?",
            validate: officeNumInput => {
                if(officeNumInput) {
                    return true;
                } else {
                    console.log("Please enter your manager's office number!"); 
                    return false;
                }
            }
        },
    ])
        .then(({ name, email, officeNum }) => {
            this.manager = new Manager(
                name,
                email,
                officeNum
            );
            teamArray.push(this.manager);
            // console.log(teamArray);
            this.buildTeam();
        })
};

//build the team inquirer
Team.prototype.buildTeam = function () {
    inquirer.prompt([
        { //what team member to add
            type: 'list',
            name: 'buildTeam',
            message: 'What would you like to do next?',
            choices: ["Add an engineer", "Add an intern", "I'm finished building my team."]
        }
    ])
        .then(({ buildTeam }) => {
            if (buildTeam === 'Add an engineer') {
                this.getEngineerInfo();
            }
            if (buildTeam === 'Add an intern') {
                this.getInternInfo();
            }
            if (buildTeam === "I'm finished building my team.") {
                // console.log("I'm finished building my team");
                //write the html
                writeFile(generateHTML(teamArray));
                //copy css file
                copyFile();
            }
        })
};


//getEngineerInfo inquirer
Team.prototype.getEngineerInfo = function () {
    // console.log("I'm an engineer");
    inquirer.prompt([
        { //engineer name
            type: 'input',
            name: 'name',
            message: "What is the engineer's name?",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log("Please enter your engineer's name!"); 
                    return false;
                }
            }
        },
        { //engineer email
            type: 'input',
            name: 'email',
            message: "What is the engineer's email?",
            validate: emailInput => {
                if(emailInput) {
                    return true;
                } else {
                    console.log("Please enter your engineer's email!"); 
                    return false;
                }
            }
        },
        { //engineer office number
            type: 'input',
            name: 'gitHub',
            message: "What is the engineer's GitHub username?",
            validate: gitHubInput => {
                if(gitHubInput) {
                    return true;
                } else {
                    console.log("Please enter your engineer's gitHub username!"); 
                    return false;
                }
            }
        },
    ])
        .then(({ name, email, gitHub }) => {
            this.engineer = new Engineer(
                name,
                email,
                gitHub
            );
            teamArray.push(this.engineer);
            // console.log(teamArray);
            this.buildTeam();
        })
}

//getInternInfo inquirer
Team.prototype.getInternInfo = function () {
    // console.log("I'm an intern!");
    inquirer.prompt([
        { //intern name
            type: 'input',
            name: 'name',
            message: "What is the intern's name?",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log("Please enter your intern's name!"); 
                    return false;
                }
            }
        },
        { //intern email
            type: 'input',
            name: 'email',
            message: "What is the intern's email?",
            validate: emailInput => {
                if(emailInput) {
                    return true;
                } else {
                    console.log("Please enter your intern's email!"); 
                    return false;
                }
            }
        },
        { //intern office number
            type: 'input',
            name: 'school',
            message: "What school does the intern attend?",
            validate: schoolInput => {
                if(schoolInput) {
                    return true;
                } else {
                    console.log("Please enter your intern's school!"); 
                    return false;
                }
            }
        },
    ])
        .then(({ name, email, school }) => { 
            this.intern = new Intern(
                name,
                email,
                school
            );
            teamArray.push(this.intern);
            // console.log(teamArray);
            this.buildTeam();
        })
}

new Team().getManagerInfo();



