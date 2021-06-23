const inquirer = require('inquirer');
const fs = require('fs');

// require manager, engineer, intern
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
// require generateHTML
// require writeFile

let dataArr = [];

//getManagerInfo inquirer
const getManagerInfo = () => {
    return inquirer
    .prompt([
        { //manager name
            type: 'input',
            name: 'managerName',
            message: "Welcome to the Team Profile Generator. What is your team manager's name?",
        },
        { //manager ID
            type: 'input',
            name: 'managerId',
            message: "What is your team manager's employee ID number?",
        },
        { //manager email
            type: 'input',
            name: 'managerEmail',
            message: "What is your team manager's email?",
        },
        { //manager office number
            type: 'input',
            name: 'managerOfficeNum',
            message: "What is your team manager's office phone number?",
        },
    ])
    .then((data) => {
        const manager = new Manager(
            data.managerName,
            data.managerEmail,
            data.managerOfficeNum
        );
        dataArr.push(manager);
        console.log(dataArr);
    })
    // .then(addToTeam); //this function needs to be created/adjusted still
};

//getEngineerInfo inquirer

//getInternInfo inquirer

//choices to add another team member inquirer

//start with getManagerInfo
getManagerInfo();

module.exports = dataArr;



//TODO:
//validation
//ID number organized
