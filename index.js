// require generateHTML
// require writeFile
// require fs

const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

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
        },
        // { //manager ID
        //     type: 'input',
        //     name: 'id',
        //     message: "What is the team manager's employee ID number?",
        // },
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
        .then(({ name, email, officeNum }) => { //name, id, email, officeNum check
            this.manager = new Manager(
                name,
                email,
                officeNum
            );
            teamArray.push(this.manager);
            console.log(teamArray);
            this.buildTeam();
        })
    // .then(({ name, id, email, officeNum }) => { //name, id, email, officeNum check
    //     this.manager = new Manager(name);
    //     teamArray.push(manager);
    //     console.log(teamArray);
    // })
    // .then(buildTeam); 
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
        // { //engineer ID
        //     type: 'input',
        //     name: 'id',
        //     message: "What is the engineer's employee ID number?",
        // },
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
        .then(({ name, email, gitHub }) => { //name, id, email, gitHub?
            this.engineer = new Engineer(
                name,
                email,
                gitHub
            );
            teamArray.push(this.engineer);
            console.log(teamArray);
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
        // { //intern ID
        //     type: 'input',
        //     name: 'id',
        //     message: "What is the intern's ID number?",
        // },
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
        .then(({ name, email, school }) => { //name, id, email, school?
            this.intern = new Intern(
                name,
                email,
                school
            );
            teamArray.push(this.intern);
            console.log(teamArray);
            this.buildTeam();
        })
}

new Team().getManagerInfo();



//TODO:
//validation
//ID number organized
//move team to own js file in lib?
//phone number validation as 111-111-1111 || 1111111111 \\ 111 111 1111
