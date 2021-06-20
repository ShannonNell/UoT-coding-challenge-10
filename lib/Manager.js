const Employee = require('../lib/Employee');

class Manager extends Employee {
    constructor(name, email, officeNumber) {
        super(name, email);
        this.officeNumber = officeNumber;
        this.role = 'Manager';
    };

    getOfficeNumber() {
        // console.log(this.officeNumber);
        return this.officeNumber;
    };

    getRole() {
        console.log(this.role);
        return this.role;
    }
};

module.exports = Manager;