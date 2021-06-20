const Employee = require('../lib/Employee');

class Engineer extends Employee {
    constructor(name, email, gitHub) {
        super(name, email);
        this.gitHub = gitHub;
        this.role = 'Engineer';
    };

    getGithub() {
        // console.log(this.gitHub);
        return this.gitHub;
    }

    getRole() {
        console.log(this.role);
        return this.role;
    }
};

module.exports = Engineer;