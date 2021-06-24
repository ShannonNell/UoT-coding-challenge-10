const inquirer = require('inquirer');
// const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
// require generateHTML
// require writeFile

function Team() {
    this.manager;
    this.engineer;
    this.intern;
};

//getManagerInfo inquirer
Team.prototype.getManagerInfo = function () {
    inquirer.prompt([
        { //manager name
            type: 'input',
            name: 'name',
            message: "Welcome to the Team Profile Generator. What is your team manager's name?",
        },
        { //manager ID
            type: 'input',
            name: 'id',
            message: "What is your team manager's employee ID number?",
        },
        { //manager email
            type: 'input',
            name: 'email',
            message: "What is your team manager's email?",
        },
        { //manager office number
            type: 'input',
            name: 'officeNum',
            message: "What is your team manager's office phone number?",
        },
    ])
        .then(({ name, id, email, officeNum }) => {
            this.manager = new Manager(name);
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
                console.log("I'm finished building my team");
                //write data to file or return false?
            }
        })
};


//getEngineerInfo inquirer
Team.prototype.getEngineerInfo = function () {
    console.log("I'm an engineer");
}

//getInternInfo inquirer
Team.prototype.getInternInfo = function () {
    console.log("I'm an intern!");
}

//choices to add another team member inquirer


//start with getManagerInfo


// module.exports = Team;
new Team().getManagerInfo();



//TODO:
//validation
//ID number organized
//move team to own js file in lib?
//phone number validation as 111-111-1111 || 1111111111 \\ 111 111 1111
