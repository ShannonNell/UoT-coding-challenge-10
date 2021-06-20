//employee counter starts at 1
let employeeID = 1;

class Employee {
    constructor(name, email) {
        this.name = name;
        this.id = employeeID;
        this.email = email;
        this.role = 'Employee';

        //employee id needs to increase for every new employee
        employeeID++;
    };

    getName() {
        return this.name;
    };

    getID() {
        return this.id;
    };

    getEmail() {
        return this.email;
    };

    getRole() {
        return this.role;
    };
}

module.exports = Employee;