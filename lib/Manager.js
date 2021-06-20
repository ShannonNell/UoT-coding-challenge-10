const Employee = require('../lib/Employee');

class Manager extends Employee {
    constructor(name, email, officeNumber) {
        super(name, email);
        this.officeNumber = officeNumber;
        // this.role = 'Manager';
    };
};

module.exports = Manager;