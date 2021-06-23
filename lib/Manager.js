const Employee = require('../lib/Employee');

class Manager extends Employee {
    constructor(name, email, officeNum) {
        super(name, email);
        this.officeNum = officeNum;
        this.role = 'Manager';
    };

    getOfficeNumber() {
        // console.log(this.officeNumber);
        return this.officeNum;
    };

    getRole() {
        console.log(this.role);
        return this.role;
    }
};

module.exports = Manager;