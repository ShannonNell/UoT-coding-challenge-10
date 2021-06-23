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
            //this.buildTeam(); //this function needs to be created/adjusted still
        })
};

//getEngineerInfo inquirer

//getInternInfo inquirer

//choices to add another team member inquirer

//start with getManagerInfo


module.exports = Team;



//TODO:
//validation
//ID number organized
