const inquirer = require('inquirer');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');

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
            message: "Welcome to the Team Profile Generator. What is the team manager's name?",
        },
        { //manager ID
            type: 'input',
            name: 'id',
            message: "What is the team manager's employee ID number?",
        },
        { //manager email
            type: 'input',
            name: 'email',
            message: "What is the team manager's email?",
        },
        { //manager office number
            type: 'input',
            name: 'officeNum',
            message: "What is the team manager's office phone number?",
        },
    ])
        .then(({ name, id, email, officeNum }) => { //name, id, email, officeNum check
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
    inquirer.prompt([
        { //engineer name
            type: 'input',
            name: 'name',
            message: "What is the engineer's name?",
        },
        { //engineer ID
            type: 'input',
            name: 'id',
            message: "What is the engineer's employee ID number?",
        },
        { //engineer email
            type: 'input',
            name: 'email',
            message: "What is the engineer's email?",
        },
        { //engineer office number
            type: 'input',
            name: 'gitHub',
            message: "What is the engineer's GitHub username?",
        },
    ])
        .then(({ name }) => { //name, id, email, gitHub?
            this.engineer = new Engineer(name);
            this.buildTeam(); 
        })
}

//getInternInfo inquirer
Team.prototype.getInternInfo = function () {
    console.log("I'm an intern!");
    inquirer.prompt([
        { //intern name
            type: 'input',
            name: 'name',
            message: "What is the intern's name?",
        },
        { //intern ID
            type: 'input',
            name: 'id',
            message: "What is the intern's ID number?",
        },
        { //intern email
            type: 'input',
            name: 'email',
            message: "What is the intern's email?",
        },
        { //intern office number
            type: 'input',
            name: 'school',
            message: "What school does the intern attend?",
        },
    ])
        .then(({ name }) => { //name, id, email, school?
            this.intern = new Intern(name);
            this.buildTeam(); 
        })
}

module.exports = Team;