const inquirer = require('inquirer');
const fs = require('fs');

//prompr user for answers to questions
const promptUser = () => {
    //prompt user for employee information
    inquirer
        .prompt([
            { //name
                type: 'input',
                name: 'EmployeeName',
                message: "What is your employee's name?",
            },
            // { //id
            //     type: 'list',
            //     name: 'EmployeeID',
            //     message: "What is your employee's ID? Enter 1 for Manager, 2 for Engineer, 3 for Intern.",
            //     choices: ['1', '2', '3'],
            // },
            { //email
                type: 'input',
                name: 'EmployeeEmail',
                message: "What is your employee's email?",
            }
        ]);
};

promptUser();