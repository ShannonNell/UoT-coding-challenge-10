const Employee = require('../lib/Employee');

class Intern extends Employee {
    constructor(name, email, school) {
        super(name, email);
        this.school = school;
        this.role = 'Intern';
        // console.log(name, email, school);
    };

    getSchool() {
        // console.log(this.school);
        return this.school;
    };

    getRole() {
        // console.log(this.role);
        return this.role;
    };
};

module.exports = Intern;