const Employee = require('../lib/Employee');

class Engineer extends Employee {
    constructor(name, email, gitHub) {
        super(name, email);
        this.gitHub = gitHub;
        // this.role = 'Engineer';
    };
};

module.exports = Engineer;